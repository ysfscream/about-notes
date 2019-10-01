(window.webpackJsonp=window.webpackJsonp||[]).push([[213],{270:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("Portals 提供了一种很好的将子节点渲染到父组件外部 DOM 层级中的 DOM 节点中的方式。")]),t._v(" "),t._m(1),s("p",[t._v("第一个参数（child）是任意可渲染的 React 子元素，例如一个元素，字符串或片断。第二个参数（container）是一个 DOM 元素。")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),s("p",[s("a",{attrs:{href:"https://hacpai.com/article/1552611002890",target:"_blank",rel:"noopener noreferrer"}},[t._v("链接-hacpai"),s("OutboundLink")],1)])])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"react-portals-概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-portals-概念","aria-hidden":"true"}},[this._v("#")]),this._v(" React portals 概念")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("ReactDOM"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createPortal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("child"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" container"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("strong",[this._v("注意")]),this._v("：")])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("通常从组件的 render 方法中返回的一个元素，该元素仅能装配到 DOM 节点中离其最近的父元素，但有时候也需要将其插入到 DOM 节点中的不同位置：")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-Javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// React 不会创建新的 div。他渲染子元素到 `domNode` 中。")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// `domNode` 可以是任意有效的 DOM 节点，无论他在 DOM 中的位置如何。")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ReactDOM"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createPortal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("children"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    domNode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("对于 portal 的一个典型用例是当父组件有 "),a("code",[this._v("overflow: hidden")]),this._v(" 或 "),a("code",[this._v("z-index")]),this._v(" 样式时你需要其子组件能够在视觉上跳出其容器。例如，对话框、hovercards 以及提示框。")])])}],!1,null,null,null);e.options.__file="React portals 概念.md";a.default=e.exports}}]);