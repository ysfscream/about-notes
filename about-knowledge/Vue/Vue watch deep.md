# Vue watch deep

**选项：deep**

为了发现对象内部值的变化，可以在选项参数中指定 `deep: true` 。注意监听数组的变动不需要这么做。

```js
vm.$watch('someObject', callback, {
  deep: true
})
vm.someObject.nestedValue = 123
// callback is fired
```

``` js
// 当对象内的属性变化时，回调 handle 函数
handler: function (val, oldVal) { /* ... */ },
```

