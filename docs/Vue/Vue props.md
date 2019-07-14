# Vue props

## 基础传递

官方给的解释：

> prop 是单向绑定的：当父组件的属性变化时，将传导给子组件，但是不会反过来。这是为了防止子组件无意修改了父组件的状态——这会让应用的数据流难以理解

组件内不能修改props的值，同时修改的值也不会同步到组件外层，即调用组件方不知道组件内部当前的状态是什么

实现双向绑定：引入了 `.sync` 修饰符，但是这次它只是作为一个编译时的语法糖存在。它会被扩展为一个自动更新父组件属性的 `v-on` 监听器。

如下代码

```html
<comp :foo.sync="bar"></comp>
```

会被扩展为：

```html
<comp :foo="bar" @update:foo="val => bar = val"></comp>
```

当子组件需要更新 `foo` 的值时，它需要显式地触发一个更新事件：

```javascript
this.$emit('update:foo', newValue)
```

子组件更新修改 props 需要传递父组件的值 再传递给子组件

假如有一个基础组件 BaseList，只有基础的列表展示功能，现在我们想在这基础上增加排序功能，这个时候我们就可以创建一个高阶组件 SortList。

## 属性事件传递

如果碰到属性较多时，需要一个个去传递，非常不友好并且费时，可以使用 $props 一次性传递的（比如react里面的 {...this.props}）。

或者封装某些原生组件，传入的 props 太多，不可一次性写完，比如

```html
<input
  @input="$emit('input', $event.target.value)"
  :value="value"
  :placeholder="placeholder"
  :maxlength="maxlength"
  :minlength="minlength"
  :name="name"
  :form="form"
  :value="value"
  :disabled="disabled"
  :readonly="readonly"
  :autofocus="autofocus">
```

Vue 模板可以这么写 可以如下：

```html
<template>
  <div>
    <label>{{ label }}</label>
    <input v-bind="$props">
  </div>
</template>
```

就可以直接从 vm.$props 拿到所有 props 的值了，如果需要多层传递的话，也可以使用，比如在原生的 input 封装一层组件添加校验。

```html
<!-- CustomInput 组件 -->
<template>
  <div>
    <label>{{ label }}</label>
    <input v-bind="$props">
  </div>
</template>
```

```html
<!-- Valid 组件 -->
<template>
  <div>
    <CustomInput v-bind="$props" />
    <div v-show="show-hit" class="hit">{{ message }}</div>
  </div>
</template>


<script>
  import CustomInput from './CustomInput.javascript'
​
  export default {
    components: { CustomInput },
​
    props: {
      showHit: Boolean,
      ...CustomInput.props
    },
​
    data () {
      return {
        message: '错误提示'
      }
    }
  }
</script>

```

关键就是如何传 CustomInput 的 props。其实只需要在当前组件的 props 中把 CustomInput 的 props 复制一遍后，用 v-bind 就完成了。

## Props 的验证

```javascript
props: {
  status: {
    required: true,
    validator(val) {
      // status 的值只能是 success 或 fail
      return ['success', 'fail'].includes(val)
    },
  },
}
```

## 在组件中修改 props

在组件中直接修改 props 会得到一个警告，可以将 props 的值赋值给 默认的 data，但是这样 props 更新了值，组件也不会更新。但如果确实需要这些更新，则可以使用 computed 属性来组合值。

```html
<template>
  <main>
    <p>{{ localFirstName }}</p>
    <ol>
      <li v-for="item in itemsList" :key="item">{{ item }}</li>
    </ol>
  </main>
</template>

<script>
export default {
  name: "FullName",
  props: {
    firstName: {
      type: String,
      default: "Mike"
    },
    items: {
      type: Array,
      default() {
        return ["lemons", "oranges"];
      }
    }
  },
  computed: {
    itemsList() {
      return [...this.items, ...this.localItems];
    }
  },
  data() {
    return {
      localItems: ["mangos", "apples"],
      localFirstName: this.firstName
    };
  },
}
</script>
```
