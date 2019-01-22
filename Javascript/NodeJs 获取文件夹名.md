# NodeJs 获取目录下的文件夹名

```js
const fs = require('fs')
const path = require('path')

const root = path.join(`${__dirname}/src/apps`)

const getDir = (path) => {
  return fs.readdirSync(path).filter(p => !p.includes('.'))
}

getDir(root)

```

