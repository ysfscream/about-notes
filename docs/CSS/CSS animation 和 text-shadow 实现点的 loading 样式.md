# CSS animation 和 text-shadow 实现点的 loading 样式
> text-shadow 为文字添加阴影，使用该属性，如果把水平阴影位置向右偏移一定距离，垂直阴影不偏移，模糊距离为0，再利用currentColor关键字设置颜色，那么就可以出现和点一模一样的阴影

```HTML
<div class="loading">.</div>
```

```CSS
.loading {
    text-align: center;
    font-size: 60px;
    height: 60px;
    line-height: 30px;
    color: #f2f2f2;
    animation: dotting 2s infinite;
}

@keyframes dotting {
    0% {
        text-shadow: 0 0 0 currentColor;
    }
    33% {
        text-shadow: -20px 0 0 currentColor;
    }
    66% {
        text-shadow: -20px 0 0 #f2f2f2, 20px 0 0 currentColor;
    }
    100% {
        text-shadow: 0px 0 0 currentColor;
    }
}
```

