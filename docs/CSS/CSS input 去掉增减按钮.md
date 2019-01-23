# CSS input 去掉增减按钮

```html
<input type="number">
```

```css
/* chrome */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    appearance: none; 
    margin: 0; 
}
/* firefox */
input{
    -moz-appearance:textfield;
}
```

