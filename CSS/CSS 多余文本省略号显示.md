# CSS 多余文本省略号显示

```css	
.zxx_text_overflow{
    width:27em; // 设置宽度
    white-space:nowrap; // 强制不换行
    text-overflow:ellipsis; // ...省略号显示
    overflow:hidden; // 超出部分隐藏
}
```

## CSS 文字控制行数

```css
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
```

显示两行 多余显示省略号。。。webkit 有效