# AJAX


>只要是JS调用异步通讯组件并使用格式化(JSON)的数据来更新web页面上的内容或操作过程，ajax就是异步的javascript和xml，就是不关闭不跳转不刷新的情况下，在网页后台提交数据，部分更新页面内容，这种方法就可以算是Ajax

### 同步

>客户端发起请求 > 等待 > 服务器端处理 > 等待 > 响应 > 页面载入（请求错误时全部重新载入）

### 异步

>客户端发起请求 > 服务器端处理 > 响应 > 页面载入（填写时，及时更新，部分返回）

__向服务器发送请求的时候，我们不必等待结果，而是可以同时做其他的事情，等到有了结果我们可以再来处理__

*创建XMLHttpRequset实例*

```js
// ajax的封装
	var test = getElementById('text-response');
	function ajaxLoad(method, url, callback) {
		var request = new XMLHttpRequest()
		request.onreadystatechange = callback
		request.open(method, url, true) //async: true 异步 false 同步
		request.send()
	}
	function ajaxFunc() {
		ajaxLoad('GET', '/api/goods', function(){
			if (request.readyState === 4 && request.status === 200) {
				text.value = request.responseText
			} else {
				text.value = 'error: ' + request.status
			}
		})
	}

	// ajax 实例
	function scuccess(text) {
		var test = getElementById('text-response');
		text.value = text
	}

	function error(code) {
		var test = getElementById('text-response');
		text.value = 'Error:' + code
	}
	var request = new XMLHttpRequest()

	request.onreadystatechange = function() {
		if (request.readyState === 4) { // readyState 的状态 0 请求未初始化 1 服务器连接建立 2 请求已接受 3 请求处理中 4 请求已完成 且响应就绪
			if (request.status === 200) { // 200 ok 404 Not Found
				return scuccess(request.responseText)
			} else {
				return error(request.status)
			}
		}
	}
	request.open('GET', 'http://api/goods')

	// request.setRequestHeader('content-type', 'application/json')
	// POST请求 添加Http头 在send中想要发送的数据
	request.send()
	alert('loding')
```
