# NodeJs pm2 --watch

错误出处：https://cnodejs.org/topic/574fd347c4257a455bd0770f
解决办法：https://www.cnblogs.com/chyingp/p/pm2-documentation.html

> watch 监听整个项目文件 上传文件时 public/upload 文件夹文件变化 当文件没有上传完时
> pm2 自动重启进程


- 使用pm2 ecosystem 自动生成配置文件
- 修改配置文件 忽略不需要监听的文件夹

```json

{
  "name"        : "fis-receiver",  // 应用名称
  "script"      : "./bin/www",  // 实际启动脚本
  "cwd"         : "./",  // 当前工作路径
  "watch": [  // 监控变化的目录，一旦变化，自动重启
    "bin",
    "routers"
  ],
  "ignore_watch" : [  // 从监控目录中排除
    "node_modules", 
    "logs",
    "public"
  ],
  "watch_options": {
    "followSymlinks": false
  },
  "error_file" : "./logs/app-err.log",  // 错误日志路径
  "out_file"   : "./logs/app-out.log",  // 普通日志路径
  "env": {
      "NODE_ENV": "production"  // 环境参数，当前指定为生产环境
  }
}

```

官方文档：http://pm2.keymetrics.io/docs/usage/pm2-doc-single-page/
