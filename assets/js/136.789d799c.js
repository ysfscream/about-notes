(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{290:function(t,_,v){"use strict";v.r(_);var a=v(0),e=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("div",{staticClass:"content"},[v("h2",{attrs:{id:"regexp正则表达式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#regexp正则表达式","aria-hidden":"true"}},[t._v("#")]),t._v(" RegExp正则表达式")]),t._v(" "),v("blockquote",[v("p",[v("code",[t._v("RegExp")]),t._v("对象表示正则表达式，它是对字符串执行模式匹配的强大工具")])]),t._v(" "),v("p",[v("img",{attrs:{src:"/about-blog/media/about-blog/about-blog/media/regexp.png",alt:""}})]),t._v(" "),v("p",[t._v("regexp.exec(String)（最强大，最慢的）")]),t._v(" "),v("p",[t._v("它成功匹配到的 regexp 和 字符串的 String，返回一个数组，下标0包含正则表达式匹配的子字符串，1，2，3··· 对应分组1，2，3···捕获的文本")]),t._v(" "),v("p",[t._v("regexp.test(string) (最简单，最快)")]),t._v(" "),v("p",[t._v("返回 true false，不要对这个方法使用 g 标识。")]),t._v(" "),v("h3",{attrs:{id:"修饰符"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#修饰符","aria-hidden":"true"}},[t._v("#")]),t._v(" 修饰符")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("i")]),t._v("执行对大小写不敏感的匹配")]),t._v(" "),v("li",[v("code",[t._v("g")]),t._v("执行全局的匹配（查找所有匹配而非在找到第一个匹配后停止）")]),t._v(" "),v("li",[v("code",[t._v("m")]),t._v("执行多行匹配")])]),t._v(" "),v("h3",{attrs:{id:"方括号"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#方括号","aria-hidden":"true"}},[t._v("#")]),t._v(" 方括号")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("[abc]")]),t._v("查找方括号之间的任何字符")]),t._v(" "),v("li",[v("code",[t._v("[^abc]")]),t._v("查找任何不在方括号内的字符")]),t._v(" "),v("li",[v("code",[t._v("[0-9]")]),t._v("查找任何从0-9的数字")]),t._v(" "),v("li",[v("code",[t._v("[a-z]")]),t._v("查找任何从a-z的字母")]),t._v(" "),v("li",[v("code",[t._v("[A-Z]")]),t._v("查找任何从A-Z的字母")]),t._v(" "),v("li",[v("code",[t._v("[adgk]")]),t._v("查找给定集合内的任何字符")]),t._v(" "),v("li",[v("code",[t._v("[^adgk]")]),t._v("查找给集合外内的任何字符")]),t._v(" "),v("li",[v("code",[t._v("(red|blue|green)")]),t._v("查找任何指定的选项")])]),t._v(" "),v("h3",{attrs:{id:"元字符"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#元字符","aria-hidden":"true"}},[t._v("#")]),t._v(" 元字符")]),t._v(" "),v("p",[t._v("​")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("元字符")]),t._v(" "),v("th",[t._v("对应说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v(".")]),t._v(" "),v("td",[t._v("匹配除换行符之外的任意字符")])]),t._v(" "),v("tr",[v("td",[t._v("\\w")]),t._v(" "),v("td",[t._v("匹配字母数字下划线，等同于：[a-zA-Z0-9_]")])]),t._v(" "),v("tr",[v("td",[t._v("\\s")]),t._v(" "),v("td",[t._v("匹配任意空白符")])]),t._v(" "),v("tr",[v("td",[t._v("\\d")]),t._v(" "),v("td",[t._v("匹配数字，等同于[0-9]")])]),t._v(" "),v("tr",[v("td",[t._v("\\b")]),t._v(" "),v("td",[t._v("匹配单词边界")])]),t._v(" "),v("tr",[v("td",[t._v("|")]),t._v(" "),v("td",[t._v("或匹配，如 /x|y/ 正则可匹配x或y两个字符")])]),t._v(" "),v("tr",[v("td",[t._v("^")]),t._v(" "),v("td",[t._v("匹配字符串的开始")])]),t._v(" "),v("tr",[v("td",[t._v("$")]),t._v(" "),v("td",[t._v("匹配字符串的结束")])])])]),t._v(" "),v("h3",{attrs:{id:"反义字符"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#反义字符","aria-hidden":"true"}},[t._v("#")]),t._v(" 反义字符")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("反义字符")]),t._v(" "),v("th",[t._v("对应说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("[^x]")]),t._v(" "),v("td",[t._v("匹配除“x”之外的所有字符，其中“x”可以为任意字符")])]),t._v(" "),v("tr",[v("td",[t._v("[^xyz]")]),t._v(" "),v("td",[t._v("同上，匹配除“x、y、z”之外的任意字符")])]),t._v(" "),v("tr",[v("td",[t._v("\\W")]),t._v(" "),v("td",[t._v("匹配除了字母、数字、下划线之外的所有字符，等同于：[^\\w]")])]),t._v(" "),v("tr",[v("td",[t._v("\\S")]),t._v(" "),v("td",[t._v("匹配除空白符之外的任意字符，等同于：[^\\s]")])]),t._v(" "),v("tr",[v("td",[t._v("\\B")]),t._v(" "),v("td",[t._v("匹配不是单词边界的字符，等同于：[^\\b]")])]),t._v(" "),v("tr",[v("td",[t._v("\\D")]),t._v(" "),v("td",[t._v("匹配不是数字的所有字符，等同于：[^\\d]")])])])]),t._v(" "),v("h3",{attrs:{id:"转义字符"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#转义字符","aria-hidden":"true"}},[t._v("#")]),t._v(" 转义字符")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("转义字符")]),t._v(" "),v("th",[t._v("对应说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("\\xnn")]),t._v(" "),v("td",[t._v("匹配十六进制数")])]),t._v(" "),v("tr",[v("td",[t._v("\\f")]),t._v(" "),v("td",[t._v("匹配换页符，等同于：\\x0c")])]),t._v(" "),v("tr",[v("td",[t._v("\\n")]),t._v(" "),v("td",[t._v("匹配换行符，等同于：\\x0a")])]),t._v(" "),v("tr",[v("td",[t._v("\\r")]),t._v(" "),v("td",[t._v("匹配回车符，等同于：\\x0d")])]),t._v(" "),v("tr",[v("td",[t._v("\\t")]),t._v(" "),v("td",[t._v("匹配水平制表符，等同于：\\x09")])]),t._v(" "),v("tr",[v("td",[t._v("\\v")]),t._v(" "),v("td",[t._v("匹配垂直制表符，等同于：\\x0b")])]),t._v(" "),v("tr",[v("td",[t._v("\\unnnn")]),t._v(" "),v("td",[t._v("匹配Unicode字符，如：\\u00A0")])])])]),t._v(" "),v("h3",{attrs:{id:"重复匹配"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#重复匹配","aria-hidden":"true"}},[t._v("#")]),t._v(" 重复匹配")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("匹配字符")]),t._v(" "),v("th",[t._v("对应说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("*")]),t._v(" "),v("td",[t._v("重复出现零次或多次")])]),t._v(" "),v("tr",[v("td",[t._v("+")]),t._v(" "),v("td",[t._v("重复出现一次或多次")])]),t._v(" "),v("tr",[v("td",[t._v("？")]),t._v(" "),v("td",[t._v("重复出现零次或一次")])]),t._v(" "),v("tr",[v("td",[t._v("{n}")]),t._v(" "),v("td",[t._v("重复出现n次")])]),t._v(" "),v("tr",[v("td",[t._v("{n,}")]),t._v(" "),v("td",[t._v("至少重复出现n次")])]),t._v(" "),v("tr",[v("td",[t._v("{m,n}")]),t._v(" "),v("td",[t._v("重复重现m到n次，其中，m<n")])])])]),t._v(" "),v("h3",{attrs:{id:"分组-捕获"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分组-捕获","aria-hidden":"true"}},[t._v("#")]),t._v(" 分组/捕获")]),t._v(" "),v("p",[t._v("一个捕获型分组是一个被包围在圆括号内，任何匹配这个分组的字符都会被捕获，每个捕获型的分组都被指定了一个数字。")]),t._v(" "),v("p",[t._v("非捕获型分组有一个 (?: 前缀。仅做简单的匹配，不会捕获所匹配的文本，带来微弱的性能优势。并且不会干扰捕获型分组的编号。")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("分组字符")]),t._v(" "),v("th",[t._v("对应说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("(exp)")]),t._v(" "),v("td",[t._v("用小圆括号进行分组，如日期中年月日的分组：/(\\d{5})-(\\d{1,2})-(\\d{1,2})/每个分组将产生分组号，从第一个括号开始，可以使用\\n的形式在正则中使用分组号，如匹配成对出现的HTML标签，可以写成：/<(\\w+)></\\1>/")])]),t._v(" "),v("tr",[v("td",[t._v("(?:exp)")]),t._v(" "),v("td",[t._v("匹配exp正则，但不产生分组号")])]),t._v(" "),v("tr",[v("td",[t._v("exp1(?=exp2)")]),t._v(" "),v("td",[t._v("前瞻断言，匹配exp1，但后面必须是exp2如匹配名字叫xianlie，但不姓zhao的人：/zhao(?=xianlie)/")])]),t._v(" "),v("tr",[v("td",[t._v("exp1(?!=exp2)")]),t._v(" "),v("td",[t._v("后瞻断言，匹配exp1，但后面不能是exp2如匹配姓zhao，但名字不叫xianlie的人：/zhao(?!xianlie)/")])])])]),t._v(" "),v("h3",{attrs:{id:"贪婪与惰性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#贪婪与惰性","aria-hidden":"true"}},[t._v("#")]),t._v(" 贪婪与惰性")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("相关字符")]),t._v(" "),v("th",[t._v("对应说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("*?")]),t._v(" "),v("td",[t._v("重复任意次，但尽可能少的重复")])]),t._v(" "),v("tr",[v("td",[t._v("+?")]),t._v(" "),v("td",[t._v("重复一次或多次，但尽可能少的重复")])]),t._v(" "),v("tr",[v("td",[t._v("??")]),t._v(" "),v("td",[t._v("重复零次或一次，但尽可能少的重复")])]),t._v(" "),v("tr",[v("td",[t._v("{m,n}?")]),t._v(" "),v("td",[t._v("重复m到n次，但尽可能少的重复")])]),t._v(" "),v("tr",[v("td",[t._v("{n,}?")]),t._v(" "),v("td",[t._v("重复n次以上，但尽可能少的重复")])]),t._v(" "),v("tr",[v("td",[t._v("{n}?")]),t._v(" "),v("td",[t._v("重复n次，但尽可能少的重复")])])])]),t._v(" "),v("h3",{attrs:{id:"模式匹配"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#模式匹配","aria-hidden":"true"}},[t._v("#")]),t._v(" 模式匹配")]),t._v(" "),v("div",{staticClass:"language-js extra-class"},[v("pre",{pre:!0,attrs:{class:"language-js"}},[v("code",[v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" text "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v("'testing: 1, 2, 3'")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" pattern "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\\d"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("g "),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//匹配所有包含一个或多个数字的实例")]),t._v("\npattern"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//返回true 匹配成功")]),t._v("\ntext"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("search")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pattern"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => 9 首次匹配成功的位置")]),t._v("\ntext"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("match")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pattern"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => ['1', '2', '3'] 所有匹配组成的数组 ")]),t._v("\ntext"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pattern"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#'")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => 'testing: #, #, #'")]),t._v("\ntext"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),v("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\D+/")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => ['', '1', '2', '3'] 用非数字字符截取字符串")]),t._v("\n")])])])])}],!1,null,null,null);e.options.__file="Js 正则表达式.md";_.default=e.exports}}]);