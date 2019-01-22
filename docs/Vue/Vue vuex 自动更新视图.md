# Vue vuex 自动更新视图

更新了 Vuex 里的是 state 的数据后，想要视图也立即更新 需要在数据获取的地方使用 computed 属性。

`computed`是可以依赖vuex中数据并获取数据的。

```js
computed: {
	data() {
		return this.$store.state.data
    }
}
```

计算属性中的 `getters` 默认获取的是同`modules`内的数据。

我们用`watch`和`methods`配合`state`也可以做到，为什么要用`computed`？因为使用`computed`有明确的依赖关系。