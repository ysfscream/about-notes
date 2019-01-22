# CSS  chrome 表单自动填充颜色

chrome 自动填充表单时 输入框背景颜色为黄色

可以用以下 css 修改背景颜色

```css
input:-webkit-autofill {  
    -webkit-box-shadow: inset 0 0 0 1000px #fff; 
    background-color: transparent; 
} 
```

