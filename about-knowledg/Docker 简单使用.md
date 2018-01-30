# Docker 简单使用

[参考](http://www.runoob.com/docker/docker-tutorial.html)

>Docker 是一个开源的应用容器引擎，基于 [Go 语言](http://www.runoob.com/go/go-tutorial.html) 并遵从Apache2.0协议开源。
>
>Docker 可以让开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。
>
>容器是完全使用沙箱机制，相互之间不会有任何接口（类似 iPhone 的 app）,更重要的是容器性能开销极低



Docker 容器通过 Docker 镜像来创建

容器与镜像的关系类似于面向对象编程中的对象与类

当运行容器时，使用的镜像如果在本地中不存在，docker 就会自动从 docker 镜像仓库中下载，默认是从 Docker Hub 公共镜像源下载



- ` docker images`查看本机主机上的镜像

- `docker pull xxx(ubuntu, nginx)`获取一个新的镜像

  我们可以直接使用这个镜像来运行容器。


- 可以尝试运行一个 [Nginx 服务器](https://store.docker.com/images/nginx/) 

  ```shell
  docker run -d -p 80:80 --name webserver nginx
  ```

  - **-d:**让容器在后台运行。
  - **-P 80： 80:**将容器内部使用的网络端口映射到我们使用的主机上
  - **—name webserver**  将容器命名为 webserver

- `docker ps -l`查看正在运行的镜像

- `docker kill commit_ID`结束某个容器

- `docker stop webserver`停止容器

- `docker rm commit_ID`删除某个容器

  - 删除容器时，容器必须是停止状态，否则会报错误

- `docker rm webserver`删除服务器

- 已经停止的容器，我们可以使用命令 docker start 来启动。

- 正在运行的容器，我们可以使用 docker restart 命令来重启