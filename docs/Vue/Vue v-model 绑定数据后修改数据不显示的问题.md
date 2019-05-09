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
