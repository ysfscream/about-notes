# Vue 组件中的方法和事件

## Event

就是组件中监听时所发生的事件，比如 click, change, 自定义的事件等。相当于 当 *** 的时候，所触发的事件。

```html
<!-- 当点击的时候 -->
<custom-com @click="handleClick"><custom-com/>
```

## Methods

就是组件内部的内部方法，用于解决什么问题的方法。可以利用 refs 获取组件值后进行调用。

```html
<!-- 调用组件内部的 reset 方法 -->
<custom-com ref="dom"><custom-com/>

<script>
export default {
  methods: {
    handleCustom() {
      this.$refs.dom.reset()
    },
  },
}
</script>
```