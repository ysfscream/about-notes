# CSS box-sizing

```css
div {
  box-sizing: border-box;
}
```

简单来说：

当元素的 box-sizing 是 border-box 的时候，我们给元素设置的宽度、高度实际上是设置这个元素边框盒的宽度、高度。也就是说内边距、边框都是在这个内部绘制，`padding margin`等都不会把元素撑开。

> 在CSS中，你设置一个元素的 [`width`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/width) 与 [`height`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/height) 只会应用到这个元素的内容区。如果这个元素有任何的 [`border`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border) 或 [`padding`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/padding) ，绘制到屏幕上时的盒子宽度和高度会加上设置的边框和内边距值。这意味着当你调整一个元素的宽度和高度时需要时刻注意到这个元素的边框和内边距。当我们实现响应式布局时，这个特点尤其烦人。
>
> `border-box` 告诉浏览器去理解你设置的边框和内边距的值是包含在width内的。也就是说，如果你将一个元素的width设为100px,那么这100px会包含其它的border和padding，内容区的实际宽度会是width减去border + padding的计算值。大多数情况下这使得我们更容易的去设定一个元素的宽高。

不希望每次都重写一遍，而是希望他是继承而来的，那么我们可以使用如下代码：

```css
html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}
```

复制代码这样的好处在于他不会覆盖其他组件的 box-sizing 值，又无需为每一个元素重复设置 box-sizing: border-box;