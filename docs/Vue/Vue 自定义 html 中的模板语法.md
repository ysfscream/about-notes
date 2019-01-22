# Vue 自定义 html 中的模板语法

```html
<div>
    {{ message }} // xxx
</div>
```

```js
new Vue({
    delimiters: ['[[', ']]'],
})
```

```html
<div>
    {{ message }} // {{ message }}
    [[ message ]] // xxx
</div>
```

