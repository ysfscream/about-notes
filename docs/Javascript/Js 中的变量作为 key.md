# Js 中的变量作为 key.md

```javascript
const data = {}
const arr = ['a', 'b', 'c']
arr.forEach((i) => {
  data[i] = 1
})
// data => { a: 1, b: 1, c: 1 }
```