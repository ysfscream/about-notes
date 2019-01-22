# Js 根据数组内的对象属性排序

```js
const arr = [
    { val: 1 },
    { val: 5 },
    { val: 0 },
    { val: 3 },
]

arr.sort((perv, next) => {
    return perv.val - next.val // 升序
    return next.val - perv.val // 降序
})
```

