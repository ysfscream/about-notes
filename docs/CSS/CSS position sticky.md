# CSS position: sticky

https://segmentfault.com/a/1190000007183209

sticky 的本意是粘糊糊的，但在 css 中的表现更像是吸附。常见的吸顶、吸底（移动端网站的头部返回栏，底部切换栏之类）的效果用这个属性非常适合。它是相对定位（`position:relative`）和固定定位（`position:fixed`）的混合

代码仅需要如下：

```css
.sticky {
    position: sticky;
    position: -webkit-sticky;
    top: 0; /* 阈值 */
}
```

当这个标签滚动到距离屏幕上端 top 的值的位置的时候 就自动固定在那里不动。

> 1、sticky 不会触发 BFC
>
> 2、样式表 z－index 无效。行内 style 写有效。
>
> 3、sticky 是容器相关的，也就说 sticky 的特性只会在他所处的容器里生效。这个比较抽象，强调这一点是因为在实际使用中，碰到 body 设置 height：100% 的时候 sticky 元素停在某一个位置不动了。
> 



生效条件
需要注意的是，使用该属性有几个必要条件，否则会失效：

父元素不能overflow:hidden或者overflow:auto属性。
必须指定top、bottom、left、right4个值之一，否则只会处于相对定位
父元素的高度不能低于sticky元素的高度
sticky元素仅在其父元素内生效

链接：https://www.jianshu.com/p/b72f504121f5