# Promise Async Function

> [async function](http://www.ruanyifeng.com/blog/2015/05/async.html)  函数声明将定义一个异步函数，返回 AsyncFunction 对象

> [Promise](https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/0014345008539155e93fc16046d4bb7854943814c4f9dc2000) 对象用于一个异步操作的的最终完成(或失败)其结果值得表示

**简单示例**

``` js

var checkLogin = function() {
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

checkLogin().then(res => {
	console.log(res.status) // 200
	console.log('success login')
}).catch(err => {
	console.log(err)
})


```


```js

function getGithubUser(username) {
  return fetch(`https://api.github.com/users/${username}`).then(response => response.json());
}
 
getGithubUser('mbeaudru')
  .then(user => console.log(user))
  .catch(err => console.log(err));

```

## async await

> `async` `await` 建立在 `Promise` 的概念之上 是 `Generator` 函数的语法糖
> 
> 它们允许更强的代码风格

`async` 操作符将一个函数标记为异步 并将始终返回一个 `Promise`  `await`只能再标记了 `async` 函数中使用 它将暂停该行代码的执行 直到表达式中返回`Promise` `resolve` 或者 `rejects`

**简单实例**

```js

async function AsyncStr() {
	return 'hello'
}

console.log(getAsyncStr()) // Promise{ 'hello' }
getAsyncStr().then(res => console.log(res)) // hello


```

```js

async function getGithubUser(username) { 
// async 关键字允许在函数中使用 await ，意味着函数返回一个 promise 
	const response = await fetch(`https://api.github.com/users/${username}`); 
	// 执行在这里暂停，直到fetch返回的 Promise 被 resolved 
	return response.json();
}

getGithubUser('mbeaudru')
	.then(user => console.log(user)) 
	// 记录用户响应 - 不能使用 await 语法，因为此代码不在 async 函数中 
	.catch(err => console.log(err)); 
	// 如果在我们的异步函数中抛出一个错误，我们将在这里捕获它


```













