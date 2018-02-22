# Docker 简单使用

[参考1](http://www.runoob.com/docker/docker-tutorial.html)

[参考2](https://www.gitbook.com/book/yeasy/docker_practice/details)

>Docker 是一个开源的应用容器引擎，基于 [Go 语言](http://www.runoob.com/go/go-tutorial.html) 并遵从Apache2.0协议开源。
>
>Docker 可以让开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。
>
>容器是完全使用沙箱机制，相互之间不会有任何接口（类似 iPhone 的 app）,更重要的是容器性能开销极低



Docker 容器通过 Docker 镜像来创建

容器与镜像的关系类似于面向对象编程中的对象与类

当运行容器时，使用的镜像如果在本地中不存在，docker 就会自动从 docker 镜像仓库中下载，默认是从 Docker Hub 公共镜像源下载



## 镜像

- ` docker images`查看本机主机上的镜像
- `docker pull xxx(ubuntu, nginx...)`获取一个新的镜像
- ` docker image rm [选项] <镜像1> [<镜像2> …]` 删除本地镜像
  - 用 ID、镜像名、摘要删除镜像 `<镜像>` 可以是 `镜像短 ID`、`镜像长 ID`、`镜像名` 或者 `镜像摘要`



## 容器

启动容器有两种方式，一种是基于镜像新建一个容器并启动，另外一个是将在终止状态（`stopped`）的容器重新启动。

因为 Docker 的容器实在太轻量级了，很多时候用户都是随时删除和新创建容器

- 所需要的命令主要为 `docker run`，我们可以直接使用这个镜像来运行容器。这是新建启动
- 当利用 `docker run` 来创建容器时，Docker 在后台运行的标准操作包括：
  - 检查本地是否存在指定的镜像，不存在就从公有仓库下载
  - 利用镜像创建并启动一个容器
  - 分配一个文件系统，并在只读的镜像层外面挂载一层可读写层
  - 从宿主主机配置的网桥接口中桥接一个虚拟接口到容器中去
  - 从地址池配置一个 ip 地址给容器
  - 执行用户指定的应用程序
  - 执行完毕后容器被终止


- 可以尝试运行一个 [Nginx 服务器](https://store.docker.com/images/nginx/) 

  ```shell
  docker run -d -p 80:80 --name webserver nginx
  ```

  - **-d:**让容器在后台运行。此时容器会在后台运行并不会把输出的结果 (STDOUT) 打印到宿主机上面(输出结果可以用 `docker logs`查看
  - **-P 80： 80:**将容器内部使用的网络端口映射到我们使用的主机上
  - **—name webserver**  将容器命名为 webserver

- `docker ps` `docker container ls` 命令来查看运行的容器信息

- 要获取容器的输出信息，可以通过 `docker container logs` 命令

- `docker container start` 命令，直接将一个已经终止的容器启动运行。

- 可以使用 `docker container stop` 来终止一个运行中的容器。

- 终止状态的容器可以用 `docker container ls -a` `docker p -l`命令看到 


- `docker container restart` 命令会将一个运行态的容器终止，然后再重新启动它

- `docker exec` 命令进入容器进行操作

  - `docker exec` 后边可以跟多个参数，这里主要说明 `-i` `-t` 参数。

    只用 `-i` 参数时，由于没有分配伪终端，界面没有我们熟悉的 Linux 命令提示符，但命令执行结果仍然可以返回。

    当 `-i` `-t` 参数一起使用时，则可以看到我们熟悉的 Linux 命令提示符

- 如果要导出本地某个容器，可以使用 `docker export` 命令

- 可以使用 `docker import` 从容器快照文件中再导入为镜像，也可以通过指定 URL 或者某个目录来导入，例如`docker import http://example.com/exampleimage.tgz example/imagerepo`

- 可以使用 `docker container rm` 来删除一个处于终止状态的容器如果要删除一个运行中的容器，可以添加 `-f` 参数。Docker 会发送 `SIGKILL` 信号给容器。

- 用 `docker container ls -a` 命令可以查看所有已经创建的包括终止状态的容器，下面的命令可以清理掉所有处于终止状态的容器。`docker container prune`