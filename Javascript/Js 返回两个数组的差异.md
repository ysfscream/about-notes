# Js 返回两个数组的差异

```js
function sym(arg1, arg2) {
  const allArr = [...arg1, ...arg2];
  return allArr.filter((arr) => allArr.indexOf(arr) === allArr.lastIndexOf(arr));
}
sym([1, 2, 3], [5, 2, 1, 4]);
```

