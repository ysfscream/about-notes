# Js 补 0 操作

在业务中 有时候时间显示是个位数 9:21 但是需要补 0 变成 09:21 这样的形式

显示时间的时候有时候会需要把一位数字显示成两位，这时候就需要补0操作，可以使用slice和string的padStart方法

```javascript
const addZero = (num, len = 2) => (`0${num}`).slice(-len)
const addZero = (num, len = 2) => (`${num}`).padStart(len, '0')
addZero(9) // 09
addZero(9, 3) // 009
```