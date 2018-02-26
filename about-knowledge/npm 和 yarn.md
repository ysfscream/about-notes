# npm 和 yarn

[参考](https://jeffjade.com/2017/12/30/135-npm-vs-yarn-detial-memo/#%E5%A6%82%E4%BD%95%E6%9B%B4%E6%96%B0-Npm)

## npm

> `npm` 即：[npm package manager ](https://www.npmjs.com/)，是一种重用其他开发人员的代码的方法，也是一种与他人共享代码的方式，并且可以很容易地管理不同版本的代码。`npm` 开始作为 Node 包管理器，所以你会发现很多模块可以在服务器端使用。也有很多的包添加命令供您在命令行中使用。你还会发现可以在前端使用的软件包。

#### **如何更新 Npm**

1. npm install npm@latest -g （npm install npm -g）
2. 更新(重新下载) Node.js



## yarn

> `Yarn` 对你的代码来说是一个包管理器， 你可以通过它使用全世界开发者的代码，或者分享自己的代码。 Yarn 做这些快捷、安全、可靠，所以你不用担心什么。通过 `Yarn`，你可以使用其他开发者针对不同问题的解决方案，使自己的开发过程更简单。 使用过程中遇到问题，你可以将其上报或者贡献解决方案。一旦问题被修复，Yarn会更新保持同步。

对多数用户来说，从npm迁移的过程应该非常简单。Yarn和npm使用相同的`package.json`格式，而且Yarn可以从npm安装依赖包。

如果你打算在现有项目中尝试Yarn，只需执行：`yarn`

#### **如何安装 Yarn**

对于如何安装 `Yarn`，Yarn 官方给出了很全面的说明，详见 [Install Yarn](https://yarnpkg.com/zh-Hans/docs/install)；涵盖 MacOs，Windows，Linux 等平台，并且还给出一些备用安装方式，譬如通过 `npm` 来安装：

```shell
npm install --global yarn
```

当然，`Yarn` 官方在 [Yarn 备选安装方式](https://yarnpkg.com/zh-Hans/docs/install#alternatives-tab)有明确讲道：

> 一般来说, 不推荐通过 `npm` 安装 `Yarn`，在用基于 Node 的包管理器安装 Yarn 时，该包未被签名， 并且只通过基本的 `SHA1`散列进行唯一完整性检查。这在安装系统级应用时有安全风险。因为这些原因，高度推荐用你的操作系统最适合的方式来安装 Yarn。

但在实际使用中，这倒是最为方便的方式之一，迄今倒也没遇到什么问题；当然，最好按照官方推荐的方式；如果你使用并熟悉 Mac 操作系统，用推荐方式安装 Yarn 也是很简单：`brew install yarn`(笔者注)。

#### 如何更新 Yarn

对于如何更新 Yarn，可以结合安装时候对应命令；如果是 Mac 操作系统，使用 `brew` 安装，那么如此操作予以更新：

```shell
brew upgrade yarn
```

也可以使用 `yarn` 本身来更新自己：

```shell
yarn global add yarn
```



## npm 与 yarn 常用命令对比

### **有所区别的命令**

| Npm                       | Yarn                      | 功能描述                   |
| ------------------------- | ------------------------- | ---------------------- |
| npm install(npm i)        | yarn install(yarn)        | 根据 package.json 安装所有依赖 |
| npm i –save [package]     | yarn add [package]        | 添加依赖包                  |
| npm i –save-dev [package] | yarn add [package] –dev   | 添加依赖包至 devDependencies |
| npm i -g [package]        | yarn global add [package] | 进行全局安装依赖包              |
| npm update –save          | yarn upgrade [package]    | 升级依赖包                  |
| npm uninstall [package]   | yarn remove [package]     | 移除依赖包                  |

### **相同操作的命令**

| Npm                          | Yarn                          | 功能描述                     |
| ---------------------------- | ----------------------------- | ------------------------ |
| npm run                      | yarn run                      | 运行 package.json 中预定义的脚本  |
| npm config list              | yarn config list              | 查看配置信息                   |
| npm config set registry 仓库地址 | yarn config set registry 仓库地址 | 更换仓库地址                   |
| npm init                     | yarn init                     | 互动式创建/更新 package.json 文件 |
| npm list                     | yarn list                     | 查看当前目录下已安装的node包         |
| npm login                    | yarn login                    | 保存你的用户名、邮箱               |
| npm logout                   | yarn logout                   | 删除你的用户名、邮箱               |
| npm outdated                 | yarn outdated                 | 检查过时的依赖包                 |
| npm link                     | yarn link                     | 开发时链接依赖包，以便在其他项目中使用      |
| npm unlink                   | yarn unlink                   | 取消链接依赖包                  |
| npm publish                  | yarn publish                  | 将包发布到 npm                |
| npm test                     | yarn test                     | 测试 = yarn run test       |
| npm bin                      | yarn bin                      | 显示 bin 文件所在的安装目录         |
| nom info                     | yarn info                     | 显示一个包的信息                 |

### **Npm 独有的命令**

- [npm rebuild pacakgename](https://docs.npmjs.com/cli/rebuild): 用于更改包内容后进行重建；比如常见的 `npm rebuild node-sass`；当使用 Sass（Scss） 来作样式表预处理器，再打包的时候，你可能会遇见如下错误；而解决此问题，最为简单的方式即使用 `rebuild` 命令，对 [node-sass](https://www.npmjs.com/package/node-sass) 进行重建即可。



### **Yarn 独有的命令**

- [yarn import](https://yarnpkg.com/zh-Hans/docs/cli/import)：依据原npm安装后的`node_modules`目录生成一份`yarn.lock`文件；
- [yarn licenses](https://yarnpkg.com/zh-Hans/docs/cli/licenses)：列出已安装包的许可证信息；
- [yarn pack](https://yarnpkg.com/zh-Hans/docs/cli/pack)：创建一个压缩的包依赖 gzip 档案；
- [yarn why](https://yarnpkg.com/zh-Hans/docs/cli/why)：显示有关一个包为何被安装的信息。
- [yarn autoclean](https://yarnpkg.com/zh-Hans/docs/cli/autoclean)：从包依赖里清除并移除不需要的文件。



### **管理 Node 版本**

- `nvm` 是一个独立软件包：在安装之时，`nvm` 将不同的 node 版本存储到 *~/.nvm//* 下，然后修改 `$PATH`，将指定版本的 node 路径加入，如此我们调用的 node 命令，即是所指定版本的 node；

npm 脚本 http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html



## yarn.lock 和 package-lock.json

> 一个项目周期很长，在不断开发的同时，而依赖的库也会有很大改变；有时候你可能只想运行 `npm i` 更新没有下载的插件，却不想偶尔会将依赖的一些其他插件更到最新，导致各种奇葩问题，`package-lock.json` 和 `yarn.lock` 就是为解决这种问题而设定的存在。

锁定 依赖包中的版本 确保在不同的机子上安装相同的依赖不会升级

文件是自动产生的，而且应该完全被管理。 当你用 Yarn/npm CLI 增加／升级／删除依赖，它将自动更新你的文件。 不要直接编辑这个文件，那样很容易弄坏某些东西。



**看来 npm 和 Yarn 在安装包的速度差异和要安装的包个数强相关，不过不管怎么样，Yarn 都比 npm 要快，更简洁的输出**

