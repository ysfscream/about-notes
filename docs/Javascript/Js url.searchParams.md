# Js url.searchParams

```javascript
let url = new URL('https://example.com/?q=Better%20Webcam&page=2')
let query = url.searchParams.get('q') // Better Webcam
let page = url.searchParams.get('page') // 2

url.searchParams.set('page', 3)
// url.href 'https://example.com/?q=Better%20Webcam&page=3'
```
