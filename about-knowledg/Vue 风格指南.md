# Vue 风格指南

> 参考 —>  [vue.js 官方指南](https://cn.vuejs.org/v2/style-guide/#Prop-%E5%AE%9A%E4%B9%89-%E5%BF%85%E8%A6%81)
>
> 只是为了方便自己在项目应用时查阅 详细看官方文档

## 必要的

- 组件名为多个单词 根组件`App`除外


- 组件数据

  组件 `data` 必须是一个函数，当在组件中使用 `data` 属性的时候 (除了 `new Vue` 外的任何地方)，它的值必须是返回一个对象的函数。**当 `data` 的值是一个对象时，它会在这个组件的所有实例之间共享，修改一个值 影响其他组件** 

- Prop 定义 （组件传值）尽量详细

  至少指定传值的类型

- v-for 设置键值 key

- 避免 v-if 和 v-for 一起使用


- 为组件样式设置作用域（scoped, css Modules, BEM）

- 私有属性名

  **在插件、混入等扩展中始终为自定义的私有属性使用 $_ 前缀。并附带一个命名空间以回避和其它作者的冲突 (比如 $_yourPluginName_)。**

## 强烈推荐的

- 只要有能够拼接文件的构建系统，就把每个组件单独分成文件。

- 单文件组件文件的大小写。

  ​

  ```
  MyComponent.vue
  my-component.vue
  ```

- 应用特定样式和约定的基础组件 (也就是展示类的、无逻辑的或无状态的组件) 应该全部以一个特定的前缀开头，比如 Base、App 或 V。

  ​

  ```js
  components/
  |- BaseButton.vue
  |- BaseTable.vue
  |- BaseIcon.vue

  components/
  |- AppButton.vue
  |- AppTable.vue
  |- AppIcon.vue

  components/
  |- VButton.vue
  |- VTable.vue
  |- VIcon.vue
  ```

- 只应该拥有单个活跃实例的组件应该以 The 前缀命名，以示其唯一性。

  这不意味着组件只可用于一个单页面，而是*每个页面*只使用一次。这些组件永远不接受任何 prop，因为它们是为你的应用定制的，而不是它们在你的应用中的上下文。如果你发现有必要添加 prop，那就表明这实际上是一个可复用的组件，*只是目前*在每个页面里只使用一次。

- 和父组件紧密耦合的子组件应该以父组件名作为前缀命名。

  ​

  ```js
  components/
  |- TodoList.vue
  |- TodoListItem.vue
  |- TodoListItemButton.vue

  components/
  |- SearchSidebar.vue
  |- SearchSidebarNavigation.vue
  ```


- 组件名应该以高级别的 (通常是一般化描述的) 单词开头，以描述性的修饰词结尾。

  ​

  ```js
  components/
  |- SearchButtonClear.vue
  |- SearchButtonRun.vue
  |- SearchInputQuery.vue
  |- SearchInputExcludeGlob.vue
  |- SettingsCheckboxTerms.vue
  |- SettingsCheckboxLaunchOnStartup.vue
  ```

- 模板中的组件名大小写



```html
<my-component></my-component>
```

- JS 和 JSX 中的组件名大小写



```js
import MyComponents from './MyComponents'

export default {
  name: 'MyComponents',
}
```



- 组件名应该倾向于完整单词而不是缩写。
- Prop 名大小写



```js
<my-component :greeting-text="data" />

props: {
	greetingText: String,
}
```

- 多个特性的元素分行撰写，当单行太长时，每个特性一行



```js
<MyComponent
  foo="a"
  bar="b"
  baz="c"
/>
```



- 模板中的表达式应该简单，太复杂的应该写在重构为计算属性或者方法
- 复杂的计算属性分割为尽可能多的更简单的属性



```js
computed: {
  basePrice: function () {
    return this.manufactureCost / (1 - this.profitMargin)
  },
  discount: function () {
    return this.basePrice * (this.discountPercent || 0)
  },
  finalPrice: function () {
    return this.basePrice - this.discount
  }
}
```



- : ---> v-bind     @ —> v-on



## 一般推荐

### 元素特性顺序

**定义** (提供组件的选项)

- `is`

**列表渲染** (创建多个变化的相同元素)

- `v-for`

**条件渲染** (元素是否渲染/显示)

- `v-if`
- `v-else-if`
- `v-else`
- `v-show`
- `v-cloak`

**渲染方式** (改变元素的渲染方式)

- `v-pre`
- `v-once`

**全局感知** (需要超越组件的知识)

- `id`

**唯一的特性** (需要唯一值的特性)

- `ref`
- `key`
- `slot`

**双向绑定** (把绑定和事件结合起来)

- `v-model`

**其它特性** (所有普通的绑定或未绑定的特性)

**事件** (组件事件监听器)

- `v-on`

**内容** (复写元素的内容)

- `v-html`
- `v-text`





## 谨慎使用

- 元素选择器应该避免在 scoped 中出现。



```vue
// 不好的 可以在 Button 里加入 class 设置其样式
<template>
  <button>X</button>
</template>

<style scoped>
button {
  background-color: red;
}
</style>
```



- 应该优先通过 Vuex 管理全局状态，而不是通过 this.$root 或一个全局事件总线。

