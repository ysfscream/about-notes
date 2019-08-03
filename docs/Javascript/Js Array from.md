# Js Array from.md

>Array.from() 方法从一个类似数组或可迭代对象中创建一个新的，浅拷贝的数组实例

```javascript
console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]
```

创建一个对象数组，值不是引用且是唯一的

```javascript
// 使用唯一(非共享)对象创建数组：
Array.from(
  { length: 3 },
  () => ({ xData: [], yData: [] })
)
// [{ xData: [], yData: [] }, { xData: [], yData: [] }, { xData: [], yData: [] }]
```
