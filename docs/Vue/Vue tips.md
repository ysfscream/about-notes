# Vue tips

## 对象更改检测注意事项

Vue 不能检测对象属性的添加或删除

```javascript
var vm = new Vue({
  data: {
    a: 1
  }
})
// `vm.a` 现在是响应式的

vm.b = 2
// `vm.b` 不是响应式的
```

但是我们可以通过 Vue.set(object, key, value)方法向嵌套对象添加响应式属性。
另外还有这个常用的方法 Object.assign()，当我们想要为某个对象赋予 多个新属性 的时候，你应该这么玩

```javascript
this.userProfile = Object.assign({}, this.userProfile, {
  age: 27,
  favoriteColor: 'Vue Green'
})
```
