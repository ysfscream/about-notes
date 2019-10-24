# Vue vuex 对象值属性更改

Vuex 中对象值属性的更改，新增或修改后无法追踪响应，`computed` 中的 `state` 无法更新，从而无法更新视图

可以使用 `Vue.set` 在 `mutation` 中更新 `state` 的值

```javascript
const state = {
  count: { count: null },
}

const mutations = {
  INCREMENT(state, amount) {
    if (!state.count.count) {
      Vue.set(state.count, 'count', 0);
    }
    state.count.count = state.count.count + amount;
  },
};
```
