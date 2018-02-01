# Docker 安装 mongodb

https://brickyang.github.io/2017/03/15/%E5%88%A9%E7%94%A8-Docker-%E8%BF%90%E8%A1%8C-MongoDB/

https://brickyang.github.io/2017/03/15/%E5%88%A9%E7%94%A8-Docker-%E8%BF%90%E8%A1%8C-MongoDB/

- docker pull mongo 下拉官方镜像

- ## 运行 mongo

  这里我们直接使用官方的 mong 镜像。

  ```shell
  docker run --name <your-name> -p 27017:27017 -v $PWD/yushifan/data/db:/data/db -d mongo --auth
  ```

  `—name` 指定库的名字，如果不指定会使用一串随机字符串。

  `-p 27017:27017` 官方的镜像已经暴露了 `27017` 端口，我们将它映射到主机的端口上。如果你不使用默认端口，将 `:` 前面的数字改成自定义端口。

  `-v /data/db:/data/db` 冒号前面的是主机上的文件路径，将它挂载到库中的文件夹下，实际对文件的读写就会在主机文件上操作。

  `-d` 在后台运行。

  `mongo:3.4` 指定镜像版本，默认是 `latest` 。建议总是自己指定版本。

  `—auth` 以 `auth` 模式运行 mongo。

  然后执行一下 `docker ps` 确认一下库已经正常运行起来。

  ​

  使用mongo镜像执行mongo 命令连接到刚启动的容器,主机IP为172.17.0.1

  ```
  runoob@runoob:~/mongo$ docker run -it mongo mongo --host 172.17.0.1
  MongoDB shell version: 3.2.7
  connecting to: 172.17.0.1:27017/test
  Welcome to the MongoDB shell.
  For interactive help, type "help".
  For more comprehensive documentation, see
    http://docs.mongodb.org/
  Questions? Try the support group
    http://groups.google.com/group/mongodb-user
  >
  ```



## 新建管理员

现在我们需要进入 mongo shell 操作：

```shell
docker exec -it <YOUR-NAME> mongo admin
> db.createUser({ user: '<USER>', pwd: '<PASSWORD>', roles: [ { role: 'root', db: 'admin' } ]});
Successfully added user: {
    "user" : "<USER>",
    "roles" : [
        {
            "role" : "root",
            "db" : "admin"
        }
    ]
}

```

以后想以管理员身份登入 mongo shell 就可以运行：

```shell
docker exec -it <YOUR-NAME> mongo -u <USER> -p <PASSWORD> --authenticationDatabase admin
```

创建完成后连接数据库需要验证 admin 里面的管理员账户密码 run 时需要 运行—auth 模式

创建的数据库里需要有集合才能被保留

