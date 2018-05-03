# Js 区别 数组和对象

## instance

```js
Object instanceof constructor

const a = []
const b = {}

a instanceof Array // true
a instanceof Object // true
b instanceof Array // false
```



## Object.toString

每一个继承自Object的对象都拥有toString的方法

如果一个对象的toString方法没有被重写过的话，那么toString方法将会返回"[object *type*]"，其中的*type*代表的是对象的类型，根据type的值，我们就可以判断这个疑似数组的对象到底是不是数组了。

```js
const isArr = (arr) => {
    return Object.toString.apply(arr) === "[Object, Arrary]"
}
```



## Array.isArray

ES5 新增

```js
const a = []
Array.isArray(a) // true
```



## 数组和函数的 length

```js
const arr = [1, 2, 3] 
arr.length // 3
const arrFunc = (x, y, z) => {
    return x + y + z
}
arrFunc.length // 3 函数的 length 为函数的参数个数
const a = {
	b: 1,
}
a.length // undefined
```

