# Js Array fill

> fill() 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。

```javascript
// Objects by reference.
var arr = Array(3).fill({}) // [{}, {}, {}];
arr[0].hi = "hi"; // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]
```

如果数组里面填充的是对象的话，那里面的每个值都会被相互引用，即一个带有对象的数组，所有元素都引用同一个实例(即不会克隆该对象)
