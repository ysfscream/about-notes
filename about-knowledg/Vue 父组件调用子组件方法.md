# Vue 父组件调用子组件方法

父组件：

```vue
<div>
  	< ref="child" child-components>
	</child-components>
</div>
```

```js
this.$ref.child.Function()
```

