# Vue 强制渲染组件

Vue 中重新渲染组件，强制刷新或者使用 v-if 都是不太优雅的实现

## force update

组件内置$forceUpdate方法，使用前需要在配置中启用

```javascript
import Vue from 'vue'
Vue.forceUpdate()

export default {
  methods: {
    handleUpdateClick() {
      // built-in
      this.$forceUpdate()
    }
  }
}
```

## key-changing

vue使用key标记组件身份，当key改变时就是释放原始组件，重新加载新的组件

```javascript
<template>
  <div>
    <span :key="key"></span>
    <div :key="startDate"></div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        startDate: +new Date(),
        key: 0
      }
    },
    methods: {
      handleUpdateClick() {
        this.key += 1
      },
      reload: function(){
        this.startDate= +new Date();
      },
    }
  }
</script>
```

[https://hacpai.com/article/1572487761301](https://hacpai.com/article/1572487761301)
