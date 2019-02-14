# npx 介绍

[LINK to Ruanyifeng](http://www.ruanyifeng.com/blog/2019/02/npx.html)

## 调用项目安装的模块

npx 想要解决的主要问题，就是调用项目内部安装的模块

```bash
$ node-modules/.bin/mocha --version

# npx 就是想解决这个问题，让项目内部安装的模块用起来更方便
$ npx mocha --version

# 由于 npx 会检查环境变量$PATH，所以系统命令也可以调用 等同于 ls
$ npx ls
```

npx 的原理很简单，就是运行的时候，会到node_modules/.bin路径和环境变量$PATH里面，检查命令是否存在。

## 避免全局安装模块

除了调用项目内部模块，npx 还能避免全局安装的模块。比如，create-react-app这个模块是全局安装，npx 可以运行它，而且不进行全局安装。

```bash
# 下面代码运行时，npx 将create-react-app下载到一个临时目录，使用以后再删除。所以，以后再次执行上面的命令，会重新下载create-react-app。
$ npx create-react-app my-react-app

# 下载全局模块时，npx 允许指定版本。
$ npx uglify-js@3.1.0 main.js -o ./dist/main.js
```

## 使用不同版本的 node

利用 npx 可以下载模块这个特点，可以指定某个版本的 Node 运行脚本。它的窍门就是使用 npm 的 node 模块。

```bash
$ npx node@0.12.8 -v
v0.12.8
```

上面命令会使用 0.12.8 版本的 Node 执行脚本。原理是从 npm 下载这个版本的 node，使用后再删掉。

某些场景下，这个方法用来切换 Node 版本，要比 nvm 那样的版本管理器方便一些。

-p参数用于指定 npx 所要安装的模块，所以可以写成下面这样。

```bash
$ npx -p node@0.12.8 node -v 
v0.12.8
```

## 执行 GitHub 源码

npx 还可以执行 GitHub 上面的模块源码。

```bash
# 执行 Gist 代码
$ npx https://gist.github.com/zkat/4bc19503fe9e9309e2bfaa2c58074d32

# 执行仓库代码
$ npx github:piuccio/cowsay hello
```

注意，远程代码必须是一个模块，即必须包含package.json和入口脚本。
