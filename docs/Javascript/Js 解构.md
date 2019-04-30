# Js 解构赋值

> 语法是一个JavaScript表达式，可以使的值从数组或属性对象中提取到不同的变量中

## 解构数组

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

## 对象解构

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

解构可以接受函数返回的多个值，例如 同时请求两个接口返回的数据，可以用解构分别赋值到不同的变量

```javascript
sync function loadFullData(){
  return await Promise.all([
     fetch('/api/user/1'),
     fetch('/api/admin/2'),
  ]);
}
const [user, admin] = loadFullData();
```

数组的对象解构
数组也可以对象解构，可以方便的获取数组的第n个值

```javascript
const csvFileLine = '1997,John Doe,US,john@doe.com,New York';
const { 2: country, 4: state } = csvFileLine.split(',');

country            // US
state            // New Yourk
```

使用解构删除不必要属性

```javascript
// 删除 a 属性
const obj = {a: 1, b: 2, c: 3}
const { a, ...cleanObj } = obj
cleanObj // { b:2, c: 3 }
```