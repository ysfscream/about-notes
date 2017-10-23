##JS原生Math.max用法

```js
console.log(Math.max(10, -10));
//输出 10

//输出数组里的最大数可以用Math.max.apply(Math, Array)

var list = [12, 34, 324, 54, 66, 432];
console.log(Math.max.apply(Math, list));

//输出 432

```

>`apply()`类似的方法有`call()`

> * `apply()`把参数打包成`Array`再传入
> * `call()`把参数按顺序传入