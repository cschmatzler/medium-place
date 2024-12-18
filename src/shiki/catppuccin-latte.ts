export default {
	name: "catppuccin-latte",
	type: "light",
	semanticHighlighting: true,
	semanticTokenColors: {
		enumMember: {
			foreground: "#04a5e5",
		},
		"variable.constant": {
			foreground: "#df8e1d",
		},
		"variable.defaultLibrary": {
			foreground: "#fe640b",
		},
	},
	tokenColors: [
		{
			name: "All variable",
			scope: ["variable.language", "variable.other"],
			settings: {
				foreground: "#dd7878",
			},
		},
		{
			name: "All function",
			scope: ["entity.name.function", "support.function"],
			settings: {
				foreground: "#1e66f5",
			},
		},
		{
			name: "All parameter",
			scope: ["variable.parameter.function", "variable.parameter.function-call"],
			settings: {
				foreground: "#ea76cb",
				fontStyle: "italic",
			},
		},
		{
			name: "All numeric",
			scope: ["constant.numeric.decimal", "constant.numeric.integer"],
			settings: {
				foreground: "#fe640b",
				fontStyle: "bold",
			},
		},
		{
			name: "All types",
			scope: "entity.name.type",
			settings: {
				foreground: "#1e66f5",
			},
		},
		{
			name: "All conditionals",
			scope: [
				"keyword.control",
				"keyword.control.for",
				"keyword.control.while",
				"keyword.control.if",
				"keyword.control.else",
				"keyword.control.switch",
				"keyword.control.case",
			],
			settings: {
				foreground: "#d20f39",
				fontStyle: "bold",
			},
		},
		{
			name: "All punctuation brackets",
			scope: ["punctuation.brackets", "punctuation.section", "punctuation.definition"],
			settings: {
				foreground: "#8c8fa1",
			},
		},
		{
			name: "All punctuation delimiters",
			scope: "punctuation.semi",
			settings: {
				foreground: "#179299",
			},
		},
		{
			name: "All namespace",
			scope: "entity.name.namespace",
			settings: {
				foreground: "#dc8a78",
			},
		},
		{
			name: "All operators",
			scope: [
				"keyword.operator.comparison",
				"keyword.operator.assignment",
				"keyword.operator.arrow.skinny",
				"keyword.operator.math",
				"keyword.operator.key-value",
				"keyword.operator.misc",
				"keyword.operator.namespace",
			],
			settings: {
				foreground: "#04a5e5",
				fontStyle: "bold",
			},
		},
		{
			name: "All built-in constants",
			scope: "constant.language",
			settings: {
				foreground: "#7287fd",
				fontStyle: "italic",
			},
		},
		{
			name: "All constants",
			scope: "constant.other",
			settings: {
				foreground: "#fe640b",
			},
		},
		{
			name: "JSON quoted string",
			scope: "source.json meta.structure.dictionary.json > string.quoted.json",
			settings: {
				foreground: "#179299",
			},
		},
		{
			name: "JSON punctuation string",
			scope: "source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string",
			settings: {
				foreground: "#179299",
			},
		},
		{
			name: "JSON punct structure",
			scope: [
				"source.json meta.structure.dictionary.json > value.json > string.quoted.json",
				"source.json meta.structure.array.json > value.json > string.quoted.json",
				"source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation",
				"source.json meta.structure.array.json > value.json > string.quoted.json > punctuation",
			],
			settings: {
				foreground: "#40a02b",
			},
		},
		{
			name: "JSON property name",
			scope: "support.type.property-name.json.comments",
			settings: {
				foreground: "#1e66f5",
			},
		},
		{
			name: "JSON constants",
			scope: "constant.language.json.comments",
			settings: {
				foreground: "#fe640b",
			},
		},
		{
			name: "JSON punctuation",
			scope: ["punctuation.separator.dictionary.pair.json.comments", "punctuation.separator.array.json.comments"],
			settings: {
				foreground: "#179299",
			},
		},
		{
			name: "JSON brackets",
			scope: [
				"punctuation.definition.dictionary.begin.json.comments",
				"punctuation.definition.dictionary.end.json.comments",
				"punctuation.definition.array.begin.json.comments",
				"punctuation.definition.array.end.json.comments",
			],
			settings: {
				foreground: "#7c7f93",
			},
		},
		{
			name: "JSON constant language",
			scope: [
				"source.json meta.structure.dictionary.json > constant.language.json",
				"source.json meta.structure.array.json > constant.language.json",
			],
			settings: {
				foreground: "#04a5e5",
			},
		},
		{
			name: "JSON property name [VSCODE-CUSTOM]",
			scope: "support.type.property-name.json",
			settings: {
				foreground: "#179299",
			},
		},
		{
			name: "[VSCODE-CUSTOM] JSON Punctuation for Property Name",
			scope: "support.type.property-name.json punctuation",
			settings: {
				foreground: "#179299",
			},
		},
		{
			name: "unison punctuation",
			scope: [
				"punctuation.definition.delayed.unison",
				"punctuation.definition.list.begin.unison",
				"punctuation.definition.list.end.unison",
				"punctuation.definition.ability.begin.unison",
				"punctuation.definition.ability.end.unison",
				"punctuation.operator.assignment.as.unison",
				"punctuation.separator.pipe.unison",
				"punctuation.separator.delimiter.unison",
				"punctuation.definition.hash.unison",
			],
			settings: {
				foreground: "#179299",
			},
		},
		{
			name: "haskell variable generic-type",
			scope: "variable.other.generic-type.haskell",
			settings: {
				foreground: "#d20f39",
			},
		},
		{
			name: "haskell storage type",
			scope: "storage.type.haskell",
			settings: {
				foreground: "#df8e1d",
			},
		},
		{
			name: "support.variable.magic.python",
			scope: "support.variable.magic.python",
			settings: {
				foreground: "#4c4f69",
			},
		},
		{
			name: "punctuation.separator.parameters.python",
			scope: [
				"punctuation.separator.period.python",
				"punctuation.separator.element.python",
				"punctuation.parenthesis.begin.python",
				"punctuation.parenthesis.end.python",
			],
			settings: {
				foreground: "#4c4f69",
			},
		},
		{
			name: "variable.parameter.function.language.special.self.python",
			scope: "variable.parameter.function.language.special.self.python",
			settings: {
				foreground: "#fe640b",
			},
		},
		{
			name: "Rust modifier",
			scope: "storage.modifier.lifetime.rust",
			settings: {
				foreground: "#4c4f69",
			},
		},
		{
			name: "Rust types",
			scope: "entity.name.type.rust",
			settings: {
				foreground: "#df8e1d",
			},
		},
		{
			name: "Rust functions std",
			scope: "support.function.std.rust",
			settings: {
				foreground: "#1e66f5",
			},
		},
		{
			name: "Rust functions",
			scope: "entity.name.function.rust",
			settings: {
				foreground: "#1e66f5",
			},
		},
		{
			name: "Rust function keyword",
			scope: "keyword.other.fn.rust",
			settings: {
				foreground: "#e64553",
			},
		},
		{
			name: "Rust conditionals",
			scope: "keyword.control.rust",
			settings: {
				foreground: "#8839ef",
				fontStyle: "bold italic",
			},
		},
		{
			name: "Rust punctuation brackets",
			scope: [
				"punctuation.brackets.curly.rust",
				"punctuation.brackets.round.rust",
				"punctuation.brackets.square.rust",
				"punctuation.brackets.attribute.rust",
			],
			settings: {
				foreground: "#8c8fa1",
			},
		},
		{
			name: "Rust namespace",
			scope: "entity.name.namespace.rust",
			settings: {
				foreground: "#dc8a78",
			},
		},
		{
			name: "Rust punctuation delimiters",
			scope: "punctuation.semi.rust",
			settings: {
				foreground: "#179299",
			},
		},
		{
			name: "Rust operators",
			scope: [
				"keyword.operator.comparison.rust",
				"keyword.operator.assignment.equal.rust",
				"keyword.operator.arrow.skinny.rust",
				"keyword.operator.math.rust",
				"keyword.operator.key-value.rust",
				"keyword.operator.misc.rust",
			],
			settings: {
				foreground: "#04a5e5",
			},
		},
		{
			name: "Rust operator namespaces",
			scope: "keyword.operator.namespace.rust",
			settings: {
				foreground: "#179299",
			},
		},
		{
			name: "Rust definition attributes",
			scope: ["punctuation.definition.attribute.rust", "keyword.operator.attribute.inner.rust"],
			settings: {
				foreground: "#179299",
				fontStyle: "bold",
			},
		},
		{
			name: "Rust math logic",
			scope: "constant.numeric.decimal.rust",
			settings: {
				foreground: "#fe640b",
			},
		},
		{
			name: "Rust constants",
			scope: "support.constant.core.rust",
			settings: {
				foreground: "#df8e1d",
			},
		},
		{
			name: "Rust entity name",
			scope: "entity.name.lifetime.rust",
			settings: {
				foreground: "#fe640b",
			},
		},
		{
			name: "Rust variable",
			scope: ["variable.language.rust", "variable.other.rust"],
			settings: {
				foreground: "#4c4f69",
				fontStyle: "italic",
			},
		},
		{
			name: "Rust misc operators",
			scope: "keyword.operator.misc.rust",
			settings: {
				foreground: "#4c4f69",
			},
		},
		{
			name: "Rust sigil operator",
			scope: "keyword.operator.sigil.rust",
			settings: {
				foreground: "#d20f39",
			},
		},
		{
			name: "Lua operators",
			scope: "keyword.operator.lua",
			settings: {
				foreground: "#04a5e5",
				fontStyle: "bold",
			},
		},
		{
			name: "Lua numeric",
			scope: "constant.numeric.integer.lua",
			settings: {
				foreground: "#fe640b",
				fontStyle: "bold",
			},
		},
		{
			name: "Lua other vars",
			scope: "variable.other.lua",
			settings: {
				foreground: "#7287fd",
				fontStyle: "italic",
			},
		},
		{
			name: "Lua brackets",
			scope: ["punctuation.definition.parameters.end.lua", "punctuation.definition.parameters.begin.lua"],
			settings: {
				foreground: "#8c8fa1",
			},
		},
		{
			name: "C++ Punct Delimiters",
			scope: "punctuation.terminator.statement.cpp",
			settings: {
				foreground: "#179299",
				fontStyle: "bold",
			},
		},
		{
			name: "C++ Variables",
			scope: "variable.other.local.cpp",
			settings: {
				foreground: "#4c4f69",
			},
		},
		{
			name: "C++ Operators",
			scope: [
				"punctuation.separator.scope-resolution.cpp",
				"punctuation.separator.scope-resolution.namespace.alias.cpp",
				"punctuation.separator.scope-resolution.namespace.using.cpp",
			],
			settings: {
				foreground: "#04a5e5",
				fontStyle: "bold",
			},
		},
		{
			name: "C++ function",
			scope: "meta.function.c,meta.function.cpp",
			settings: {
				foreground: "#179299",
			},
		},
		{
			name: "C++ constructor/destructor",
			scope: ["entity.name.function.definition.special.constructor", "entity.name.function.definition.special.member.destructor"],
			settings: {
				foreground: "#7287fd",
			},
		},
		{
			name: "C++ directive",
			scope: ["keyword.control.directive", "keyword.other.using.directive", "punctuation.definition.directive"],
			settings: {
				foreground: "#179299",
				fontStyle: "italic",
			},
		},
		{
			name: "C++ ifdef directive",
			scope: [
				"keyword.control.directive.conditional.ifdef.cpp",
				"keyword.control.directive.else.cpp",
				"keyword.control.directive.else.cpp punctuation.definition.directive.cpp",
				"keyword.control.directive.endif.cpp",
				"keyword.control.directive.conditional.ifdef.cpp punctuation.definition.directive.cpp",
				"keyword.control.directive.endif.cpp punctuation.definition.directive.cpp",
			],
			settings: {
				foreground: "#d20f39",
			},
		},
		{
			name: "C++ misc",
			scope: ["entity.name.other.preprocessor.macro.predefined.probably", "entity.name.scope-resolution.cpp"],
			settings: {
				foreground: "#dc8a78",
				fontStyle: "italic",
			},
		},
		{
			name: "C++ pointer/reference",
			scope: ["storage.modifier.pointer.cpp", "storage.modifier.reference.cpp"],
			settings: {
				foreground: "#179299",
			},
		},
		{
			name: "C++ loop/conditional",
			scope: [
				"keyword.control.for",
				"keyword.control.while",
				"keyword.control.if",
				"keyword.control.else",
				"keyword.control.switch",
				"keyword.control.case",
			],
			settings: {
				foreground: "#8839ef",
				fontStyle: "bold",
			},
		},
		{
			name: "C++ return",
			scope: "keyword.control.return",
			settings: {
				foreground: "#ea76cb",
			},
		},
		{
			name: "C++ block",
			scope: [
				"punctuation.section.block.begin.bracket.curly.cpp",
				"punctuation.section.block.end.bracket.curly.cpp",
				"punctuation.terminator.statement.c",
				"punctuation.section.block.begin.bracket.curly.c",
				"punctuation.section.block.end.bracket.curly.c",
				"punctuation.section.parens.begin.bracket.round.c",
				"punctuation.section.parens.end.bracket.round.c",
				"punctuation.section.parameters.begin.bracket.round.c",
				"punctuation.section.parameters.end.bracket.round.c",
			],
			settings: {
				foreground: "#4c4f69",
			},
		},
		{
			name: "C++ storage type modifier",
			scope: "storage.type.built-in.primitive.cpp",
			settings: {
				foreground: "#df8e1d",
			},
		},
		{
			name: "C++/C#",
			scope: ["entity.name.label.cs", "entity.name.scope-resolution.function.call", "entity.name.scope-resolution.function.definition"],
			settings: {
				foreground: "#fe640b",
			},
		},
		{
			name: "support.constant.edge",
			scope: "support.constant.edge",
			settings: {
				foreground: "#d20f39",
			},
		},
		{
			name: "regexp constant character-class",
			scope: "constant.other.character-class.regexp",
			settings: {
				foreground: "#179299",
			},
		},
		{
			name: "regexp operator.quantifier",
			scope: "keyword.operator.quantifier.regexp",
			settings: {
				foreground: "#df8e1d",
			},
		},
		{
			name: "punctuation.definition",
			scope: "punctuation.definition.string.begin,punctuation.definition.string.end",
			settings: {
				foreground: "#40a02b",
			},
		},
		{
			name: "Comment Markup Link",
			scope: "comment markup.link",
			settings: {
				foreground: "#9ca0b0",
			},
		},
		{
			name: "markup diff",
			scope: "markup.changed.diff",
			settings: {
				foreground: "#fe640b",
			},
		},
		{
			name: "diff",
			scope: [
				"meta.diff.header.from-file",
				"meta.diff.header.to-file",
				"punctuation.definition.from-file.diff",
				"punctuation.definition.to-file.diff",
			],
			settings: {
				foreground: "#1e66f5",
			},
		},
		{
			name: "inserted.diff",
			scope: "markup.inserted.diff",
			settings: {
				foreground: "#40a02b",
			},
		},
		{
			name: "deleted.diff",
			scope: "markup.deleted.diff",
			settings: {
				foreground: "#179299",
			},
		},
		{
			name: "Quote multi",
			scope: [
				"string.quoted.docstring.multi",
				"string.quoted.multi",
				"source.python string.quoted.docstring.multi.python punctuation.definition.string.begin.python",
				"source.python string.quoted.docstring.multi.python punctuation.definition.string.end.python",
				"source.python string.quoted.multi.python punctuation.definition.string.begin.python",
				"source.python string.quoted.multi.python punctuation.definition.string.end.python",
				"markup.fenced_code.block",
			],
			settings: {
				foreground: "#40a02b",
				fontStyle: "italic",
			},
		},
		{
			name: "js/ts punctuation separator key-value",
			scope: "punctuation.separator.key-value",
			settings: {
				foreground: "#4c4f69",
			},
		},
		{
			name: "js/ts import keyword",
			scope: "keyword.operator.expression.import",
			settings: {
				foreground: "#1e66f5",
			},
		},
		{
			name: "math js/ts",
			scope: "support.constant.math",
			settings: {
				foreground: "#fe640b",
			},
		},
		{
			name: "math property js/ts",
			scope: "support.constant.property.math",
			settings: {
				foreground: "#df8e1d",
			},
		},
		{
			name: "js/ts variable.other.constant",
			scope: "variable.other.constant",
			settings: {
				foreground: "#4c4f69",
			},
		},
		{
			name: "java type",
			scope: ["storage.type.annotation.java", "storage.type.object.array.java"],
			settings: {
				foreground: "#fe640b",
			},
		},
		{
			name: "java source",
			scope: "source.java",
			settings: {
				foreground: "#179299",
			},
		},
		{
			name: "java modifier.import",
			scope: [
				"punctuation.section.block.begin.java",
				"punctuation.section.block.end.java",
				"punctuation.definition.method-parameters.begin.java",
				"punctuation.definition.method-parameters.end.java",
				"meta.method.identifier.java",
				"punctuation.section.method.begin.java",
				"punctuation.section.method.end.java",
				"punctuation.terminator.java",
				"punctuation.section.class.begin.java",
				"punctuation.section.class.end.java",
				"punctuation.section.inner-class.begin.java",
				"punctuation.section.inner-class.end.java",
				"meta.method-call.java",
				"punctuation.section.class.begin.bracket.curly.java",
				"punctuation.section.class.end.bracket.curly.java",
				"punctuation.section.method.begin.bracket.curly.java",
				"punctuation.section.method.end.bracket.curly.java",
				"punctuation.separator.period.java",
				"punctuation.bracket.angle.java",
				"punctuation.definition.annotation.java",
				"meta.method.body.java",
			],
			settings: {
				foreground: "#4c4f69",
			},
		},
		{
			name: "java modifier.import",
			scope: "meta.method.java",
			settings: {
				foreground: "#1e66f5",
			},
		},
		{
			name: "java modifier.import",
			scope: "storage.modifier.import.java,storage.type.java,storage.type.generic.java",
			settings: {
				foreground: "#fe640b",
			},
		},
		{
			name: "java instanceof",
			scope: "keyword.operator.instanceof.java",
			settings: {
				foreground: "#d20f39",
			},
		},
		{
			name: "java variable.name",
			scope: "meta.definition.variable.name.java",
			settings: {
				foreground: "#4c4f69",
			},
		},
		{
			name: "operator logical",
			scope: ["keyword.operator.logical", "keyword.operator.ternary"],
			settings: {
				foreground: "#04a5e5",
				fontStyle: "bold",
			},
		},
		{
			name: "operator bitwise",
			scope: "keyword.operator.bitwise",
			settings: {
				foreground: "#04a5e5",
			},
		},
		{
			name: "operator channel",
			scope: "keyword.operator.channel",
			settings: {
				foreground: "#04a5e5",
			},
		},
		{
			name: "support.constant.property-value.scss",
			scope: ["support.constant.property-value.scss", "support.constant.property-value.css"],
			settings: {
				foreground: "#df8e1d",
			},
		},
		{
			name: "CSS/SCSS/LESS Operators",
			scope: ["keyword.operator.css", "keyword.operator.scss", "keyword.operator.less"],
			settings: {
				foreground: "#04a5e5",
			},
		},
		{
			name: "css color standard name",
			scope: ["support.constant.color.w3c-standard-color-name.css", "support.constant.color.w3c-standard-color-name.scss"],
			settings: {
				foreground: "#df8e1d",
			},
		},
		{
			name: "css comma",
			scope: "punctuation.separator.list.comma.css",
			settings: {
				foreground: "#4c4f69",
			},
		},
		{
			name: "css attribute-name.id",
			scope: "support.constant.color.w3c-standard-color-name.css",
			settings: {
				foreground: "#df8e1d",
			},
		},
		{
			name: "css property-name",
			scope: "support.type.vendored.property-name.css",
			settings: {
				foreground: "#04a5e5",
			},
		},
		{
			name: "js/ts module",
			scope: ["support.module.node", "support.type.object.module", "support.module.node"],
			settings: {
				foreground: "#fe640b",
			},
		},
		{
			name: "entity.name.type.module",
			scope: "entity.name.type.module",
			settings: {
				foreground: "#fe640b",
			},
		},
		{
			name: "js variable readwrite",
			scope: [
				"variable.other.readwrite",
				"meta.object-literal.key",
				"support.variable.property",
				"support.variable.object.process",
				"support.variable.object.node",
			],
			settings: {
				foreground: "#4c4f69",
			},
		},
		{
			name: "js/ts json",
			scope: "support.constant.json",
			settings: {
				foreground: "#df8e1d",
			},
		},
		{
			name: "js/ts Keyword",
			scope: [
				"keyword.operator.expression.instanceof",
				"keyword.operator.new",
				"keyword.operator.ternary",
				"keyword.operator.optional",
				"keyword.operator.expression.keyof",
			],
			settings: {
				foreground: "#d20f39",
			},
		},
		{
			name: "js/ts console",
			scope: "support.type.object.console",
			settings: {
				foreground: "#179299",
			},
		},
		{
			name: "js/ts support.variable.property.process",
			scope: "support.variable.property.process",
			settings: {
				foreground: "#df8e1d",
			},
		},
		{
			name: "js console function",
			scope: "entity.name.function,support.function.console",
			settings: {
				foreground: "#1e66f5",
			},
		},
		{
			name: "operator",
			scope: "keyword.operator.delete",
			settings: {
				foreground: "#d20f39",
			},
		},
		{
			name: "js dom",
			scope: "support.type.object.dom",
			settings: {
				foreground: "#04a5e5",
			},
		},
		{
			name: "js dom variable",
			scope: ["support.variable.dom", "support.variable.property.dom"],
			settings: {
				foreground: "#179299",
			},
		},
		{
			name: "keyword.operator",
			scope: [
				"keyword.operator.arithmetic",
				"keyword.operator.comparison",
				"keyword.operator.decrement",
				"keyword.operator.increment",
				"keyword.operator.relational",
			],
			settings: {
				foreground: "#04a5e5",
				fontStyle: "bold",
			},
		},
		{
			name: "C operators",
			scope: [
				"keyword.operator.c",
				"keyword.operator.increment.c",
				"keyword.operator.decrement.c",
				"keyword.operator.bitwise.shift.c",
				"keyword.operator.cpp",
				"keyword.operator.increment.cpp",
				"keyword.operator.decrement.cpp",
				"keyword.operator.bitwise.shift.cpp",
			],
			settings: {
				foreground: "#04a5e5",
				fontStyle: "bold",
			},
		},
		{
			name: "Punctuation",
			scope: "punctuation.separator.delimiter",
			settings: {
				foreground: "#4c4f69",
			},
		},
		{
			name: "Other punctuation .c",
			scope: ["punctuation.separator.c", "punctuation.separator.cpp"],
			settings: {
				foreground: "#d20f39",
			},
		},
		{
			name: "C type posix-reserved",
			scope: ["support.type.posix-reserved.c", "support.type.posix-reserved.cpp"],
			settings: {
				foreground: "#04a5e5",
			},
		},
		{
			name: "keyword.operator.sizeof.c",
			scope: ["keyword.operator.sizeof.c", "keyword.operator.sizeof.cpp"],
			settings: {
				foreground: "#d20f39",
			},
		},
		{
			name: "python type",
			scope: "support.type.python",
			settings: {
				foreground: "#04a5e5",
			},
		},
		{
			name: "python block",
			scope: [
				"punctuation.definition.arguments.begin.python",
				"punctuation.definition.arguments.end.python",
				"punctuation.separator.arguments.python",
				"punctuation.definition.list.begin.python",
				"punctuation.definition.list.end.python",
			],
			settings: {
				foreground: "#4c4f69",
			},
		},
		{
			name: "python function-call.generic",
			scope: "meta.function-call.generic.python",
			settings: {
				foreground: "#1e66f5",
			},
		},
		{
			name: "python placeholder reset to normal string",
			scope: "constant.character.format.placeholder.other.python",
			settings: {
				foreground: "#df8e1d",
			},
		},
		{
			name: "Operators",
			scope: "keyword.operator",
			settings: {
				foreground: "#04a5e5",
				fontStyle: "bold",
			},
		},
		{
			name: "Keywords",
			scope: "keyword",
			settings: {
				foreground: "#d20f39",
			},
		},
		{
			name: "Namespaces",
			scope: "entity.name.namespace",
			settings: {
				foreground: "#fe640b",
			},
		},
		{
			name: "Language variables",
			scope: "variable.language",
			settings: {
				foreground: "#fe640b",
			},
		},
		{
			name: "Java Variables",
			scope: "token.variable.parameter.java",
			settings: {
				foreground: "#4c4f69",
			},
		},
		{
			name: "Java Imports",
			scope: "import.storage.java",
			settings: {
				foreground: "#fe640b",
			},
		},
		{
			name: "Packages",
			scope: "token.package.keyword",
			settings: {
				foreground: "#d20f39",
			},
		},
		{
			name: "Packages",
			scope: "token.package",
			settings: {
				foreground: "#4c4f69",
			},
		},
		{
			name: "Functions",
			scope: ["entity.name.function", "meta.require", "support.function.any-method", "variable.function"],
			settings: {
				foreground: "#1e66f5",
			},
		},
		{
			name: "Classes",
			scope: "entity.name.type.namespace",
			settings: {
				foreground: "#fe640b",
			},
		},
		{
			name: "Classes",
			scope: "support.class, entity.name.type.class",
			settings: {
				foreground: "#fe640b",
			},
		},
		{
			name: "Class name",
			scope: "entity.name.class.identifier.namespace.type",
			settings: {
				foreground: "#fe640b",
			},
		},
		{
			name: "Class name",
			scope: ["entity.name.class", "variable.other.class.js", "variable.other.class.ts"],
			settings: {
				foreground: "#fe640b",
			},
		},
		{
			name: "Class name php",
			scope: "variable.other.class.php",
			settings: {
				foreground: "#179299",
			},
		},
		{
			name: "Type Name",
			scope: "entity.name.type",
			settings: {
				foreground: "#fe640b",
			},
		},
		{
			name: "Keyword Control",
			scope: "keyword.control",
			settings: {
				foreground: "#04a5e5",
			},
		},
		{
			name: "Control Elements",
			scope: "control.elements, keyword.operator.less",
			settings: {
				foreground: "#df8e1d",
			},
		},
		{
			name: "Methods",
			scope: "keyword.other.special-method",
			settings: {
				foreground: "#1e66f5",
			},
		},
		{
			name: "Storage",
			scope: "storage",
			settings: {
				foreground: "#d20f39",
			},
		},
		{
			name: "Storage JS TS",
			scope: "token.storage",
			settings: {
				foreground: "#d20f39",
			},
		},
		{
			name: "Source Js Keyword Operator Delete, In, Of, Instanceof, New, Typeof, Void",
			scope: [
				"keyword.operator.expression.delete",
				"keyword.operator.expression.in",
				"keyword.operator.expression.of",
				"keyword.operator.expression.instanceof",
				"keyword.operator.new",
				"keyword.operator.expression.typeof",
				"keyword.operator.expression.void",
			],
			settings: {
				foreground: "#d20f39",
			},
		},
		{
			name: "Java Storage",
			scope: "token.storage.type.java",
			settings: {
				foreground: "#fe640b",
			},
		},
		{
			name: "Support",
			scope: "support.function",
			settings: {
				foreground: "#04a5e5",
			},
		},
		{
			name: "Support type",
			scope: "support.type.property-name",
			settings: {
				foreground: "#4c4f69",
			},
		},
		{
			name: "Support type",
			scope: "support.constant.property-value",
			settings: {
				foreground: "#4c4f69",
			},
		},
		{
			name: "Support type",
			scope: "support.constant.font-name",
			settings: {
				foreground: "#df8e1d",
			},
		},
		{
			name: "Meta tag",
			scope: "meta.tag",
			settings: {
				foreground: "#4c4f69",
			},
		},
		{
			name: "Strings",
			scope: "string",
			settings: {
				foreground: "#40a02b",
			},
		},
		{
			name: "Inherited Class",
			scope: "entity.other.inherited-class",
			settings: {
				foreground: "#fe640b",
			},
		},
		{
			name: "Constant other symbol",
			scope: "constant.other.symbol",
			settings: {
				foreground: "#04a5e5",
			},
		},
		{
			name: "Integers",
			scope: "constant.numeric",
			settings: {
				foreground: "#fe640b",
			},
		},
		{
			name: "Constants",
			scope: "constant",
			settings: {
				foreground: "#df8e1d",
			},
		},
		{
			name: "Constants",
			scope: "punctuation.definition.constant",
			settings: {
				foreground: "#df8e1d",
			},
		},
		{
			name: "Tags",
			scope: "entity.name.tag",
			settings: {
				foreground: "#8839ef",
			},
		},
		{
			name: "Attributes",
			scope: "entity.other.attribute-name",
			settings: {
				foreground: "#1e66f5",
			},
		},
		{
			name: "Attribute IDs",
			scope: "entity.other.attribute-name.id",
			settings: {
				fontStyle: "",
				foreground: "#1e66f5",
			},
		},
		{
			name: "Attribute class",
			scope: "entity.other.attribute-name.class.css",
			settings: {
				fontStyle: "",
				foreground: "#df8e1d",
			},
		},
		{
			name: "SCSS variables",
			scope: "variable.scss",
			settings: {
				foreground: "#8839ef",
			},
		},
		{
			name: "Selector",
			scope: "meta.selector",
			settings: {
				foreground: "#d20f39",
			},
		},
		{
			name: "Headings",
			scope: "markup.heading",
			settings: {
				foreground: "#179299",
			},
		},
		{
			name: "Headings",
			scope: "markup.heading punctuation.definition.heading, entity.name.section",
			settings: {
				foreground: "#1e66f5",
			},
		},
		{
			name: "Units",
			scope: "keyword.other.unit",
			settings: {
				foreground: "#179299",
			},
		},
		{
			name: "Bold",
			scope: "markup.bold,todo.bold",
			settings: {
				foreground: "#df8e1d",
			},
		},
		{
			name: "Bold",
			scope: "punctuation.definition.bold",
			settings: {
				foreground: "#fe640b",
			},
		},
		{
			name: "markup Italic",
			scope: "markup.italic, punctuation.definition.italic,todo.emphasis",
			settings: {
				foreground: "#d20f39",
			},
		},
		{
			name: "emphasis md",
			scope: "emphasis md",
			settings: {
				foreground: "#d20f39",
			},
		},
		{
			name: "[VSCODE-CUSTOM] Markdown headings",
			scope: "entity.name.section.markdown",
			settings: {
				foreground: "#179299",
			},
		},
		{
			name: "[VSCODE-CUSTOM] Markdown heading Punctuation Definition",
			scope: "punctuation.definition.heading.markdown",
			settings: {
				foreground: "#179299",
			},
		},
		{
			name: "punctuation.definition.list.begin.markdown",
			scope: "punctuation.definition.list.begin.markdown",
			settings: {
				foreground: "#179299",
			},
		},
		{
			name: "[VSCODE-CUSTOM] Markdown heading setext",
			scope: "markup.heading.setext",
			settings: {
				foreground: "#4c4f69",
			},
		},
		{
			name: "[VSCODE-CUSTOM] Markdown Punctuation Definition Bold",
			scope: "punctuation.definition.bold.markdown",
			settings: {
				foreground: "#df8e1d",
			},
		},
		{
			name: "[VSCODE-CUSTOM] Markdown Inline Raw",
			scope: "markup.inline.raw.markdown",
			settings: {
				foreground: "#40a02b",
			},
		},
		{
			name: "[VSCODE-CUSTOM] Markdown Inline Raw",
			scope: "markup.inline.raw.string.markdown",
			settings: {
				foreground: "#40a02b",
			},
		},
		{
			name: "[VSCODE-CUSTOM] Markdown List Punctuation Definition",
			scope: "punctuation.definition.list.markdown",
			settings: {
				foreground: "#179299",
			},
		},
		{
			name: "[VSCODE-CUSTOM] Markdown Punctuation Definition String",
			scope: [
				"punctuation.definition.string.begin.markdown",
				"punctuation.definition.string.end.markdown",
				"punctuation.definition.metadata.markdown",
			],
			settings: {
				foreground: "#179299",
			},
		},
		{
			name: "beginning.punctuation.definition.list.markdown",
			scope: ["beginning.punctuation.definition.list.markdown"],
			settings: {
				foreground: "#179299",
			},
		},
		{
			name: "[VSCODE-CUSTOM] Markdown Punctuation Definition Link",
			scope: "punctuation.definition.metadata.markdown",
			settings: {
				foreground: "#179299",
			},
		},
		{
			name: "[VSCODE-CUSTOM] Markdown Underline Link/Image",
			scope: "markup.underline.link.markdown,markup.underline.link.image.markdown",
			settings: {
				foreground: "#d20f39",
			},
		},
		{
			name: "[VSCODE-CUSTOM] Markdown Link Title/Description",
			scope: "string.other.link.title.markdown,string.other.link.description.markdown",
			settings: {
				foreground: "#1e66f5",
			},
		},
		{
			name: "Regular Expressions",
			scope: "string.regexp",
			settings: {
				foreground: "#04a5e5",
			},
		},
		{
			name: "Escape Characters",
			scope: "constant.character.escape",
			settings: {
				foreground: "#04a5e5",
			},
		},
		{
			name: "Embedded",
			scope: "punctuation.section.embedded, variable.interpolation",
			settings: {
				foreground: "#179299",
			},
		},
		{
			name: "Embedded",
			scope: "punctuation.section.embedded.begin,punctuation.section.embedded.end",
			settings: {
				foreground: "#d20f39",
			},
		},
		{
			name: "illegal, deprecated",
			scope: "invalid.illegal, invalid.deprecated",
			settings: {
				foreground: "#9ca0b0",
				fontStyle: "strikethrough",
			},
		},
		{
			name: "illegal",
			scope: "invalid.illegal.bad-ampersand.html",
			settings: {
				foreground: "#4c4f69",
			},
		},
		{
			name: "Broken",
			scope: "invalid.broken",
			settings: {
				foreground: "#d20f39",
			},
		},
		{
			name: "Unimplemented",
			scope: "invalid.unimplemented",
			settings: {
				foreground: "#6c6f85",
			},
		},
		{
			name: "laravel blade tag",
			scope: "text.html.laravel-blade source.php.embedded.line.html entity.name.tag.laravel-blade",
			settings: {
				foreground: "#d20f39",
			},
		},
		{
			name: "laravel blade @",
			scope: "text.html.laravel-blade source.php.embedded.line.html support.constant.laravel-blade",
			settings: {
				foreground: "#d20f39",
			},
		},
		{
			name: "use statement for other classes",
			scope: [
				"support.other.namespace.use.php",
				"support.other.namespace.use-as.php",
				"support.other.namespace.php",
				"entity.other.alias.php",
				"meta.interface.php",
			],
			settings: {
				foreground: "#fe640b",
			},
		},
		{
			name: "error suppression",
			scope: "keyword.operator.error-control.php",
			settings: {
				foreground: "#d20f39",
			},
		},
		{
			name: "php instanceof",
			scope: "keyword.operator.type.php",
			settings: {
				foreground: "#d20f39",
			},
		},
		{
			name: "style double quoted array index normal begin",
			scope: "punctuation.section.array.begin.php",
			settings: {
				foreground: "#4c4f69",
			},
		},
		{
			name: "style double quoted array index normal end",
			scope: "punctuation.section.array.end.php",
			settings: {
				foreground: "#4c4f69",
			},
		},
		{
			name: "php illegal.non-null-typehinted",
			scope: "invalid.illegal.non-null-typehinted.php",
			settings: {
				foreground: "#d20f39",
			},
		},
		{
			name: "php types",
			scope: ["storage.type.php", "meta.other.type.phpdoc.php", "keyword.other.type.php", "keyword.other.array.phpdoc.php"],
			settings: {
				foreground: "#fe640b",
			},
		},
		{
			name: "php call-function",
			scope: "meta.function-call.php,meta.function-call.object.php,meta.function-call.static.php",
			settings: {
				foreground: "#1e66f5",
			},
		},
		{
			name: "php function-resets",
			scope: [
				"punctuation.definition.parameters.begin.bracket.round.php",
				"punctuation.definition.parameters.end.bracket.round.php",
				"punctuation.separator.delimiter.php",
				"punctuation.section.scope.begin.php",
				"punctuation.section.scope.end.php",
				"punctuation.terminator.expression.php",
				"punctuation.definition.arguments.begin.bracket.round.php",
				"punctuation.definition.arguments.end.bracket.round.php",
				"punctuation.definition.storage-type.begin.bracket.round.php",
				"punctuation.definition.storage-type.end.bracket.round.php",
				"punctuation.definition.array.begin.bracket.round.php",
				"punctuation.definition.array.end.bracket.round.php",
				"punctuation.definition.begin.bracket.round.php",
				"punctuation.definition.end.bracket.round.php",
				"punctuation.definition.begin.bracket.curly.php",
				"punctuation.definition.end.bracket.curly.php",
				"punctuation.definition.section.switch-block.end.bracket.curly.php",
				"punctuation.definition.section.switch-block.start.bracket.curly.php",
				"punctuation.definition.section.switch-block.begin.bracket.curly.php",
				"punctuation.definition.section.switch-block.end.bracket.curly.php",
			],
			settings: {
				foreground: "#4c4f69",
			},
		},
		{
			name: "support php constants",
			scope: ["support.constant.ext.php", "support.constant.std.php", "support.constant.core.php", "support.constant.parser-token.php"],
			settings: {
				foreground: "#df8e1d",
			},
		},
		{
			name: "php goto",
			scope: "entity.name.goto-label.php,support.other.php",
			settings: {
				foreground: "#1e66f5",
			},
		},
		{
			name: "php logical/bitwise operator",
			scope: "keyword.operator.logical.php,keyword.operator.bitwise.php,keyword.operator.arithmetic.php",
			settings: {
				foreground: "#04a5e5",
			},
		},
		{
			name: "php regexp operator",
			scope: "keyword.operator.regexp.php",
			settings: {
				foreground: "#d20f39",
			},
		},
		{
			name: "php comparison",
			scope: "keyword.operator.comparison.php",
			settings: {
				foreground: "#04a5e5",
			},
		},
		{
			name: "php heredoc/nowdoc",
			scope: "keyword.operator.heredoc.php,keyword.operator.nowdoc.php",
			settings: {
				foreground: "#d20f39",
			},
		},
		{
			name: "python function decorator @",
			scope: "meta.function.decorator.python",
			settings: {
				foreground: "#1e66f5",
			},
		},
		{
			name: "python function support",
			scope: ["support.token.decorator.python", "meta.function.decorator.identifier.python"],
			settings: {
				foreground: "#04a5e5",
			},
		},
		{
			name: "parameter function js/ts",
			scope: "function.parameter",
			settings: {
				foreground: "#4c4f69",
			},
		},
		{
			name: "brace function",
			scope: "function.brace",
			settings: {
				foreground: "#4c4f69",
			},
		},
		{
			name: "parameter function ruby cs",
			scope: ["function.parameter.ruby", "function.parameter.cs"],
			settings: {
				foreground: "#4c4f69",
			},
		},
		{
			name: "constant.language.symbol.ruby",
			scope: "constant.language.symbol.ruby",
			settings: {
				foreground: "#04a5e5",
			},
		},
		{
			name: "rgb-value",
			scope: "rgb-value",
			settings: {
				foreground: "#04a5e5",
			},
		},
		{
			name: "rgb value",
			scope: "inline-color-decoration rgb-value",
			settings: {
				foreground: "#df8e1d",
			},
		},
		{
			name: "rgb value less",
			scope: "less rgb-value",
			settings: {
				foreground: "#df8e1d",
			},
		},
		{
			name: "sass selector",
			scope: "selector.sass",
			settings: {
				foreground: "#179299",
			},
		},
		{
			name: "ts primitive/builtin types",
			scope: ["support.type.primitive.ts", "support.type.builtin.ts", "support.type.primitive.tsx", "support.type.builtin.tsx"],
			settings: {
				foreground: "#fe640b",
			},
		},
		{
			name: "block scope",
			scope: "block.scope.end,block.scope.begin",
			settings: {
				foreground: "#4c4f69",
			},
		},
		{
			name: "cs storage type",
			scope: "storage.type.cs",
			settings: {
				foreground: "#fe640b",
			},
		},
		{
			name: "cs local variable",
			scope: "entity.name.variable.local.cs",
			settings: {
				foreground: "#4c4f69",
			},
		},
		{
			scope: "token.info-token",
			settings: {
				foreground: "#1e66f5",
			},
		},
		{
			scope: "token.warn-token",
			settings: {
				foreground: "#df8e1d",
			},
		},
		{
			scope: "token.error-token",
			settings: {
				foreground: "#d20f39",
			},
		},
		{
			scope: "token.debug-token",
			settings: {
				foreground: "#d20f39",
			},
		},
		{
			name: "String interpolation",
			scope: [
				"punctuation.definition.template-expression.begin",
				"punctuation.definition.template-expression.end",
				"punctuation.section.embedded",
			],
			settings: {
				foreground: "#d20f39",
			},
		},
		{
			name: "Reset JavaScript string interpolation expression",
			scope: ["meta.template.expression"],
			settings: {
				foreground: "#4c4f69",
			},
		},
		{
			name: "Import module JS",
			scope: ["keyword.operator.module"],
			settings: {
				foreground: "#d20f39",
			},
		},
		{
			name: "js Flowtype",
			scope: ["support.type.type.flowtype"],
			settings: {
				foreground: "#1e66f5",
			},
		},
		{
			name: "js Flow",
			scope: ["support.type.primitive"],
			settings: {
				foreground: "#fe640b",
			},
		},
		{
			name: "js class prop",
			scope: ["meta.property.object"],
			settings: {
				foreground: "#179299",
			},
		},
		{
			name: "js func parameter",
			scope: ["variable.parameter.function.js"],
			settings: {
				foreground: "#179299",
			},
		},
		{
			name: "js template literals begin",
			scope: ["keyword.other.template.begin"],
			settings: {
				foreground: "#40a02b",
			},
		},
		{
			name: "js template literals end",
			scope: ["keyword.other.template.end"],
			settings: {
				foreground: "#40a02b",
			},
		},
		{
			name: "js template literals variable braces begin",
			scope: ["keyword.other.substitution.begin"],
			settings: {
				foreground: "#40a02b",
			},
		},
		{
			name: "js template literals variable braces end",
			scope: ["keyword.other.substitution.end"],
			settings: {
				foreground: "#40a02b",
			},
		},
		{
			name: "go operator",
			scope: ["keyword.operator.arithmetic.go", "keyword.operator.address.go"],
			settings: {
				foreground: "#d20f39",
			},
		},
		{
			name: "Go package name",
			scope: ["entity.name.package.go"],
			settings: {
				foreground: "#fe640b",
			},
		},
		{
			name: "Go import statement",
			scope: "keyword.import.go",
			settings: {
				foreground: "#1e66f5",
			},
		},
		{
			name: "elm prelude",
			scope: ["support.type.prelude.elm"],
			settings: {
				foreground: "#04a5e5",
			},
		},
		{
			name: "elm constant",
			scope: ["support.constant.elm"],
			settings: {
				foreground: "#df8e1d",
			},
		},
		{
			name: "template literal",
			scope: ["punctuation.quasi.element"],
			settings: {
				foreground: "#d20f39",
			},
		},
		{
			name: "html/pug (jade) escaped characters and entities",
			scope: ["constant.character.entity"],
			settings: {
				foreground: "#179299",
			},
		},
		{
			name: "styling css pseudo-elements/classes to be able to differentiate from classes which are the same colour",
			scope: ["entity.other.attribute-name.pseudo-element", "entity.other.attribute-name.pseudo-class"],
			settings: {
				foreground: "#04a5e5",
			},
		},
		{
			name: "Clojure globals",
			scope: ["entity.global.clojure"],
			settings: {
				foreground: "#fe640b",
			},
		},
		{
			name: "Clojure symbols",
			scope: ["meta.symbol.clojure"],
			settings: {
				foreground: "#179299",
			},
		},
		{
			name: "Clojure constants",
			scope: ["constant.keyword.clojure"],
			settings: {
				foreground: "#04a5e5",
			},
		},
		{
			name: "CoffeeScript Function Argument",
			scope: ["meta.arguments.coffee", "variable.parameter.function.coffee"],
			settings: {
				foreground: "#179299",
			},
		},
		{
			name: "Ini Default Text",
			scope: ["source.ini"],
			settings: {
				foreground: "#40a02b",
			},
		},
		{
			name: "Shell definition variables",
			scope: ["punctuation.definition.variable.shell"],
			settings: {
				foreground: "#8c8fa1",
			},
		},
		{
			name: "Shell logical operators",
			scope: ["keyword.operator.logical.shell"],
			settings: {
				foreground: "#04a5e5",
			},
		},
		{
			name: "Shell clauses",
			scope: ["meta.scope.case-clause-body.shell"],
			settings: {
				foreground: "#4c4f69",
			},
		},
		{
			name: "Shell funcs",
			scope: ["meta.scope.group.shell"],
			settings: {
				foreground: "#1e66f5",
			},
		},
		{
			name: "Shell interpolated cmds",
			scope: ["string.interpolated.dollar.shell"],
			settings: {
				foreground: "#df8e1d",
			},
		},
		{
			name: "Shell interpolated strings",
			scope: ["string.quoted.single.shell"],
			settings: {
				foreground: "#7287fd",
			},
		},
		{
			name: "Shell pipe symbol",
			scope: ["keyword.operator.pipe.shell"],
			settings: {
				foreground: "#04a5e5",
			},
		},
		{
			name: "Shell group definition",
			scope: ["punctuation.definition.group.shell"],
			settings: {
				foreground: "#8c8fa1",
			},
		},
		{
			name: "Shell conditionals",
			scope: ["keyword.control.shell"],
			settings: {
				foreground: "#8839ef",
			},
		},
		{
			name: "Shell operators and punct delimiters",
			scope: ["keyword.operator.list.shell"],
			settings: {
				foreground: "#179299",
			},
		},
		{
			name: "Shell parenthesis",
			scope: ["punctuation.definition.logical-expression.shell"],
			settings: {
				foreground: "#8c8fa1",
			},
		},
		{
			name: "Makefile prerequisities",
			scope: ["meta.scope.prerequisites.makefile"],
			settings: {
				foreground: "#179299",
			},
		},
		{
			name: "Makefile text colour",
			scope: ["source.makefile"],
			settings: {
				foreground: "#fe640b",
			},
		},
		{
			name: "Groovy import names",
			scope: ["storage.modifier.import.groovy"],
			settings: {
				foreground: "#fe640b",
			},
		},
		{
			name: "Groovy Methods",
			scope: ["meta.method.groovy"],
			settings: {
				foreground: "#1e66f5",
			},
		},
		{
			name: "Groovy Variables",
			scope: ["meta.definition.variable.name.groovy"],
			settings: {
				foreground: "#179299",
			},
		},
		{
			name: "Groovy Inheritance",
			scope: ["meta.definition.class.inherited.classes.groovy"],
			settings: {
				foreground: "#40a02b",
			},
		},
		{
			name: "HLSL Semantic",
			scope: ["support.variable.semantic.hlsl"],
			settings: {
				foreground: "#fe640b",
			},
		},
		{
			name: "HLSL Types",
			scope: [
				"support.type.texture.hlsl",
				"support.type.sampler.hlsl",
				"support.type.object.hlsl",
				"support.type.object.rw.hlsl",
				"support.type.fx.hlsl",
				"support.type.object.hlsl",
			],
			settings: {
				foreground: "#d20f39",
			},
		},
		{
			name: "SQL Variables",
			scope: ["text.variable", "text.bracketed"],
			settings: {
				foreground: "#179299",
			},
		},
		{
			name: "types",
			scope: ["support.type.swift", "support.type.vb.asp"],
			settings: {
				foreground: "#fe640b",
			},
		},
		{
			name: "heading 1, keyword",
			scope: ["entity.name.function.xi"],
			settings: {
				foreground: "#1e66f5",
			},
		},
		{
			name: "heading 2, callable",
			scope: ["entity.name.class.xi"],
			settings: {
				foreground: "#04a5e5",
			},
		},
		{
			name: "heading 3, property",
			scope: ["constant.character.character-class.regexp.xi"],
			settings: {
				foreground: "#179299",
			},
		},
		{
			name: "heading 4, type, class, interface",
			scope: ["constant.regexp.xi"],
			settings: {
				foreground: "#d20f39",
			},
		},
		{
			name: "heading 5, enums, preprocessor, constant, decorator",
			scope: ["keyword.control.xi"],
			settings: {
				foreground: "#04a5e5",
			},
		},
		{
			name: "heading 6, number",
			scope: ["invalid.xi"],
			settings: {
				foreground: "#4c4f69",
			},
		},
		{
			name: "string",
			scope: ["beginning.punctuation.definition.quote.markdown.xi"],
			settings: {
				foreground: "#40a02b",
			},
		},
		{
			name: "comments",
			scope: ["beginning.punctuation.definition.list.markdown.xi"],
			settings: {
				foreground: "#9ca0b0",
			},
		},
		{
			name: "link",
			scope: ["constant.character.xi"],
			settings: {
				foreground: "#1e66f5",
			},
		},
		{
			name: "accent",
			scope: ["accent.xi"],
			settings: {
				foreground: "#1e66f5",
			},
		},
		{
			name: "wikiword",
			scope: ["wikiword.xi"],
			settings: {
				foreground: "#df8e1d",
			},
		},
		{
			name: "language operators like '+', '-' etc",
			scope: ["constant.other.color.rgb-value.xi"],
			settings: {
				foreground: "#04a5e5",
			},
		},
		{
			name: "elements to dim",
			scope: ["punctuation.definition.tag.xi"],
			settings: {
				foreground: "#9ca0b0",
			},
		},
		{
			name: "Markdown underscore-style headers",
			scope: ["entity.name.label.cs", "markup.heading.setext.1.markdown", "markup.heading.setext.2.markdown"],
			settings: {
				foreground: "#179299",
			},
		},
		{
			name: "meta.brace.square",
			scope: [" meta.brace.square"],
			settings: {
				foreground: "#4c4f69",
			},
		},
		{
			name: "Comments",
			scope: "comment, punctuation.definition.comment",
			settings: {
				fontStyle: "italic",
				foreground: "#9ca0b0",
			},
		},
		{
			name: "[VSCODE-CUSTOM] Markdown Quote",
			scope: "markup.quote.markdown",
			settings: {
				foreground: "#9ca0b0",
			},
		},
		{
			name: "punctuation.definition.block.sequence.item.yaml",
			scope: "punctuation.definition.block.sequence.item.yaml",
			settings: {
				foreground: "#4c4f69",
			},
		},
		{
			scope: ["constant.language.symbol.elixir"],
			settings: {
				foreground: "#04a5e5",
			},
		},
		{
			name: "js/ts italic",
			scope: [
				"entity.other.attribute-name.js",
				"entity.other.attribute-name.ts",
				"entity.other.attribute-name.jsx",
				"entity.other.attribute-name.tsx",
				"variable.parameter",
				"variable.language.super",
			],
			settings: {
				fontStyle: "italic",
			},
		},
		{
			name: "comment",
			scope: "comment.line.double-slash,comment.block.documentation",
			settings: {
				fontStyle: "italic",
			},
		},
		{
			name: "python keyword import",
			scope: "keyword.control.import.python",
			settings: {
				foreground: "#179299",
				fontStyle: "italic",
			},
		},
		{
			name: "python keyword flow",
			scope: "keyword.control.flow.python",
			settings: {
				foreground: "#8839ef",
				fontStyle: "bold",
			},
		},
		{
			name: "python storage type",
			scope: "storage.type.function.python",
			settings: {
				foreground: "#e64553",
				fontStyle: "italic",
			},
		},
		{
			name: "markup.italic.markdown",
			scope: "markup.italic.markdown",
			settings: {
				fontStyle: "italic",
			},
		},
		{
			name: "invalid.deprecated.line-too-long.git-commit",
			scope: "invalid.deprecated.line-too-long.git-commit",
			settings: {
				foreground: "#df8e1d",
				fontStyle: "underline",
			},
		},
	],
	colors: {
		focusBorder: "#00000000",
		foreground: "#4c4f69",
		disabledForeground: "#6c6f85",
		"widget.shadow": "#e6e9ef7f",
		"selection.background": "#acb0be",
		descriptionForeground: "#4c4f69",
		errorForeground: "#d20f39",
		"icon.foreground": "#8839ef",
		"sash.hoverBorder": "#8839ef",
		"window.activeBorder": "#00000000",
		"window.inactiveBorder": "#00000000",
		"textBlockQuote.background": "#e6e9ef",
		"textBlockQuote.border": "#dce0e8",
		"textCodeBlock.background": "#eff1f5",
		"textLink.activeForeground": "#04a5e5",
		"textLink.foreground": "#1e66f5",
		"textPreformat.foreground": "#4c4f69",
		"textSeparator.foreground": "#8839ef",
		"activityBar.background": "#dce0e8",
		"activityBar.foreground": "#8839ef",
		"activityBar.dropBar": "#acb0be99",
		"activityBar.inactiveForeground": "#9ca0b0",
		"activityBar.border": "#00000000",
		"activityBarBadge.background": "#8839ef",
		"activityBarBadge.foreground": "#dce0e8",
		"activityBar.activeBorder": "#00000000",
		"activityBar.activeBackground": "#00000000",
		"activityBar.activeFocusBorder": "#00000000",
		"badge.background": "#bcc0cc",
		"badge.foreground": "#4c4f69",
		"breadcrumb.activeSelectionForeground": "#8839ef",
		"breadcrumb.background": "#e6e9ef",
		"breadcrumb.focusForeground": "#8839ef",
		"breadcrumb.foreground": "#4c4f69cc",
		"breadcrumbPicker.background": "#e6e9ef",
		"button.background": "#8839ef",
		"button.foreground": "#dce0e8",
		"button.border": "#00000000",
		"button.separator": "#00000000",
		"button.hoverBackground": "#9c4dff",
		"button.secondaryForeground": "#4c4f69",
		"button.secondaryBackground": "#acb0be",
		"button.secondaryHoverBackground": "#c0c4d2",
		"checkbox.background": "#bcc0cc",
		"checkbox.border": "#00000000",
		"checkbox.foreground": "#8839ef",
		"dropdown.background": "#e6e9ef",
		"dropdown.listBackground": "#acb0be",
		"dropdown.border": "#8839ef",
		"dropdown.foreground": "#4c4f69",
		"debugToolBar.background": "#dce0e8",
		"debugToolBar.border": "#00000000",
		"debugExceptionWidget.background": "#dce0e8",
		"debugExceptionWidget.border": "#8839ef",
		"debugTokenExpression.number": "#fe640b",
		"debugTokenExpression.boolean": "#8839ef",
		"debugTokenExpression.string": "#40a02b",
		"debugTokenExpression.error": "#d20f39",
		"debugIcon.breakpointForeground": "#d20f39",
		"debugIcon.breakpointDisabledForeground": "#d20f3999",
		"debugIcon.breakpointUnverifiedForeground": "#eff1f5",
		"debugIcon.breakpointCurrentStackframeForeground": "#acb0be",
		"debugIcon.breakpointStackframeForeground": "#acb0be",
		"debugIcon.startForeground": "#40a02b",
		"debugIcon.pauseForeground": "#1e66f5",
		"debugIcon.stopForeground": "#d20f39",
		"debugIcon.disconnectForeground": "#acb0be",
		"debugIcon.restartForeground": "#179299",
		"debugIcon.stepOverForeground": "#8839ef",
		"debugIcon.stepIntoForeground": "#4c4f69",
		"debugIcon.stepOutForeground": "#4c4f69",
		"debugIcon.continueForeground": "#40a02b",
		"debugIcon.stepBackForeground": "#acb0be",
		"debugConsole.infoForeground": "#1e66f5",
		"debugConsole.warningForeground": "#fe640b",
		"debugConsole.errorForeground": "#d20f39",
		"debugConsole.sourceForeground": "#dc8a78",
		"debugConsoleInputIcon.foreground": "#4c4f69",
		"diffEditor.border": "#acb0be",
		"diffEditor.insertedTextBackground": "#40a02b19",
		"diffEditor.removedTextBackground": "#d20f3919",
		"diffEditor.insertedLineBackground": "#40a02b26",
		"diffEditor.removedLineBackground": "#d20f3926",
		"diffEditor.diagonalFill": "#acb0be99",
		"diffEditorOverview.insertedForeground": "#40a02bcc",
		"diffEditorOverview.removedForeground": "#d20f39cc",
		"editor.background": "#eff1f5",
		"editor.findMatchBackground": "#acb0be",
		"editor.findMatchBorder": "#8839ef66",
		"editor.findMatchHighlightBackground": "#fe640b59",
		"editor.findMatchHighlightBorder": "#00000000",
		"editor.findRangeHighlightBackground": "#acb0be4c",
		"editor.findRangeHighlightBorder": "#00000000",
		"editor.foldBackground": "#04a5e53f",
		"editor.foreground": "#4c4f69",
		"editor.hoverHighlightBackground": "#04a5e53f",
		"editor.inactiveSelectionBackground": "#00000000",
		"editor.lineHighlightBackground": "#4c4f6911",
		"editor.lineHighlightBorder": "#eff1f5",
		"editor.rangeHighlightBackground": "#04a5e53f",
		"editor.rangeHighlightBorder": "#00000000",
		"editor.selectionBackground": "#acb0be",
		"editor.selectionHighlightBackground": "#7c7f9366",
		"editor.selectionHighlightBorder": "#04a5e533",
		"editor.wordHighlightBackground": "#acb0beb2",
		"editor.wordHighlightStrongBackground": "#acb0be7f",
		"editorBracketMatch.background": "#7c7f9319",
		"editorBracketMatch.border": "#7c7f93",
		"editorCodeLens.foreground": "#8c8fa1",
		"editorCursor.background": "#eff1f5",
		"editorCursor.foreground": "#dc8a78",
		"editorError.background": "#00000000",
		"editorError.border": "#00000000",
		"editorError.foreground": "#d20f39",
		"editorGroup.border": "#acb0be",
		"editorGroup.dropBackground": "#acb0be99",
		"editorGroup.emptyBackground": "#eff1f5",
		"editorGroupHeader.tabsBackground": "#dce0e8",
		"editorGutter.addedBackground": "#40a02b",
		"editorGutter.background": "#eff1f5",
		"editorGutter.commentRangeForeground": "#7c7f93",
		"editorGutter.deletedBackground": "#d20f39",
		"editorGutter.foldingControlForeground": "#7c7f93",
		"editorGutter.modifiedBackground": "#04a5e5",
		"editorHoverWidget.background": "#e6e9ef",
		"editorHoverWidget.border": "#acb0be",
		"editorHoverWidget.foreground": "#4c4f69",
		"editorIndentGuide.activeBackground": "#acb0be",
		"editorIndentGuide.background": "#bcc0cc",
		"editorInfo.background": "#00000000",
		"editorInfo.border": "#00000000",
		"editorInfo.foreground": "#1e66f5",
		"editorInlayHint.foreground": "#acb0be",
		"editorInlayHint.background": "#e6e9efbf",
		"editorInlayHint.typeForeground": "#5c5f77",
		"editorInlayHint.typeBackground": "#e6e9efbf",
		"editorInlayHint.parameterForeground": "#6c6f85",
		"editorInlayHint.parameterBackground": "#e6e9efbf",
		"editorLineNumber.activeForeground": "#8839ef",
		"editorLineNumber.foreground": "#8c8fa1",
		"editorLink.activeForeground": "#8839ef",
		"editorMarkerNavigation.background": "#e6e9ef",
		"editorMarkerNavigationError.background": "#d20f39",
		"editorMarkerNavigationInfo.background": "#1e66f5",
		"editorMarkerNavigationWarning.background": "#df8e1d",
		"editorOverviewRuler.background": "#e6e9ef",
		"editorOverviewRuler.border": "#4c4f6911",
		"editorRuler.foreground": "#acb0be",
		"editor.stackFrameHighlightBackground": "#df8e1d26",
		"editor.focusedStackFrameHighlightBackground": "#40a02b26",
		"editorStickyScrollHover.background": "#ccd0da",
		"editorSuggestWidget.background": "#e6e9ef",
		"editorSuggestWidget.border": "#acb0be",
		"editorSuggestWidget.foreground": "#4c4f69",
		"editorSuggestWidget.highlightForeground": "#8839ef",
		"editorSuggestWidget.selectedBackground": "#ccd0da",
		"editorWarning.background": "#00000000",
		"editorWarning.border": "#00000000",
		"editorWarning.foreground": "#fe640b",
		"editorWhitespace.foreground": "#7c7f9366",
		"editorWidget.background": "#e6e9ef",
		"editorWidget.foreground": "#4c4f69",
		"editorWidget.resizeBorder": "#acb0be",
		"editorLightBulb.foreground": "#df8e1d",
		"extensionButton.prominentForeground": "#dce0e8",
		"extensionButton.prominentBackground": "#8839ef",
		"extensionButton.prominentHoverBackground": "#9c4dff",
		"extensionBadge.remoteBackground": "#1e66f5",
		"extensionBadge.remoteForeground": "#dce0e8",
		"extensionIcon.starForeground": "#df8e1d",
		"extensionIcon.verifiedForeground": "#40a02b",
		"extensionIcon.preReleaseForeground": "#dc8a78",
		"extensionIcon.sponsorForeground": "#ea76cb",
		"gitDecoration.addedResourceForeground": "#40a02b",
		"gitDecoration.conflictingResourceForeground": "#8839ef",
		"gitDecoration.deletedResourceForeground": "#d20f39",
		"gitDecoration.ignoredResourceForeground": "#9ca0b0",
		"gitDecoration.modifiedResourceForeground": "#df8e1d",
		"gitDecoration.stageDeletedResourceForeground": "#d20f39",
		"gitDecoration.stageModifiedResourceForeground": "#df8e1d",
		"gitDecoration.submoduleResourceForeground": "#1e66f5",
		"gitDecoration.untrackedResourceForeground": "#40a02b",
		"input.background": "#ccd0da",
		"input.border": "#00000000",
		"input.foreground": "#4c4f69",
		"input.placeholderForeground": "#4c4f6972",
		"inputOption.activeBackground": "#1e66f526",
		"inputOption.activeBorder": "#dce0e833",
		"inputOption.activeForeground": "#4c4f69",
		"inputValidation.errorBackground": "#d20f39",
		"inputValidation.errorBorder": "#dce0e833",
		"inputValidation.errorForeground": "#dce0e8",
		"inputValidation.infoBackground": "#1e66f5",
		"inputValidation.infoBorder": "#dce0e833",
		"inputValidation.infoForeground": "#dce0e8",
		"inputValidation.warningBackground": "#fe640b",
		"inputValidation.warningBorder": "#dce0e833",
		"inputValidation.warningForeground": "#dce0e8",
		"list.activeSelectionBackground": "#bcc0cc",
		"list.activeSelectionForeground": "#4c4f69",
		"list.dropBackground": "#acb0be99",
		"list.focusBackground": "#ccd0da",
		"list.focusForeground": "#4c4f69",
		"list.focusOutline": "#00000000",
		"list.highlightForeground": "#8839ef",
		"list.hoverBackground": "#acb0be",
		"list.hoverForeground": "#4c4f69",
		"list.inactiveSelectionBackground": "#bcc0cc",
		"list.inactiveSelectionForeground": "#4c4f69",
		"list.warningForeground": "#df8e1d",
		"listFilterWidget.background": "#bcc0cc",
		"listFilterWidget.noMatchesOutline": "#d20f39",
		"listFilterWidget.outline": "#00000000",
		"tree.indentGuidesStroke": "#9ca0b0",
		"menu.background": "#eff1f5",
		"menu.border": "#eff1f57f",
		"menu.foreground": "#4c4f69",
		"menu.selectionBackground": "#acb0be",
		"menu.selectionBorder": "#00000000",
		"menu.selectionForeground": "#4c4f69",
		"menu.separatorBackground": "#acb0be",
		"menubar.selectionBackground": "#bcc0cc",
		"menubar.selectionForeground": "#4c4f69",
		"merge.commonContentBackground": "#bcc0cc",
		"merge.commonHeaderBackground": "#acb0be",
		"merge.currentContentBackground": "#40a02b33",
		"merge.currentHeaderBackground": "#40a02b66",
		"merge.incomingContentBackground": "#1e66f533",
		"merge.incomingHeaderBackground": "#1e66f566",
		"minimap.background": "#e6e9ef7f",
		"minimap.errorHighlight": "#d20f39",
		"minimap.findMatchHighlight": "#acb0be",
		"minimap.selectionHighlight": "#acb0be",
		"minimap.warningHighlight": "#df8e1d",
		"minimapGutter.addedBackground": "#40a02b",
		"minimapGutter.deletedBackground": "#d20f39",
		"minimapGutter.modifiedBackground": "#04a5e5",
		"notificationCenter.border": "#8839ef",
		"notificationCenterHeader.foreground": "#4c4f69",
		"notificationCenterHeader.background": "#e6e9ef",
		"notificationToast.border": "#8839ef",
		"notifications.foreground": "#4c4f69",
		"notifications.background": "#e6e9ef",
		"notifications.border": "#8839ef",
		"notificationLink.foreground": "#1e66f5",
		"notificationsErrorIcon.foreground": "#d20f39",
		"notificationsWarningIcon.foreground": "#fe640b",
		"notificationsInfoIcon.foreground": "#1e66f5",
		"panel.background": "#eff1f5",
		"panel.border": "#acb0be",
		"panelSection.border": "#acb0be",
		"panelSection.dropBackground": "#acb0be99",
		"panelTitle.activeBorder": "#4c4f69",
		"panelTitle.activeForeground": "#4c4f69",
		"panelTitle.inactiveForeground": "#6c6f85",
		"peekView.border": "#8839ef",
		"peekViewEditor.background": "#e6e9ef",
		"peekViewEditor.matchHighlightBackground": "#fe640b3f",
		"peekViewEditor.matchHighlightBorder": "#fe640b",
		"peekViewEditorGutter.background": "#e6e9ef",
		"peekViewResult.background": "#e6e9ef",
		"peekViewResult.fileForeground": "#4c4f69",
		"peekViewResult.lineForeground": "#4c4f69",
		"peekViewResult.matchHighlightBackground": "#fe640b3f",
		"peekViewResult.selectionBackground": "#ccd0da",
		"peekViewResult.selectionForeground": "#4c4f69",
		"peekViewTitle.background": "#eff1f5",
		"peekViewTitleDescription.foreground": "#5c5f77b2",
		"peekViewTitleLabel.foreground": "#4c4f69",
		"pickerGroup.border": "#8839ef",
		"pickerGroup.foreground": "#8839ef",
		"progressBar.background": "#8839ef",
		"scrollbar.shadow": "#dce0e8",
		"scrollbarSlider.activeBackground": "#ccd0da66",
		"scrollbarSlider.background": "#acb0be7f",
		"scrollbarSlider.hoverBackground": "#9ca0b0",
		"settings.focusedRowBackground": "#acb0be33",
		"settings.headerForeground": "#4c4f69",
		"settings.modifiedItemIndicator": "#8839ef",
		"settings.dropdownBackground": "#bcc0cc",
		"settings.dropdownListBorder": "#00000000",
		"settings.textInputBackground": "#bcc0cc",
		"settings.textInputBorder": "#00000000",
		"settings.numberInputBackground": "#bcc0cc",
		"settings.numberInputBorder": "#00000000",
		"sideBar.background": "#e6e9ef",
		"sideBar.dropBackground": "#acb0be99",
		"sideBar.foreground": "#4c4f69",
		"sideBar.border": "#00000000",
		"sideBarSectionHeader.background": "#e6e9ef",
		"sideBarSectionHeader.foreground": "#4c4f69",
		"sideBarTitle.foreground": "#8839ef",
		"sideBarTitle.background": "#dce0e8",
		"statusBar.background": "#dce0e8",
		"statusBar.foreground": "#4c4f69",
		"statusBar.border": "#00000000",
		"statusBar.noFolderBackground": "#dce0e8",
		"statusBar.noFolderForeground": "#4c4f69",
		"statusBar.debuggingBackground": "#fe640b",
		"statusBar.debuggingForeground": "#dce0e8",
		"statusBarItem.remoteBackground": "#1e66f5",
		"statusBarItem.remoteForeground": "#dce0e8",
		"statusBarItem.activeBackground": "#acb0be66",
		"statusBarItem.hoverBackground": "#acb0be33",
		"statusBarItem.prominentForeground": "#8839ef",
		"statusBarItem.prominentBackground": "#00000000",
		"statusBarItem.prominentHoverBackground": "#acb0be33",
		"statusBarItem.errorForeground": "#d20f39",
		"statusBarItem.errorBackground": "#00000000",
		"statusBarItem.warningForeground": "#fe640b",
		"statusBarItem.warningBackground": "#00000000",
		"commandCenter.foreground": "#5c5f77",
		"commandCenter.activeForeground": "#8839ef",
		"commandCenter.background": "#dce0e8",
		"commandCenter.activeBackground": "#acb0be33",
		"commandCenter.border": "#8839ef",
		"tab.activeBackground": "#eff1f5",
		"tab.activeBorder": "#8839ef",
		"tab.activeBorderTop": "#00000000",
		"tab.activeForeground": "#8839ef",
		"tab.border": "#e6e9ef",
		"tab.inactiveBackground": "#e6e9ef",
		"tab.inactiveForeground": "#9ca0b0",
		"terminal.ansiBlack": "#9ca0b0",
		"terminal.ansiBlue": "#1e66f5",
		"terminal.ansiBrightBlack": "#8c8fa1",
		"terminal.ansiBrightBlue": "#1e66f5",
		"terminal.ansiBrightCyan": "#04a5e5",
		"terminal.ansiBrightGreen": "#40a02b",
		"terminal.ansiBrightMagenta": "#ea76cb",
		"terminal.ansiBrightRed": "#d20f39",
		"terminal.ansiBrightWhite": "#4c4f69",
		"terminal.ansiBrightYellow": "#df8e1d",
		"terminal.ansiCyan": "#04a5e5",
		"terminal.ansiGreen": "#40a02b",
		"terminal.ansiMagenta": "#ea76cb",
		"terminal.ansiRed": "#d20f39",
		"terminal.ansiWhite": "#7c7f93",
		"terminal.ansiYellow": "#df8e1d",
		"terminal.border": "#acb0be",
		"terminal.foreground": "#4c4f69",
		"terminal.dropBackground": "#acb0be99",
		"terminal.selectionBackground": "#acb0be",
		"terminalCursor.background": "#eff1f5",
		"terminalCursor.foreground": "#dc8a78",
		"titleBar.activeBackground": "#dce0e8",
		"titleBar.activeForeground": "#4c4f69",
		"titleBar.inactiveBackground": "#dce0e8",
		"titleBar.inactiveForeground": "#4c4f697f",
		"titleBar.border": "#00000000",
		"welcomePage.tileBackground": "#e6e9ef",
		"welcomePage.progress.background": "#dce0e8",
		"welcomePage.progress.foreground": "#8839ef",
		"walkThrough.embeddedEditorBackground": "#eff1f54c",
		"symbolIcon.textForeground": "#4c4f69",
		"symbolIcon.arrayForeground": "#fe640b",
		"symbolIcon.booleanForeground": "#8839ef",
		"symbolIcon.classForeground": "#df8e1d",
		"symbolIcon.colorForeground": "#ea76cb",
		"symbolIcon.constantForeground": "#fe640b",
		"symbolIcon.constructorForeground": "#7287fd",
		"symbolIcon.enumeratorForeground": "#df8e1d",
		"symbolIcon.enumeratorMemberForeground": "#df8e1d",
		"symbolIcon.eventForeground": "#ea76cb",
		"symbolIcon.fieldForeground": "#4c4f69",
		"symbolIcon.fileForeground": "#8839ef",
		"symbolIcon.folderForeground": "#8839ef",
		"symbolIcon.functionForeground": "#1e66f5",
		"symbolIcon.interfaceForeground": "#df8e1d",
		"symbolIcon.keyForeground": "#179299",
		"symbolIcon.keywordForeground": "#8839ef",
		"symbolIcon.methodForeground": "#1e66f5",
		"symbolIcon.moduleForeground": "#4c4f69",
		"symbolIcon.namespaceForeground": "#df8e1d",
		"symbolIcon.nullForeground": "#e64553",
		"symbolIcon.numberForeground": "#fe640b",
		"symbolIcon.objectForeground": "#df8e1d",
		"symbolIcon.operatorForeground": "#179299",
		"symbolIcon.packageForeground": "#dd7878",
		"symbolIcon.propertyForeground": "#e64553",
		"symbolIcon.referenceForeground": "#df8e1d",
		"symbolIcon.snippetForeground": "#dd7878",
		"symbolIcon.stringForeground": "#40a02b",
		"symbolIcon.structForeground": "#179299",
		"symbolIcon.typeParameterForeground": "#e64553",
		"symbolIcon.unitForeground": "#4c4f69",
		"symbolIcon.variableForeground": "#4c4f69",
		"charts.foreground": "#4c4f69",
		"charts.lines": "#5c5f77",
		"charts.red": "#d20f39",
		"charts.blue": "#1e66f5",
		"charts.yellow": "#df8e1d",
		"charts.orange": "#fe640b",
		"charts.green": "#40a02b",
		"charts.purple": "#8839ef",
		"errorLens.errorBackground": "#d20f3926",
		"errorLens.errorMessageBackground": "#d20f3926",
		"errorLens.errorBackgroundLight": "#d20f3926",
		"errorLens.errorForeground": "#d20f39",
		"errorLens.errorForegroundLight": "#d20f39",
		"errorLens.warningBackground": "#fe640b26",
		"errorLens.warningMessageBackground": "#fe640b26",
		"errorLens.warningBackgroundLight": "#fe640b26",
		"errorLens.warningForeground": "#fe640b",
		"errorLens.warningForegroundLight": "#fe640b",
		"errorLens.infoBackground": "#1e66f526",
		"errorLens.infoMessageBackground": "#1e66f526",
		"errorLens.infoBackgroundLight": "#1e66f526",
		"errorLens.infoForeground": "#1e66f5",
		"errorLens.infoForegroundLight": "#1e66f5",
		"errorLens.hintBackground": "#40a02b26",
		"errorLens.hintMessageBackground": "#40a02b26",
		"errorLens.hintBackgroundLight": "#40a02b26",
		"errorLens.hintForeground": "#40a02b",
		"errorLens.hintForegroundLight": "#40a02b",
		"errorLens.statusBarIconErrorForeground": "#d20f39",
		"errorLens.statusBarIconWarningForeground": "#fe640b",
		"errorLens.statusBarErrorForeground": "#d20f39",
		"errorLens.statusBarWarningForeground": "#fe640b",
		"errorLens.statusBarInfoForeground": "#1e66f5",
		"errorLens.statusBarHintForeground": "#40a02b",
		"editorBracketHighlight.foreground1": "#d20f39",
		"editorBracketHighlight.foreground2": "#fe640b",
		"editorBracketHighlight.foreground3": "#df8e1d",
		"editorBracketHighlight.foreground4": "#40a02b",
		"editorBracketHighlight.foreground5": "#209fb5",
		"editorBracketHighlight.foreground6": "#8839ef",
		"editorBracketHighlight.unexpectedBracket.foreground": "#e64553",
	},
};
