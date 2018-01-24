# Vue vuex

## 最简单的 

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

## `MapState`函数

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

## 提交载荷 (payload)

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

