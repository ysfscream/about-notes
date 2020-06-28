# Js 柯里化

函数也是值，柯里化允许我们把函数与传递给它的参数相结合，产生一个新的函数

例如：

```js
let add = function(x) {
    return function(y) {
        return x + y
    }
}

let increment = add(1)

increment(2) // 3

let addTen = add(10)

addTen(1) // 11

```
