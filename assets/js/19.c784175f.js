(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{227:function(t,i,v){"use strict";v.r(i);var _=v(0),a=Object(_.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,i=t.$createElement,v=t._self._c||i;return v("div",{staticClass:"content"},[v("h1",{attrs:{id:"css-bfc"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#css-bfc","aria-hidden":"true"}},[t._v("#")]),t._v(" CSS BFC")]),t._v(" "),v("p",[t._v("https://juejin.im/post/5909db2fda2f60005d2093db")]),t._v(" "),v("p",[t._v("http://www.cnblogs.com/xiaohuochai/p/5248536.html")]),t._v(" "),v("p",[v("strong",[t._v("所谓的BFC就是css布局的一个概念，是一块区域，一个环境。")])]),t._v(" "),v("p",[t._v("在解释BFC之前，先说一下文档流。我们常说的文档流其实分为定位流、浮动流和普通流三种。而普通流其实就是指BFC中的FC。FC是formatting context的首字母缩写，直译过来是格式化上下文，它是页面中的一块渲染区域，有一套渲染规则，决定了其子元素如何布局，以及和其他元素之间的关系和作用。常见的FC有BFC、IFC，还有GFC和FFC。BFC是block formatting context，也就是块级格式化上下文，是用于布局块级盒子的一块渲染区域。")]),t._v(" "),v("h2",{attrs:{id:"触发条件或者哪些元素会生成bfc："}},[v("a",{staticClass:"header-anchor",attrs:{href:"#触发条件或者哪些元素会生成bfc：","aria-hidden":"true"}},[t._v("#")]),t._v(" 触发条件或者哪些元素会生成BFC：")]),t._v(" "),v("p",[t._v("满足下列条件之一就可触发BFC")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("根元素，即HTML元素")])]),t._v(" "),v("li",[v("p",[t._v("float的值不为none")])]),t._v(" "),v("li",[v("p",[t._v("overflow的值不为visible")])]),t._v(" "),v("li",[v("p",[t._v("display的值为inline-block、table-cell、table-caption")])]),t._v(" "),v("li",[v("p",[t._v("position的值为absolute或fixed")])])]),t._v(" "),v("h2",{attrs:{id:"作用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#作用","aria-hidden":"true"}},[t._v("#")]),t._v(" 作用")]),t._v(" "),v("p",[t._v("BFC是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面元素，反之亦然。它与普通的块框类似，但不同之处在于:")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("可以阻止元素被浮动元素覆盖")]),t._v(" "),v("p",[t._v("（浮动元素会脱离文档流 覆盖到包含其的元素上，BFC 可以让其不被覆盖）")])]),t._v(" "),v("li",[v("p",[t._v("可以包含浮动元素")]),t._v(" "),v("p",[t._v("（浮动元素会脱离文档流，导致包含其的元素高度塌陷，BFC可以来包含浮动的盒子）")])]),t._v(" "),v("li",[v("p",[t._v("属于同一个BFC的两个相邻块级子元素的上下margin会发生重叠，(设置writing-mode:tb-rl时，水平margin会发生重叠)。所以当两个相邻块级子元素分属于不同的BFC时可以阻止margin重叠")])]),t._v(" "),v("li",[v("p",[t._v("自适应两栏布局")]),t._v(" "),v("p",[t._v("（此时BFC的区域不会与float box重叠，因此会根据包含块（父div）的宽度，和相邻 div 的宽度来自适应）")])])]),t._v(" "),v("p",[t._v("总结：")]),t._v(" "),v("ol",[v("li",[t._v("自适应两栏布局")]),t._v(" "),v("li",[t._v("可以阻止元素被浮动元素覆盖")]),t._v(" "),v("li",[t._v("可以包含浮动元素——清除内部浮动")]),t._v(" "),v("li",[t._v("分属于不同的BFC时可以阻止margin重叠")])])])}],!1,null,null,null);a.options.__file="CSS BFC.md";i.default=a.exports}}]);