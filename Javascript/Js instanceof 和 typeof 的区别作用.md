# Js instanceof 和 typeof 的区别作用

## typeof 

- 是一元运算符，返回字符串，说明运算数的数据类型

- 返回值有 number、boolean、undefined、function、object、string

- 对象 数组 null 都返回 Object

  **所以我们要判断某个对象是否是数组或者某个变量是否是对象的实例时就要使用instanceof**

```js
typeof Array
typeof Object
"function" 
// 这里的 Array 和 Object 都是构造函数 用于实例化 数组和对象的

let arr = new Array()
// arr才是数组对象
```



## instanceof

判断某个变量是否是某个对象的实例 返回值是 true 和 false

```js
let date = new Date()

date instanceof Date // true

// 判断数组
let arr = []

typeof arr // object
arr instanceof Array // true
```

