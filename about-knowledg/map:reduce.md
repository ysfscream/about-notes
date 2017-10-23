##map和reduce

>`map()`用于操作数组内之间的操作 传入函数后得到一个新的数组

```js
const arr = [1, 2, 3, 4, 5]
arr.map(item => item * item)
//输出 [1, 4, 9, 16, 25]
```

>`reduce()`接受两个参数 用于操作数组内前后两个值得操作 得到一个新的值

```js
const arr = [1, 2, 3, 4, 5]
arr.reduce((first, second) => first + second}) 
//输出 15
```