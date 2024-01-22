---
draft: false
title: Private Kubernetes ingress with Contour and Tailscale
date: 2022-10-28
description: |
  Join me on a journey trying to figure out how to create a private ingress controller.
---

This is something I originally posted on my old blog, and then just copied over to this one
so it doesn't look too sad and empty. Enjoy it while it lasts!

Well, actually you can use any ingress controller you'd like, I am just going to
use Contour for the sake of this article.  
The star of the show here is [Tailscale](https://tailscale.com). If you haven't
heard of Tailscale yet, it's a zero-setup mesh VPN using WireGuard under the
hood. They also recently released their MagicDNS feature to general
availability, which is going to enable some really cool stuff here.

## That sounds great! What do I need to get started?

I'm glad you asked.  
To get going, we need to have a Kubernetes cluster running version `1.19` or
later, and a way to deploy Helm charts. For the sake of simplicity, this article
will just use the `helm` CLI, although I do recommend using a tool like
[FluxCD](https://fluxcd.io) with its
[Helm Controller](https://fluxcd.io/flux/use-cases/helm/) if the intention is to
deploy this to a production environment. Additionally, there will be some
goodies using [cert-manager](https://cert-manager.io/) for TLS and
[ExternalDNS](https://github.com/kubernetes-sigs/external-dns) for automatic
setup of DNS records, but those are not necessarily required. You can find setup
guides in their respective documentations, though.

## Setting up Contour and Envoy

Now that we got all those pesky requirements out of the way, let's get started.

> Wait, why Contour?

No good reason. I started using it for everything related to ingress and got
used to it. As I said, use anything you like here. The only thing we need is for
the ingress controller to support the `ingressClassName` property.

The Helm chart recommended by the Contour team is the one packaged by Bitnami,
so let's add their repository to Helm:

```shell
❯ helm repo add bitnami https://charts.bitnami.com/bitnami
```

Next, we get to finally configure the thing! Let's create a `values.yaml` file
and fill it with some juicy configuration:

```yaml
contour:
  # If you are using Contour for your public ingress as well,
  # disable CRD management as the two deployments will fight
  # over it otherwise. We don't like fights.
  # Leave this enabled if this is your only Contour deployment - it
  # defaults to `true`.
  # manageCRDs: false
  ingressClass:
    name: private
    default: true
envoy:
  useHostPort: false
  service:
    type: ClusterIP
    externalTrafficPolicy: ''
    clusterIP: 10.96.0.60
```

Okay, so first of all, a little note: the chart will automatically deploy CRDs,
and if you are using the same chart to run a public ingress side-by-side with
our private one, only one of them should be managing those. If Contour is a new
addition to your cluster, `manageCRDs` needs to be true (unless you want to
deploy its CRDs manually).  
Other than that, we have:

- `contour.ingressClass.name`: This can be any name you like. Get creative. Just
  remember it for later.
- `contour.ingressClass.default`: I have both public and private ingresses
  running side-by-side - I like defaulting to the private one so publishing a
  service to the internet needs to be made explicit.
- `envoy.useHostPort`: Using host ports here is unnecessary and will also clash
  with a second deployment.
- `envoy.service.type`: The default type is `LoadBalancer`, which we don't want!
  That would make your cloud provider, whoever that is, provision a load
  balancer for you to use. Since we're going to use some Tailscale magic to
  connect to your service, `ClusterIP` is the way to go.
- `envoy.service.externalTrafficPolicy`: The Helm chart we are using defaults
  this to `Local`, which is incompatible with `ClusterIP` - as such, we are
  `null`ing it out.
- `envoy.service.clusterIP`: In order to be able to point Tailscale to the
  service, we need it to have a static IP address. My cluster uses
  `10.96.0.0/12` for `ClusterIP`s - you can find your range by running
  `kubectl cluster-info dump | grep -m 1 service-cluster-ip-range`. Pick any IP
  address in that range and remember it for later.

That's all the configuration we need for a basic setup. Time to deploy it and
check if it works:

```shell
❯ helm install -f values.yaml -n contour-private contour-private bitnami/contour

❯ kubectl -n contour-private get po,svc
NAME                                          READY   STATUS    RESTARTS   AGE
pod/contour-private-contour-7599b9f76-b88tf   1/1     Running   0          79m
pod/contour-private-envoy-k9z9w               2/2     Running   0          75m
pod/contour-private-envoy-w686z               2/2     Running   0          75m

NAME                            TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)          AGE
service/contour-private         ClusterIP   10.102.198.223   <none>        8001/TCP         79m
service/contour-private-envoy   ClusterIP   10.96.0.60       <none>        80/TCP,443/TCP   79m
```

We can also check if our service is ready to accept connections:

```shell
❯ kubectl port-forward -n contour-private service/contour-private-envoy 8080:80
Forwarding from 127.0.0.1:8080 -> 8080
Forwarding from [::1]:8080 -> 8080

❯ curl -I localhost:8080
HTTP/1.1 404 Not Found
vary: Accept-Encoding
date: Fri, 28 Oct 2022 21:32:27 GMT
server: envoy
transfer-encoding: chunked
```

That looks good! We have Contour and Envoy running (Envoy runs as a `DaemonSet`,
meaning you should have as many pods as you have worker nodes in your cluster)
and an Envoy service with the IP address we specified earlier, **and** it's
responding to requests!

## Putting some scales on our tail

Time for the star of the evening (or morning, whenever you're reading this).  
Tailscale will handle our networking, allowing us to access whatever `Ingress`
resource we define later wherever we are, as long as we are connected to our
tailnet. Right now is a pretty good time to sign up for an account on their
[website](https://tailscale.com) - we are going to need that in a bit.

So, Tailscale does not come with a Helm chart, but the deployment is super
simple, so we will make do with just deploying some YAML. We all love YAML,
right? ... anyone?

Tailscale saves some keys in Kubernetes secrets, so we will need to deploy it
with permissions to update those. That means it's RBAC time!

```yaml
apiVersion: v1
kind: Namespace
metadata:
  name: tailscale
---
apiVersion: v1
kind: ServiceAccount
metadata:
  name: tailscale
  namespace: tailscale
  labels:
    app.kubernetes.io/part-of: tailscale
---
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: tailscale
  namespace: tailscale
  labels:
    app.kubernetes.io/part-of: tailscale
rules:
  - apiGroups: ['']
    resources: ['secrets']
    verbs: ['create', 'get', 'update']
---
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: tailscale
  namespace: tailscale
  labels:
    app.kubernetes.io/part-of: tailscale
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: Role
  name: tailscale
subjects:
  - kind: ServiceAccount
    namespace: tailscale
    name: tailscale
```

Easy enough. This creates a service account called `tailscale` and gives it the
permissions it needs to manage secrets in its own namespace. We can easily apply
this by running

```shell
❯ kubectl apply -f ts-rbac.yaml
namespace/tailscale created
serviceaccount/tailscale created
role.rbac.authorization.k8s.io/tailscale created
rolebinding.rbac.authorization.k8s.io/tailscale created
```

Before deploying the actual Tailscale client, we need a way for it to be able to
authenticate. For that, we will create a secret containing your personal
authentication key (Tailscale will reuse this secret for some other stuff, but
that is behind-the-scenes material we will be ignorant about right now):

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: tailscale-config
  namespace: tailscale
stringData:
  TS_AUTH_KEY: [TS_AUTH_KEY]
```

Go to your
[account's key settings](https://login.tailscale.com/admin/settings/keys), and
generate an auth key of type `Reusable` and `Ephemeral`. Making it reusable
allows more than one machine to use this specific key to authenticate - which
makes sense given that the pod might be scheduled on any available node in our
cluster - and setting it to ephemeral automatically cleans up the machine list
so we can bounce around different nodes without having duplicate or dead devices in our tailnet.

Time to deploy this as well:

```shell
❯ kubectl apply -f ts-config.yaml
secret/tailscale-config created
```

Almost there! I'm gonna forgo adding `kubectl apply` for everything from now on
because nobody likes reading the same thing repeated a million times.

Finally, our deployment:

```yaml
apiVersion: apps/v1
kind: Deployment

metadata:
  name: tailscale
  namespace: tailscale
  labels:
    app.kubernetes.io/name: tailscale
    app.kubernetes.io/part-of: tailscale
    app.kubernetes.io/version: 1.32.2

spec:
  replicas: 1

  selector:
    matchLabels:
      app.kubernetes.io/name: tailscale
      app.kubernetes.io/part-of: tailscale

  template:
    metadata:
      labels:
        app.kubernetes.io/name: tailscale
        app.kubernetes.io/part-of: tailscale
        app.kubernetes.io/version: 1.32.2

    spec:
      serviceAccountName: tailscale

      terminationGracePeriodSeconds: 60

      containers:
        - name: tailscale

          image: ghcr.io/tailscale/tailscale:v1.32.2

          securityContext:
            capabilities:
              add:
                - NET_ADMIN

          env:
            - name: TS_USERSPACE
              value: 'false'
            - name: TS_AUTH_KEY
              valueFrom:
                secretKeyRef:
                  name: tailscale-config
                  key: TS_AUTH_KEY
            - name: TS_KUBE_SECRET
              value: tailscale-config
            - name: TS_DEST_IP
              value: 10.96.0.60
            - name: TS_EXTRA_ARGS
              value: --hostname=nutria
```

Most of it is the basic Kubernetes deployment manifest you can find anywhere,
but here's all the Tailscale-related goodness in the environment variables:

- `TS_AUTH_KEY` and `TS_KUBE_SECRET`: These are references to the secret we
  created one step before this. We are using the same secret to both store the
  authentication key for Tailscale's platform and to allow the client to store
  its WireGuard keys. The latter could be its own secret, and named anything -
  Tailscale will create it for itself since we gave it `create` access to
  secrets earlier.
- `TS_DEST_IP`: Here we go. Are you as excited as I am? This sets up Tailscale
  to proxy all connections it receives to a different IP address, and
  surprise! It's the `ClusterIP` we gave our Envoy service earlier. Anything we
  throw at our Tailscale node now gets automatically proxied to our ingress
  controller.
- `TS_EXTRA_ARGS`: We will perform some magic in a bit, and having a static
  hostname for our node is a requirement for that. My cluster is called Nutria
  ([I mean, look at them...](https://upload.wikimedia.org/wikipedia/commons/f/f5/Nutria-orange.JPG)),
  so that's what I'm going for here. Feel free to pick an animal of your
  choosing.

One more thing to note is that Tailscale needs `NET_ADMIN` capabilities in order to be able to proxy connections. You might need to adjust your cluster's pod security standards.

## Creating an `Ingress` resource

I assume you have something consuming HTTP requests in your cluster. If not,
it's time to add a random nginx container or something for testing. I already
have one of those, so I'll pretend you do, too. It still needs an `Ingress`,
though.

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: nginx
  namespace: schmatzler-dev
  annotations:
    cert-manager.io/cluster-issuer: letsencrypt
  labels:
    app.kubernetes.io/part-of: nginx
spec:
  # This is what we set up in our `values.yaml` earlier!
  ingressClassName: private

  tls:
    - hosts:
        - ingress.schmatzler.dev
      secretName: ingress.schmatzler.dev-tls

  rules:
    - host: ingress.schmatzler.dev
      http:
        paths:
          - pathType: Prefix
            path: /
            backend:
              service:
                name: nginx
                port:
                  name: http
```

Not a lot going on here, except that I am telling my cert-manager deployment to
fetch TLS certificates using Let's Encrypt. If you are not using cert-manager
(you should be!), the annotation and `tls` key can be erased.  
The important part here is setting the `ingressClassName` to whatever we set up
Contour to use.

## The magic is about to begin

Right now, we can do HTTP requests against our Tailscale node's IP address,
but...

```shell
❯ curl -I 100.70.160.223
HTTP/1.1 404 Not Found
vary: Accept-Encoding
date: Fri, 28 Oct 2022 21:54:43 GMT
server: envoy
transfer-encoding: chunked
```

... Envoy does not know what to do with it.  
Which makes sense, given that `Ingress` is set up using the `host` key. Our
node's IP address (which may or may not change over time depending on
Tailscale's implementation and how much we are changing up Kubernetes nodes)
never matches that.

But there's magic to solve our problem. That magic is called MagicDNS and can be
enabled in Tailscale's console right
[here](https://login.tailscale.com/admin/dns). What MagicDNS does is give you a
`something.ts.net` subdomain and registers every device in the network with its
own DNS name. Again, zero configuration.  
Remember our `--hostname=nutria` argument we passed to Tailscale earlier? Thanks
to MagicDNS, every device in our tailnet now resolves `nutria.something.ts.net`
to our Tailscale deployment... which in turn proxies everything to Envoy.

The pieces are coming together, but `nutria.something.ts.net` still isn't what
we set up in our `Ingress` earlier.

## `CNAME` to the rescue

What we **can** do now is create a `CNAME` record to help us out. Going to our
DNS provider and adding
`ingress.schmatzler.dev. 1 IN CNAME nutria.something.ts.net.` should do the
trick... and it does!

`ingress.schmatzler.dev` now resolves to `nutria.something.ts.net` through our
normal DNS resolver, which in turn resolves to our Kubernetes' Tailscale client
IP address through Tailscale's MagicDNS resolver, which then proxies everything
to Envoy, which then matches our initial `ingress.schmatzler.dev` domain against
our `Ingress` resource, which then proxies everything to that nginx service. Are
you still with me?

We could be done here, but manually adding a bunch of `CNAME` records sounds
incredibly tedious. What if...  
ExternalDNS is great for grabbing a cluster's `LoadBalancer` IP address and
setting up A records for whatever hosts are in our ingress, but it **also**
supports some really cool annotations. Time to circle back to our `Ingress`
definition above...

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: nginx
  namespace: schmatzler-dev
  annotations:
    cert-manager.io/cluster-issuer: letsencrypt
    # This is new!
    external-dns.alpha.kubernetes.io/target: nutria.something.ts.net
  labels:
    app.kubernetes.io/part-of: nginx
spec:
# Nothing changes here...
```

Am I telling you that we can just add a single annotation to our `Ingress` in
order to make ExternalDNS create a `CNAME` record to our tailnet node's internal DNS record? Yes, yes,
I am.  

We can now add as many `Ingress` resources as we'd like, for whatever
service, and they will be available from within our tailnet as long as we add
`external-dns.alpha.kubernetes.io/target: nutria.something.ts.net` and
`ingressClassName: private`.  
For users outside of our Tailscale network, the MagicDNS record will not
resolve, and there is no external IP address for our ingress controller, so
external access is not possible. All we are giving away to them is that we are
using Tailscale in some shape or form for accessing our services.
