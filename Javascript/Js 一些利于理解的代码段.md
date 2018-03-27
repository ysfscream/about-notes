# Js 一些利于理解的代码段

- 展开运算符的用处

```JS
let one = ['a', 'b', 'c']
let two = ['d', 'e', 'f']
let three = ['g', 'h', 'i']

// way #1

let way1 = one.connact(one, two)

// way #2

let way2 = [].connact(one, two, three)

// way #3

let way3 = [...one, ...two, ...three]

// 快速交换两个数字

[a, b] = [b, a]
```

- 回调 -> Promise -> async/await

```JS
// 回调
getData((a) => {
	getMoreData((a, b) => {
		getMoreData((b, c) => {
			getMoreData((c, d) => {
				getMoreData((d, e) => {
					console.log(e)
				})
			})
		})
	})
})

// promise
getData()
	.then((a) => getMoreData(a))
	.then((b) => getMoreData(b))
	.then((c) => getMoreData(c))
	.then((d) => getMoreData(d))
	.then((e) => console.log(e))

// async/await
(async () => {
	const a = await getData()
	const b = await getMoreData(a)
	const c = await getMoreData(b)
	const d = await getMoreData(c)
	const e = await getMoreData(d)
	console.log.log(e)
})()
```



