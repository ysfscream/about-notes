# Vue v-model 绑定数据后修改数据不显示的问题

当表单 v-model 绑定到某个对象的某个属性时，当修改了某个值然后赋值到该属性时，v-model 就不会显示出来，需要先在把 v-model 绑定的值初始化出来

```html
<el-form-item>
    <el-input v-model="record.value">
    </el-input>
</el-form-item>
```

```js
data() {
  return {
      record: {
          value: '',  
      },
   }
}
```

在 element 的 select 组件中，初始化异步传来的值后，选择可以更新 value，但是无法更新 label 的问题。

> 由于vue的响应式更新机制，是无法监测对象新增的属性，所以必须要用 vue.$set()方法来添加新的属性，达到响应式更新。
