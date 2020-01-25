(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{316:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"webpack-开启热更新还是会刷新页面的解决方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack-开启热更新还是会刷新页面的解决方法","aria-hidden":"true"}},[t._v("#")]),t._v(" webpack 开启热更新还是会刷新页面的解决方法")]),t._v(" "),s("p",[t._v("开启 webpack-dev-server 后，更改会刷新整个页面，如果只开启热更新 "),s("code",[t._v("hotOnly")])]),t._v(" "),s("p",[t._v("警告提示")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("The following modules couldn't be hot updated"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("They would need a full reload"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("解决方法就是"),s("code",[t._v("accept")]),t._v("你的模块，让它能够进行热替换")]),t._v(" "),s("p",[t._v("只有被"),s("code",[t._v("accept")]),t._v("的代码才能进行热替换，所以"),s("code",[t._v("react")]),t._v("有"),s("code",[t._v("react-hot-loader")]),t._v(", "),s("code",[t._v("vue")]),t._v("有"),s("code",[t._v("vue-loader")]),t._v("，这些插件已经包含了热替换的相关代码。")]),t._v(" "),s("p",[t._v("模块的代码里加上")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("accept")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'模块文件路径'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 处理函数")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])},[],!1,null,null,null);a.default=e.exports}}]);