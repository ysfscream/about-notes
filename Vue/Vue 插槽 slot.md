# Vue 插槽 slot

> 插槽 内容分发 [Vue 官方](https://cn.vuejs.org/v2/guide/components.html#%E4%BD%BF%E7%94%A8%E6%8F%92%E6%A7%BD%E5%88%86%E5%8F%91%E5%86%85%E5%AE%B9)

就是 父组件插入内容时 在子组件显示 没有插槽的话 将被丢弃不显示



## 编译作用域

```vue
<my-components>
  {{ message }}
</my-components>
```

message 绑定到父组件

**父组件模板的内容在父组件作用域内编译；子组件模板的内容在子组件作用域内编译**



## 单个插槽

子组件需要一个 `slot`	插口 否则父组件的内容都会被丢弃，子组件有一个没有属性的 `slot`，被当做备用内容，在子组件的的作用域内编译，父组件没有插入内容时，才显示，父组件插入内容将之全部替换

子组件：

```html
<div>
  <h2>我是子组件的标题</h2>
  <slot>
    只有在没有要分发的内容时才会显示。
  </slot>
</div>
```

父组件：

```html
<div>
  <h1>我是父组件的标题</h1>
  <my-component>
    <p>这是一些初始内容</p>
    <p>这是更多的初始内容</p>
  </my-component>
</div>
```

渲染结果

```html
<div>
  <h1>我是父组件的标题</h1>
  <div>
    <h2>我是子组件的标题</h2>
    <p>这是一些初始内容</p>
    <p>这是更多的初始内容</p>
  </div>
</div>
```



## 具名插槽

slot 可以用一个特殊的属性 name 来配置分发的的内容多个插槽，多个插槽有不同的名字，具名插槽将匹配内容片段中有对应 `slot` 特性的元素

仍然可以有一个默认插槽，当匹配不到内容片段时 显示该插槽内容，如果没有，插入内容片段将被抛弃

子组件模板：

```html
<div class="container">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>
```

父组件模板：

```html
<app-layout>
  <h1 slot="header">这里可能是一个页面标题</h1>

  <p>主要内容的一个段落。</p>
  <p>另一个主要段落。</p>

  <p slot="footer">这里有一些联系信息</p>
</app-layout>
```

渲染结果：

```html
<div class="container">
  <header>
    <h1>这里可能是一个页面标题</h1>
  </header>
  <main>
    <p>主要内容的一个段落。</p>
    <p>另一个主要段落。</p>
  </main>
  <footer>
    <p>这里有一些联系信息</p>
  </footer>
</div>
```



组合使用的组件时，内容分发很有用



## 作用域插槽

用于一个能被传递数据的可重用模板，代替渲染好的元素

子组件中传递数据到插槽，就像 props 传值一样

子组件中

```html
<div class="child">
  <slot text="hello from child"></slot>
</div>	
```

在父级中，具有特殊特性 `slot-scope` 的 `<template>` 元素必须存在，表示它是作用域插槽的模板。`slot-scope` 的值将被用作一个临时变量名，此变量接收从子组件传递过来的 prop 对象：

```html
<div class="parent">
  <child>
    <template slot-scope="props">
      <span>hello from parent</span>
      <span>{{ props.text }}</span>
    </template>
  </child>
</div>
```

渲染为：

```html
<div class="parent">
  <div class="child">
    <span>hello from parent</span>
    <span>hello from child</span>
  </div>
</div>
```



> 2.5.0  `scope-slot`  能被用于任何元素和组件中 不仅限于 `<template>`



作用域插槽更典型的用例是在列表组件中，允许使用者自定义如何渲染列表的每一项：

```html
<my-awesome-list :items="items">
  <!-- 作用域插槽也可以是具名的 -->
  <li
    slot="item"
    slot-scope="props"
    class="my-fancy-item">
    {{ props.text }}
  </li>
</my-awesome-list>

```

列表组件的模板：

```html
<ul>
  <slot 
    name="item"
    v-for="item in items"
    :text="item.text">
    <!-- 这里写入备用内容 -->
  </slot>
</ul>

```

