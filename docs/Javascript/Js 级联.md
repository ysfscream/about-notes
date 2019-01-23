# Js 级联

## 级联 cascade（链式调用）

有一些方法没有返回值，例如，一些设置或修改对象的某个状态却不返回任何值的方法，让这些方法返回 this 而不是 undefined 就可以启用级联

**在一个级联中，在一个单独语句中依次调用同一个对象的很多方法**

如翻转字符串：

```js
const str = 'hello'
str.split('').reserve().join()
console.log(str) // 'olleh'
```



如返回的 Promise：

```js
let checkLogin = function() {
	return new Promise((resolve, reject) => {
		let flag = true
		if (flag) {
			resolve({
				status: 200,
				result: true
			})
		} else {
			reject('error')
		}
	})
}

checkLogin()
    .then((res) => {
	if (res.status === 200) {
		console.log(res)
		console.log('success login')
	}
	}).catch((err) => {
		console.log(err)
	})

```



