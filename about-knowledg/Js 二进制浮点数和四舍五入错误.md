# 二进制浮点数和四舍五入错误

>二进制浮点数表示法并不能精准的表示类似0.1这样简单的数字

```js
var x = 0.3
var y = 0.2
// x - y = 0.99999999
var a = 0.2
var b = 0.1
// a - b = 0.1
console.log((x - y) === (a - b)) //返回false
```
参考 -> https://juejin.im/post/5a6fce10f265da3e261c3c71

