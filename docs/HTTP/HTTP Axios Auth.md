# HTTP Axios Auth

在 config 中初始化了 auth 字段，那在 headers 中添加 Authorization 就会无效

```javascript
Object.assign(axios.defaults, {
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
    Accept: 'application/json',
  },
  baseURL,
  timeout: 100000,
  auth: {} // 使用 Token 验证 这个一定要删除！！！！
})
```
