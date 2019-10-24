# Vue 提供数据的组件

> `Data Provider` 数据提供组件 是一个无需渲染的组件，不用渲染任何内容，创建无渲染组件的基础是从渲染函数创建一个有作用域的插槽并将任何支持传递给它

比如一个传递 url 并且只提供返回的数据的组件

`dataProvider.js`

```javascript
import axios from axios

export default {
  props: {
    url: {
      type: String,
      required: true,
    }
  },
  data: () => {
    return {
      data: null,
      loaded: false,
    }
  },
  created() {
    axios.get(url).then(({ data }) => {
      this.data = data
      this.loaded = true
    })
  },
  render() {
    return this.$scopedSlots.default({
      loading: !this.loaded,
      data: this.data
    })
}
```

`App.vue`

```html
<template>
  <DataProvider url="https://jsonplaceholder.typicode.com/users">
    <div v-slot="{ data, loading }">
      <div v-if="loading">Loading...</div>
      <div v-else>
        <h2>Result: {{ data.length }} users</h2>
        <p v-for="user in data" :key="user.id">{{ user.name }}</p>
      </div>
    </div>
  </DataProvider>
</template>
```

请注意，这是一个.js文件。 由于它只是组件的脚本部分，因此它不必是.vue文件。

[https://vuedose.tips/tips/data-provider-component-in-vue-js/?utm_campaign=Vue.js%20News&utm_medium=email&utm_source=Revue%20newsletter](https://vuedose.tips/tips/data-provider-component-in-vue-js/?utm_campaign=Vue.js%20News&utm_medium=email&utm_source=Revue%20newsletter)
