(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{279:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("p",[t._v("from -> "),e("a",{attrs:{href:"https://github.com/simaQ/cssfun/issues/1",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/simaQ/cssfun/issues/1"),e("OutboundLink")],1)]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),e("p",[t._v("但是，如果你用em一层一层级联得定义嵌套元素的字体大小， 字体就会逐渐得增加。")]),t._v(" "),t._m(3),e("p",[t._v("但是通常情况下我们还是希望就依赖单一的相对度量单位就好，rem r 即为 root（根），就只依赖于最根的字体的大小。")]),t._v(" "),t._m(4),t._v(" "),e("p",[t._v("一般建议在 line-height 使用 em。因为在需要调整字体大小的时候，只需修改 font-size 的值，而 line-height 已经设置成了相对行高了。")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),e("p",[t._v("可以想象到的，他们有很多很多的用途。比如，我们用很简单的方法只用一行CSS代码就实现同屏幕等高的框。")]),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),e("p",[e("code",[t._v("ch")]),t._v(" 单位通常被定义为数字0的宽度。你可以在"),e("a",{attrs:{href:"http://meyerweb.com/eric/thoughts/2012/05/15/defining-ch/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Eric Meyers的博客"),e("OutboundLink")],1),t._v('里找到关于它的一些有意思的讨论，例如将一个等宽字体的字母"N"的宽度设置为'),e("code",[t._v("40ch")]),t._v("，那么在另一种类型的字体里它却可以包含40个字母。这个单位的传统用途主要是盲文的排版，但是除此之外，肯定还有可以应用他的地方。")]),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),e("p",[t._v("上标和下标特定垂直对齐规则，但是如果你想更细粒度更精确得控制，你可以像下面这样做：")]),t._v(" "),t._m(17)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"css-的几个单位"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css-的几个单位","aria-hidden":"true"}},[this._v("#")]),this._v(" CSS 的几个单位")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"em-和-rem"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#em-和-rem","aria-hidden":"true"}},[this._v("#")]),this._v(" em 和 rem")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("em")]),this._v(" 被定义为相对于当前对象内文本的字体大小。如果设置了font-size字体大小，那么body的任何子元素的1em就是等于body设置的font-size。")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        Test "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 14 * 1.2 = 16.8px --\x3e")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            Test "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 16.8 * 1.2 = 20.16px --\x3e")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                Test "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 20.16 * 1.2 = 24.192px --\x3e")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[e("code",[t._v("em")]),t._v(" 继承父元素中的 "),e("code",[t._v("font-size")])]),t._v(" "),e("li",[e("code",[t._v("rem")]),t._v(" 继承根元素（"),e("code",[t._v("html")]),t._v("）中的 "),e("code",[t._v("font-size")])]),t._v(" "),e("li",[t._v("在大多数浏览器中，根元素的 "),e("code",[t._v("font-size")]),t._v(" 默认值为 "),e("code",[t._v("16px")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在存在首行缩进的需求，我也会使用这个单位。\n"),s("code",[this._v("text-indent: 2em")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"vh-and-vw"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vh-and-vw","aria-hidden":"true"}},[this._v("#")]),this._v(" vh and vw")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("响应式web设计离不开百分比。但是，CSS百分比并不是所有的问题的最佳解决方案。CSS的宽度是相对于包含它的最近的父元素的宽度的。但是如果你就想用视口（viewpoint）的宽度或者高度，而不是父元素的，那该肿么办？ 这就是 "),s("code",[this._v("vh")]),this._v(" 和 "),s("code",[this._v("vw")]),this._v(" 单位为我们提供的。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("1"),s("code",[this._v("vh")]),this._v(" 等于1/100的视口高度。栗子：浏览器高度900px, 1 "),s("code",[this._v("vh")]),this._v(" = 900px/100 = 9 px。同理，如果视口宽度未750， 1"),s("code",[this._v("vw")]),this._v(" = 750px/100 = 7.5 px。")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-css extra-class"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".slide")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100vh"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("假设你要来一个和屏幕同宽的标题，你只要设置这个标题的font-size的单位为"),s("code",[this._v("vw")]),this._v("，那标题的字体大小就会自动根据浏览器的宽度进行缩放，以达到字体和viewport大小同步的效果。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"vmin-and-vmax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vmin-and-vmax","aria-hidden":"true"}},[this._v("#")]),this._v(" vmin and vmax")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[e("code",[t._v("vh")]),t._v("和 "),e("code",[t._v("vw")]),t._v(" 依据于视口的高度和宽度，相对的，"),e("code",[t._v("vmin")]),t._v(" 和 "),e("code",[t._v("vmax")]),t._v("则关于视口高度和宽度两者的最小或者最大值。比如，浏览器的宽度设置为1100px，高度设置为700px， "),e("code",[t._v("1vmin")]),t._v(" = 1px， "),e("code",[t._v("1vmax")]),t._v(" = 11px。如果宽度设置为800px,高度设置为1080px, "),e("code",[t._v("1vmin")]),t._v("就等于8px, "),e("code",[t._v("1vmax")]),t._v("则未10.8px。\n那么问题来了，我们应该在什么场景下使用这两个单位呢？\n假设有一个元素，你需要让它始终在屏幕上可见。只要对其高度和宽度使用vmin单位，并赋予其低于100的值就可以做到了。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"ex-and-ch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ex-and-ch","aria-hidden":"true"}},[this._v("#")]),this._v(" ex and ch")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[e("code",[t._v("ex")]),t._v(" 和 "),e("code",[t._v("ch")]),t._v(" 单位，类似于 "),e("code",[t._v("em")]),t._v(" 和 "),e("code",[t._v("rem")]),t._v(", 依赖于当前的字体和字体大小。 但是，不同的是，这两货是基于字体的度量单位，依赖于设定的字体。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("ex")]),this._v(" 定义为当前字体的小写"),s("code",[this._v("x")]),this._v("字母的高度或者 1/2 的 "),s("code",[this._v("1em")]),this._v("。 很多时候，它是字体的中间标志。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("这些单位有很多用途，大部分用于版式的微调。比方说，"),s("code",[this._v("sup")]),this._v(" 元素（上角文字标），可以通过"),s("code",[this._v("position:relative;bottom: 1ex;")]),this._v("实现 。类似的方法，你可以实现一个下角文字标。浏览器默认的方式是利用")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-Css extra-class"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[t._v("sup")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" relative"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("bottom")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1ex"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token selector"}},[t._v("sub")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" relative"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("bottom")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" -1ex"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);n.options.__file="CSS 的几个单位.md";s.default=n.exports}}]);