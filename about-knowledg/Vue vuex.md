# Vue vuex

##最简单的

示例 [vuex doc](https://vuex.vuejs.org/zh-cn/intro.html)

```JS

import Vue from 'vue';
import Vuex form 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment (state) {
            state.count++
        }
    }
})

```
> 每一个Vuex应用就是一个store，在store中包含组件中的共享状态state和改变状态的方法（暂且称作方法）mutations

使用 `store.commit('increment')` 触发 `mutations` 改变 `state`, **不能通过 `store.state.count = n` 来直接更改 `state` 里的状态值, 状态不会被同步**

##`MapState`函数

通过该函数可以直接映射到 `store.state` 里的同名状态属性

```JS
import mapState from 'vuex'

// BAD
computed: {
    count() {
        return this.$store.state.count
    }
}

// GOOD
computed: mapState(['count']) 
//映射 this.count -> this.$sotre.state.count

```

- 通过[展开运算符](https://mingjiezhang.github.io/2016/09/24/ECMAScript-6%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E5%B1%95%E5%BC%80%E8%BF%90%E7%AE%97%E7%AC%A6/)

`mapState` 函数返回的是一个对象

```JS

computed: {
  localComputed () { /* ... */ },
  // 使用对象展开运算符将此对象混入到外部对象中
  ...mapState({
    // ...
  })
}

```

##提交载荷 (payload)

`store.commit` 传入额外的参数，在大多数情况下，载荷应该是一个对象，这样可以包含多个字段并且记录的 mutation 会更易读

```JS

mutations: {
  increment (state, payload) {
    state.count += payload.amount
  }
}
store.commit('increment', {
  amount: 10
})

```

**mutation 必须同步执行, action 可以使异步操作**

##Action

Action 类似于 mutation，不同在于：

- Action 提交的是 mutation，而不是直接变更状态。
- Action 可以包含任意异步操作。



```js
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
    increment ({ commit }) {
      commit('increment') // 使用参数解构传入的与 store 实例具有相同方法和属性的 context 对象的 commit
    }
  }
})
```

`commit` 提交一个 mutation

Action 通过 `store.dispatch` 方法触发：

```js
store.dispatch('increment')
```

```js
// 以载荷形式分发
store.dispatch('incrementAsync', {
  amount: 10
})

// 以对象形式分发
store.dispatch({
  type: 'incrementAsync',
  amount: 10
})
```

##`MapAction`函数 

`mapActions` 辅助函数将组件的 methods 映射为 `store.dispatch` 调用（需要先在根节点注入 `store`）：

```js
import { mapActions } from 'vuex'

export default {
  // ...
  methods: {
    ...mapActions([
      'increment', // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`

      // `mapActions` 也支持载荷：
      'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.dispatch('incrementBy', amount)`
    ]),
    ...mapActions({
      add: 'increment' // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`
    })
  }
}
console.log(...[mapActions(['increment', 'add'])])
//	{increment: ƒ, add: ƒ}

...[mapActions(['increment', 'add'])
//	(increment: ƒ), (add: ƒ)
```



##Module

由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，store 对象就有可能变得相当臃肿。

为了解决以上问题，Vuex 允许我们将 store 分割成**模块（module）**。每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块——从上至下进行同样方式的分割：

```
const moduleA = {
  state: { ... },
  mutations: { ... },
  actions: { ... },
  getters: { ... }
}

const moduleB = {
  state: { ... },
  mutations: { ... },
  actions: { ... }
}

const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})

store.state.a // -> moduleA 的状态
store.state.b // -> moduleB 的状态

```