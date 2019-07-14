# Vue 动态组件

组件可以用过: is 结合 component 组件来动态切换显示组件，通过 is 来切换的组件，必须得注册 name 属性。

```html
<template>
  <div>
    <!--
      按钮，用于切换组件
      注意,此时的A为字符串而非变量
    -->
    <button @click="showWhat = 'A'">showA</button>
    <button @click="showWhat = 'B'">showB</button>
      <!--
        动态切换显隐，组件
      -->
      <component :is="showWhat"></component>
  </div>
</template>

<script>
//引入组件A以及组件B
import A from "./a";
import B from "./b";

export default {
  components: {
    //声明组件A,B
    A,
    B
  },
  data() {
    return {
      //默认显示组件A，若字符串为B则显示组件B,name为component声明
      showWhat: "A"
    };
  }
};
</script>
```

- :is 通过 keep-alive 标签缓存。被该标签包裹的组件就会被缓存下来，每次点击都会重新渲染(即创造~挂载)。

- V-show 会第一时间加载两个组件， 两个组件的生命周期都会触发，会造成不必要的性能浪费，而且切换的时候永远不会再创造挂载一次 Vue()，也就是说，生命周期只会触发一次

- v-if 的话 确实不会造成同时加载两个组件，不过 v-if 切换的话 每次都会创造挂载一次，如果没有重新渲染的需要的话 ，会造成性能浪费
