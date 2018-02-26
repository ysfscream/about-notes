# Js Object.keys Objeck.values

## Object.keys
>Object.keys() 方法会返回一个由一个给定**对象**的自身可枚举属性组成的**数组**，数组中属性名的排列顺序和使用 [`for...in`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in) 循环遍历该对象时返回的顺序一致 （两者的主要区别是 一个 for-in 循环还会枚举其原型链上的属性）。

```js
var obj = {
	'a': 1,
	'b': 2,
	'c': 3
}
Object.keys(obj) //输出['a', 'b', 'c']
```
```js
/* Array 对象 */ 
let arr = ["a", "b", "c"];
console.log(Object.keys(arr)); 
// ['0', '1', '2']

/* Object 对象 */ 
let obj = { foo: "bar", baz: 42 }, 
    keys = Object.keys(obj);
// CCAC: Chrome Console Auto Copy
copy(keys); 
// ["foo","baz"]
注意：
var obj = { 0:"a", 1:"b", 2:{3:"c", 4:"d"}};
console.log(Object.keys(obj));
// (3) ["0", "1", "2"]

// 类数组 对象, 随机 key 排序 
let anObj = { 100: 'a', 2: 'b', 7: 'c' }; 

console.log(Object.keys(anObj)); 
// ['2', '7', '100']
```


## Object.values()
> Object.values()方法返回一个给定对象自己的所有可枚举属性值的数组，值的顺序与使用[`for...in`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in)循环的顺序相同 ( 区别在于 for-in 循环枚举原型链中的属性 )。

```js
ar obj = { foo: "bar", baz: 42 };
console.log(Object.values(obj)); // ['bar', 42]

// 类数组对象
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.values(obj)); // ['a', 'b', 'c']
注意：
var obj = { 0: 'a', 1: 'b', 2: { 3: 'c' , 4: 'd' } };
console.log(Object.values(obj));  
// ["a", "b", {…}] 内置的对象没有扩展成数组

// 随机键值的类数组对象
var an_obj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.values(an_obj)); // ['b', 'c', 'a']

```

