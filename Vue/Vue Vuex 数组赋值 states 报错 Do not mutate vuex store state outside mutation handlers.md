# Vue Vuex 数组赋值 states 报错 Do not mutate vuex store state outside mutation handlers

> **The reason is that arrays are stored as references in Javascript and payload.items is likely to be changed outside Vuex. So we should just use a fresh copy of payload.itemsinstead.**

所以在数组赋值时可以

```js
// store.js
mutations: {
	[SET_ITEM](state, payload) {
		state.arr = payload.arr.slice() // slice 方法不传入参数，直接返回一个新的该数组
    }
}

// 赋值 store.state 时也用 slice
data() {
	return {
		newItem: [],
    }
}

computed: {
	item() {
		return this.$sotre.state.item
    }
}

methods: {
	setItem() {
		this.newItem = this.item.slice()
    }
}


```

