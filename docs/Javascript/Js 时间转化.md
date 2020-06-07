# Js 时间转化

[https://css-tricks.com/how-to-convert-a-date-string-into-a-human-readable-format/?utm_source=ESnextNews.com&utm_medium=Weekly+Newsletter&utm_campaign=2020-06-02](https://css-tricks.com/how-to-convert-a-date-string-into-a-human-readable-format/?utm_source=ESnextNews.com&utm_medium=Weekly+Newsletter&utm_campaign=2020-06-02)

一般会使用 moment.js 等库来进行转化，可以使用原生 API 转化本地时间的方法，`toLocaleDateString`

```javascript
const dateString = '2020-05-14T04:00:00Z'

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" }
  return new Date(dateString).toLocaleDateString(undefined, options)
}

const date = new Date() // Thu Jun 04 2020 00:07:18 GMT+0800 (中国标准时间)

formatDate(date) // "2020年6月4日"
```

options 配置可看：[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat)
