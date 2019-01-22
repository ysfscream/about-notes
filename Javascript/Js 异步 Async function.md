# Promise Async Function

> [async function](http://www.ruanyifeng.com/blog/2015/05/async.html)  函数声明将定义一个异步函数，返回 AsyncFunction 对象
>
> [Promise](https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/0014345008539155e93fc16046d4bb7854943814c4f9dc2000) 对象用于一个异步操作的的最终完成(或失败)其结果值得表示
>
> https://juejin.im/post/5b1ffff96fb9a01e345ba704



## Promise

`Promise` 对象用于表示一个异步操作的最终状态（完成或失败）及其返回值。他有以下几种状态：

- pending：初始状态，完成或失败状态的前一个状态
- fulfilled：操作成功完成
- rejected：操作失败

pending 状态的 Promise 对象会触发 fulfilled/rejected 状态，在其状态处理方法中可以传入参数 / 失败信息。当操作成功完成时，Promise 对象的 `then` 方法就会被调用；否则就会触发 `catch`。如：

```js
const myFirstPromise = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve("成功!"); 
    }, 250);
});

myFirstPromise.then((data) => {
    console.log("Yay!" + data);
}).catch((e) => {...});
const myFirstPromise = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve("成功!"); 
    }, 250);
})
```

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

`async`函数接收到返回的值，发现不是`异常`或者`reject`，则判定成功，这里可以`return`各种数据类型的值，`false`,`NaN`,`undefined`...总之，都是`resolve`

但是返回如下结果会使`async`函数判定失败`reject`

1. 内部含有直接使用并且未声明的变量或者函数。
2. 内部抛出一个错误`throw new Error`或者返回`reject`状态`return Promise.reject('执行失败')`
3. 函数方法执行出错（🌰：Object使用push()）等等...

```js

async function AsyncStr() {
	return 'hello'
}

console.log(AsyncStr()) // Promise{ 'hello' }
getAsyncStr().then(res => console.log(res)) // hello


```

`async`定义的函数内部会默认返回一个`promise`对象，如果函数内部抛出异常或者是返回`reject`，都会使函数的`promise`状态为失败`reject`。

```js
async function e() {    
    throw new Error('has Error');
}
e().then(success => console.log('成功', success))   
   .catch(error => console.log('失败', error));
```

```js
//正确reject方法。必须将reject状态return出去。
async function PromiseError() {    
   return Promise.reject('has Promise Error');
}
```

上述都将捕获到错误

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

async 函数返回一个 Promise 对象，可以使用 then 方法添加回调函数。当函数执行的时候，一旦遇到 await 就会先返回，等到触发的异步操作完成，再接着执行函数体内后面的语句。

**打个比方，await是学生，async是校车，必须等人齐了再开车。**

异步函数示例：

```js
console.log(1)
const asy = async () => {
  return await setTimeout(() => {
    console.log(2)
  })
}
asy()
console.log(3)

1
3
2
```

> ```js
> async function dbFuc(db) {
>   let docs = [{}, {}, {}];
>
>   // 报错
>   docs.forEach(function (doc) {
>     await db.post(doc);
>   });
> }
>
>
> ```

上面代码会报错，因为 await 用在普通函数之中了。但是，如果将 forEach 方法的参数改成 async 函数，也有问题。

> ```js
> async function dbFuc(db) {
>   let docs = [{}, {}, {}];
>
>   // 可能得到错误结果
>   docs.forEach(async function (doc) {
>     await db.post(doc);
>   });
> }
> ```



Async/Await

```js
async function readJsonFile() {
  try {
      const file = await readFile('../generator/config.json');
      console.log(file.toString());
  } catch (e) {
      console.log('出错啦');
  }
}
```