# JS find filter

>`find()`方法返回数组中满足提供的测试函数的第一个元素的值。否则返回undefined

```js
var arr = [1, 2, 3, 4, 5, 6]
var sum = arr.find(i => i === 5) // num的值为5
```  

>`filter()`方法对数组中每个元素执行一次指定的函数，过滤筛选出函数内满足的条件的值，创建一个新的数组，返回的是一个数组，会循环遍历一遍整个数组

```js
var arr = [1, 2, 3, 4, 5, 6]
var sum = arr.filter(i => i > 3) 
// num的值为[4, 5, 6]
```