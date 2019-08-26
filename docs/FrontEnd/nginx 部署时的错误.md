# nginx 部署时的错误

- 出现未开启的 JavaScript

> We're sorry but cloud.emqx.io doesn't work properly without JavaScript enabled. Please enable it to continue.

解决：

```conf
#官网介绍设置这条可以解决history路由的问题
location / {
    try_files $uri $uri/ /index.html;
}
```

这是 history 模式下的问题，hash 没有
