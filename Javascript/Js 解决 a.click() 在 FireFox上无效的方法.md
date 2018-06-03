# Js 解决 a.click() 在 FireFox上无效的方法

https://stackoverflow.com/questions/32225904/programmatical-click-on-a-tag-not-working-in-firefox?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa

```javascript
const aTag = createElement('aTag')
aTag = 'https://www.google.com'
aTag.click()
```

在 chrome， Safari 上正常

在 FireFox 上：

```js
const aTag = createElement('aTag')
aTag.setAttribute("type", "hidden")
aTag = 'https://www.google.com'
document.body.appendChild(aTag)
aTag.click()
aTag.remove()
```

