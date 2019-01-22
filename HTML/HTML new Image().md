# HTML new Image()

> Image(width, height)

new Image() 功能等价于 document.createElement('img')

```js
var img = new Image(100, 200)
img.src = './test.png'
element.appendChild(img)

img => '<img src="./test.png" width=100 height=200 />'
```



