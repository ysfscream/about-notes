# CSS BFC

https://juejin.im/post/5909db2fda2f60005d2093db

http://www.cnblogs.com/xiaohuochai/p/5248536.html

**所谓的BFC就是css布局的一个概念，是一块区域，一个环境。**

在解释BFC之前，先说一下文档流。我们常说的文档流其实分为定位流、浮动流和普通流三种。而普通流其实就是指BFC中的FC。FC是formatting context的首字母缩写，直译过来是格式化上下文，它是页面中的一块渲染区域，有一套渲染规则，决定了其子元素如何布局，以及和其他元素之间的关系和作用。常见的FC有BFC、IFC，还有GFC和FFC。BFC是block formatting context，也就是块级格式化上下文，是用于布局块级盒子的一块渲染区域。

## 触发条件或者哪些元素会生成BFC：

满足下列条件之一就可触发BFC

- 根元素，即HTML元素

- float的值不为none

- overflow的值不为visible

- display的值为inline-block、table-cell、table-caption

- position的值为absolute或fixed

## 作用

BFC是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面元素，反之亦然。它与普通的块框类似，但不同之处在于:

- 可以阻止元素被浮动元素覆盖

  （浮动元素会脱离文档流 覆盖到包含其的元素上，BFC 可以让其不被覆盖）

- 可以包含浮动元素

  （浮动元素会脱离文档流，导致包含其的元素高度塌陷，BFC可以来包含浮动的盒子）

- 属于同一个BFC的两个相邻块级子元素的上下margin会发生重叠，(设置writing-mode:tb-rl时，水平margin会发生重叠)。所以当两个相邻块级子元素分属于不同的BFC时可以阻止margin重叠

- 自适应两栏布局

  （此时BFC的区域不会与float box重叠，因此会根据包含块（父div）的宽度，和相邻 div 的宽度来自适应）

总结：

1. 自适应两栏布局
2. 可以阻止元素被浮动元素覆盖
3. 可以包含浮动元素——清除内部浮动
4. 分属于不同的BFC时可以阻止margin重叠