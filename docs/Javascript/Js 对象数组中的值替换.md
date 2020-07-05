# Js 对象数组中的值替换

需要用具有相同 ID 的 arr2 中的项替换 arr1 中的对象。

```javascript
arr1.map(obj => arr2.find(o => o.id === obj.id) || obj);
```
