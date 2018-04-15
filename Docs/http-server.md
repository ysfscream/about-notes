# http-server

> 在很多情况下，需要在本地开启http服务器来测试。所以就需要一个简单的省事好用的http服务器。以前的时候，都是使用php的本地环境，但是，自从学了nodejs，发现了http-server好东西。不用配置直接在当前文件夹内打开cmd，就能够使用，简单易用，轻松方便。 `http-server`是一个简单的零配置命令行http服务器。它对于生产使用来说是足够强大的，但它的测试，本地开发和学习足够简单易用。

https://blog.csdn.net/qq_30100043/article/details/73105362

https://www.npmjs.com/package/http-server



- 安装通过npm：进行全局安装

```bash
npm install http-server -g
```

- 使用，进入打包后的文件夹 运行该命令

```bash
http-server [path] [options]

# 可快速代理到后端
http-server -P 后端地址 
```



## Available Options:

`-p` Port to use (defaults to 8080)

`-a` Address to use (defaults to 0.0.0.0)