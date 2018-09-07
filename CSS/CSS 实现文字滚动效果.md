# CSS 实现文字滚动效果

```css
.animate {
    padding-left: 20px;
    font-size: 12px;
    color: #000;
    display: inline-block;
    white-space: nowrap;
    animation: 10s wordsLoop linear infinite normal;
}

@keyframes wordsLoop {
    0% {
        transform: translateX(200px);
        -webkit-transform: translateX(200px);
    }
    100% {
        transform: translateX(-100%);
        -webkit-transform: translateX(-100%);
    }
}

@-webkit-keyframes wordsLoop {
    0% {
        transform: translateX(200px);
        -webkit-transform: translateX(200px);
    }
    100% {
        transform: translateX(-100%);
        -webkit-transform: translateX(-100%);
    }
}
```

