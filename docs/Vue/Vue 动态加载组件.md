# Vue 动态加载组件

延时加载 / 异步组件

> 使用 Webpack 的动态导入来延迟加载组件。Vue 支持在渲染时延迟加载组件和代码分割。这些优化让你可以只在需要时加载组件代码，从而减少 HTTP 请求、文件大小，并自动提高性能。这个特性的重要之处在于，它既可以处理全局加载的组件，也可以处理局部加载的组件。

## 全局加载异步组件

```js
import Vue from 'vue';

//Where 'editor' is the name of the component <editor></editor>
//Returns a promise that only gets called when the compoent is rendered and then cached.
Vue.component('editor', () => import('./componetns/Editor.vue'));
```

## 本地加载异步组件

```html
<template>
  <section>
    <editor></editor>
  </section>
</template>

<script>
export default {
  name: 'dashboard',
  components: {
    'Editor': () => import('./Editor')
  }
}
</script>
```

**其实加载路由时也是可以使用动态导入组件**:

```js
{
  name: 'page',
  path: '/page',
  component: () => import('views/page.vue')
}
```
