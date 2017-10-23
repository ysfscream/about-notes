## JS some every

>`some()`对数组中的每个元素执行一次特定函数，直到返回true，如果发现这个元素，将返回true，用于判断数组元素内有没有特定函数中满足条件的元素

```js
var arr = [2, 5, 8, 1, 4]
var res = arr.some(i => i > 10) //返回false
var res = arr.some(i => i > 5)  //返回true
```

>`every()`对数组中的每个元素都执行一次指定的函数，直到此函数返回false，如果存在返回false，当数组内的每一个元素都满足特定函数时，将返回true

```js
var arr = [2, 5, 8, 1, 4]
var res = arr.every(i => i > 5) //返回false
var res = arr.every(i => i > 1)  //返回true
```