# Vue 提升获取列表时的性能

[https://vuedose.tips/tips/improve-performance-on-large-lists-in-vue-js/?utm_source=newsletter&utm_medium=email&utm_campaign=vuedose_33_use_web_workers_in_your_vuejs_components_for_max_performance&utm_term=2020-04-20](https://vuedose.tips/tips/improve-performance-on-large-lists-in-vue-js/?utm_source=newsletter&utm_medium=email&utm_campaign=vuedose_33_use_web_workers_in_your_vuejs_components_for_max_performance&utm_term=2020-04-20)

在获取一些巨大的列表数据时，可以通过使用 `Object.freeze` 来获取一些性能的提升：

```javascript
export default {
  data: () => ({
    users: {}
  }),
  async created() {
    const users = await axios.get("/api/users");
    this.users = Object.freeze(users);
  }
};
```

如需要修改数组，仍然可以通过创建一个新的数组来完成。 例如，为了添加项目，您可以通过以下方式进行操作：

```javascript
state.users = Object.freeze([...state.users, user]);
```
