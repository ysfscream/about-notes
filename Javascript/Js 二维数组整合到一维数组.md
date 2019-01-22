# Js 二维数组整合到一维数组

```js
const arrFunc = (args) => {
	const newArr = []
    const allArr = [...arguments]
    allArr.forEach((arr) => {
		newArr.push(...arr)
    })
    return newArr
}

arrFunc([1, 2, 3], [2, 3])
// [1, 2, 2, 3, 3]
```

