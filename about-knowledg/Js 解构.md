## JS解构赋值
> 语法是一个JavaScript表达式，可以使的值从数组或属性对象中提取到不同的变量中

### 解构数组
```js
var x = ['one', 'two', 'three']

var [one, two] = x

console.log(one) // 显示'one'
console.log(two) // 显示'two'
```
* 用数组解构可以轻松交换两个变量的值

```js
var a = 1
var b = 2
[a, b] = [b, a]
console.log(a) //2
console.log(b) //1
```

### 对象解构
```js
var o = {p: 42, q: true}
var {p, q} = o 
console.log(p) //42
console.log(q) //true
```

* 用新变量名进行赋值

```js
var o = {p: 42, q: true}
var {p: foo, q: bar} = o 
console.log(foo) //42
console.log(bar) //true
```






