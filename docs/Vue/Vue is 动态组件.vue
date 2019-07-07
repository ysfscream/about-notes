# Vue is 动态组件

组件可以用过: is 结合 component 组件来动态切换显示组件，通过 is 来切换的组件，必须得注册 name 属性。

```vue
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