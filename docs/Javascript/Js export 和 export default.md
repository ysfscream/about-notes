# Js export 和 export default

- 用于导出常量，函数，对象，文件，模块等
- 在其他模块，文件中通过 `import 模块名 from '文件名'` 的方式，将其导入使用
- 在一个文件或模块中，export、import可以有多个，export default仅有一个
- 通过export 方式导出的 要加 { 导出的变量名 }，  export default 不需要 可以自定义变量名 （使用export default命令，为模块指定默认输出，这样就不需要知道所要加载模块的变量名）



export:

```js
// a.js
export const str = 'abc'
export const log = (str) => {
    return str
}

//b.js
import { str, log } from 'a'

str // 'abc'
log('123') // '123'
```



export default:

```js
// a.js
export default {
    str: 'abc',
    log(str) {
        return str
    }
}

//b.js
import a from 'a'
a.str // 'abc'
a.log('123') // '123'
```

export default 和 export 的主要区别 在于对应的import的区别：
export 对应的 import 需要知道 export抛出的变量名或函数名 import{a,b}
export default对应的 import 不需要知道 export抛出的变量名或函数名 import anyname