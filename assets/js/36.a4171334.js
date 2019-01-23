(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{253:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"css-各类选择器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css-各类选择器","aria-hidden":"true"}},[t._v("#")]),t._v(" CSS 各类选择器")]),t._v(" "),s("h2",{attrs:{id:"基础"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基础","aria-hidden":"true"}},[t._v("#")]),t._v(" 基础")]),t._v(" "),s("ul",[s("li",[s("p",[t._v('基本元素选择器\n*：通用元素选择器，匹配任何元素\n.footer：匹配 class="footer" 的所有元素')]),t._v(" "),s("p",[s("code",[t._v("#comments")]),t._v('：匹配 id="comments" 的所有元素')]),t._v(" "),s("p",[t._v("<side>匹配标签为 side 的所有元素")])]),t._v(" "),s("li",[s("p",[t._v("组合选择元素器")]),t._v(" "),s("p",[t._v("选择器组\tA,B\t匹配满足A（和/或）B的任意元素（参见下方 同一规则集上的多个选择器）.\n后代选择器\tA B\t匹配B元素，满足条件：B是A的后代结点（B是A的子节点，或者A的子节点的子节点）\n子选择器\tA > B\t匹配B元素，满足条件：B是A的直接子节点\n相邻兄弟选择器\tA + B\t匹配B元素，满足条件：B是A的下一个兄弟节点（AB有相同的父结点，并且B紧跟在A的后面）\n通用兄弟选择器\tA ~ B\t匹配B元素，满足条件：B是A之后的兄弟节点中的任意一个（AB有相同的父节点，B在A之后，但不一定是紧挨着A")]),t._v(" "),s("p",[t._v("示例：\na, span：匹配所有 a 元素和 span 元素\ndiv span：匹配所有 div 元素下的 所有 span 元素\ndiv > span：匹配所有 div 元素下的所有子元素 span")]),t._v(" "),s("p",[t._v("毗邻兄弟选择器"),s("code",[t._v("+")]),t._v(" "),s("code",[t._v("div + p")]),t._v(": 可以选择紧随 div 元素后且与其同级的 p 元素")]),t._v(" "),s("p",[t._v("一般兄弟选择器 "),s("code",[t._v("~")]),t._v(" "),s("code",[t._v("p ~ span")]),t._v(": 将会匹配同一父元素下，p 元素后的所有 span 元素")])]),t._v(" "),s("li",[s("p",[t._v('属性选择器\n[target]：匹配含有 target 属性的所有元素\n[target=_blank]：匹配 target 属性值等于 _blank 的所有元素\n[title~=flower]：匹配 title 属性值中包含 flower 单词的所有元素（flower 需被空格截断）\n[lang|=en]：匹配 lang 属性值中以 en 开头的单词的所有元素（en 后不能有空格）\n[src^="https"]：匹配 src 属性值中以 https 开头的所有元素\n[src$=".pdf"]： 匹配 src 属性值中以 .pdf 结尾的所有元素\n[src*="abc"]：匹配 src 属性值中包含 abc 字符串的所有元素')])]),t._v(" "),s("li",[s("p",[t._v("伪类：:active、:any-link、:blank、:checked、:current、:default、:defined、:dir()、:disabled、:drop、:empty、:enabled、:first、:first-child、:first-of-type、:fullscreen、:future、:focus、:focus-visible、:focus-within、:has()、:host、:host()、:host-context()、:hover、:indeterminate、:in-range、:invalid、:is()、:lang()、:last-child、:last-of-type、:left、:link、:local-link、:not()、:nth-child()、:nth-col()、:nth-last-child()、:nth-last-col()、:nth-last-of-type()、:nth-of-type()、:only-child、:only-of-type、:optional、:out-of-range、:past、:placeholder-shown、:read-only、:read-write、:required、:right、:root、:scope、:target、:target-within、:user-invalid、:valid、:visited、:where()\n伪元素：::after (:after)、::backdrop、::before (:before)、::cue (:cue)、::first-letter (:first-letter)、::first-line (:first-line)、::grammar-error、::marker、::placeholder、::selection、::slotted()、::spelling-error")])])]),t._v(" "),s("p",[t._v("链接：https://hacpai.com/article/1546396257706")]),t._v(" "),s("h2",{attrs:{id:"class-多重选择器区分"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#class-多重选择器区分","aria-hidden":"true"}},[t._v("#")]),t._v(" class 多重选择器区分")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".one.two")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*兩個 class 中沒有空格*/")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".one .two")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*兩個 class 中有空格*/")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".one, .two")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*兩個 class 中出現逗號*/")]),t._v("\n")])])]),s("ul",[s("li",[t._v("第一个中间没有包含空格，表示必须同时具有 one two 的 class 时，才能被选择到。")]),t._v(" "),s("li",[t._v("第二个中间包含空格，必须要在 one 的后代（也就是 one 的子节点） two 里面才能被选择到")]),t._v(" "),s("li",[t._v("第三个中间包含空格，有逗号，意思是指 class 中有 one 或 two，都会被选择到。")])])])}],!1,null,null,null);n.options.__file="CSS 各类选择器.md";e.default=n.exports}}]);