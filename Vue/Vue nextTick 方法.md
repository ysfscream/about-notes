# Vue nextTick 方法

[Vue.nextTick( [callback, context\] )](https://cn.vuejs.org/v2/api/#Vue-nextTick)

- **参数**：

  - `{Function} [callback]`
  - `{Object} [context]`

- **用法**：

  在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。

  ```js
  // 修改数据
  vm.msg = 'Hello'
  // DOM 还没有更新
  Vue.nextTick(function () {
    // DOM 更新了
  })
  
  // 作为一个 Promise 使用 (2.1.0 起新增，详见接下来的提示)
  Vue.nextTick()
    .then(function () {
      // DOM 更新了
    })
  ```



https://juejin.im/post/5a6fdb846fb9a01cc0268618

在Vue生命周期的`created()`钩子函数进行的DOM操作一定要放在`Vue.nextTick()`的回调函数中

在数据变化后要执行的某个操作，而这个操作需要使用随数据改变而改变的DOM结构的时候，这个操作都应该放进`Vue.nextTick()`的回调函数中。