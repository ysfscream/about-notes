# Js 返回两个数组的差异 先确定相同值

利用Array.indexOf与Array.lastIndexOf

简单点就是遍历数组，不管理for()还是forEach之类的,然后每项元素逐一进行结果比较indexof与lastIndexOf，如果不相等，肯定就有重复的元素 so,就这样子

```js
function sym(arg1, arg2) {
  const allArr = [...arg1, ...arg2];
  return allArr.filter((arr) => allArr.indexOf(arr) === allArr.lastIndexOf(arr));
}
sym([1, 2, 3], [5, 2, 1, 4]);
```

