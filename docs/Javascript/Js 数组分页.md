# Js 数组分页



```javascript
function pagination(pageNo, pageSize, array) {
	let offset = (pageNo - 1) * pageSize;
	return (offset + pageSize >= array.length) ? array.slice(offset, array.length) : 							array.slice(offset, offset + pageSize)
}
console.log(pagination(2, 3, [1, 2, 3, 4, 5, 6, 7]))
```
