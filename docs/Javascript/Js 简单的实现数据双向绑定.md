# Js 简单的实现数据双向绑定

简单的来说就是，通过设置对象 searchForm 的属性值为 input 的 value 的值，当 searchForm 的属性值发生变化后，input 输入的值也会发生变化，等于 searchForm 的属性值，监听 input 发生输入事件，就将显示的值设置为 searchForm 的值，从而也就绑定的是 input 输入的值。

```html
<input type="text" id="search-input" model="searchForm.value">
<p id="search-result"></p>
```

```js
const searchForm = {
	value: 'hello world',
}

document.getElementById('search-input').value = searchForm.value
document.getElementById('search-result').innerText = searchForm.value

Object.defineProperty(searchForm, 'value',{
    get() {
        return document.getElementById('search-input').value
    },
    set(newVal) {
        document.getElementById('search-input').value = newVal
        document.getElementById('search-result').innerText = newVal
    }
})

document.getElementById('search-input').addEventListener('keyup', () => {
    document.getElementById('search-result').innerText = searchForm.value
})
```