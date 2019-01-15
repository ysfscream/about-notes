# NodeJs 编写命令行工具

http://www.ruanyifeng.com/blog/2015/05/command-line-with-node.html

https://juejin.im/post/5bd90d3ce51d4579362b0390



在模块下的 package.json 加入 bin 字段，将 hello 的路径加入环境变量 PATH

```json
{
  "name": "hello",
  "bin": {
    "hello": "hello"
  }
}
```

然后执行 npm link 命令，将命令捆绑到全局。

npm检测到package.json里面存在一个bin字段，它就同时在全局npm包目录下生成了一个可执行文件：

> ```bash
> $ npm link
> ```

现在再执行 hello ，就不用输入路径了。

> ```bash
> $ hello
> hello world
> ```

当我们在系统命令行直接执行 hello 的时候，实际上就是执行这里的脚本。
因为安装node的时候，npm将这个目录配置为系统变量环境了，当你执行命令的时候，系统会先找系统命令和系统变量，然后到变量环境里面去查找这个命令名，然后找到这个目录后，发现匹配上了该命令名的可执行文件，接着就直接执行它。vue-cli也好，webpack-cli也好，都是这样执行的。



如果你仅希望在项目里执行，则需要在你项目里面新建一个目录，重复上述的操作，不要llink到全局里面去，而是使用`npm i -D file:<你的脚本目录路径>`，把它当成项目的依赖安装到node_modules里面去，如果安装成功，那么在项目的package.json你会看到多了一条依赖，这条依赖的值不是版本号，而是你脚本的路径。然后在node_modules里面会有一个.bin目录，里面就存放着你的可执行文件。

> 局部安装建议用`npm i -D file:xxx`，这样它会在package.json留条记录，方便其他小伙伴看到。自然，你的脚本最好也是放进项目目录里面。



这里也给我们提供了一个cli开发流程思路：

- 初期开发可以通过`node index.js`来看效果。
- 测试的时候可以通过`npm link`的方式进行安装测试。
- 发布