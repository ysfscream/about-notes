# Js 一些 Tips

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

- 简短的条件判断 如果条件判断后只有一个结果 可以运用 && 运算符

```js
if (condition) {
	doSomething()
}

// 修改为

condition && doSomething()
```

- 三元表达式

```js
let ticTacToe;
if(ticTacToe === 1){
  ticTacToe = 'X';
} else {
  ticTacToe = 'O';
}
// It can be written like this
let ticTacToe = ticTacToe === 1 ? 'X' : 'O';
```

- There is more then console.log()

```javascript
console.table(yourObject)

console.group()

console.warn() & console.error()

console.log('%c Auth ',
            'color: white; background-color: #2274A5',
            'Login page rendered');
console.log('%c GraphQL ',
            'color: white; background-color: #95B46A',
            'Get user details');
console.log('%c Error ',
            'color: white; background-color: #D33F49',
            'Error getting user details');
```

This can be used when you want to group or nest relevant details together to be able to easily read the logs.



- 在一个字符串中，在小写和大写字母中间加入空格

```js
'LoveYou'.replace(/([a-z])([A-Z])/g, '$1 $2') // Love You
```

- let 和 var 的区别, 作用域

```js
// interviewer: what will the following code output?
const arr = [10, 12, 15, 21];
for (let i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log('Index: ' + i + ', element: ' + arr[i]);
  }, 3000);
}

// Change let to var, what will the following code output?
```

- 一次循环分出两个数组

They really should have called it builder instead of reduce.

```javascript
const exampleValues = [2, 15, 8, 23, 1, 32];
const [truthyValues, falseyValues] = exampleValues.reduce((arrays, exampleValue) => {
  if (exampleValue > 10) {
    arrays[0].push(exampleValue);
    return arrays;
  }

  arrays[1].push(exampleValue);
  return arrays;
}, [[], []]);
```
