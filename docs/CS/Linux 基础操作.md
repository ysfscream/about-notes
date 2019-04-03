# Linux 基础操作

## 日常维护命令

### 查看操作系统信息

```bash
ubuntu@actorcloud:~$ lsb_release -a
No LSB modules are available.
Distributor ID: Ubuntu
Description: Ubuntu 16.04.3 LTS
Release: 16.04
Codename: xenial
```

### 查看系统已经开机了多久

```bash
ubuntu@actorcloud:~$ uptime
 15:01:02 up 27 days,  4:24,  5 users,  load average: 0.01, 0.01, 0.00
```

### 修改主机名

- 修改 `/etc/hostname` 里的主机名

```bash
ubuntu@actorcloud:~$ cat /etc/hostname
actorcloud
```

- 修改 `/etc/hosts` 文件，在 `localhost` 后添加新的主机名

```bash
ubuntu@actorcloud:~$ cat /etc/hosts
127.0.0.1 localhost actorcloud
::1     localhost actorcloud ip6-localhost ip6-loopback
```

- 使主机名立即生效

```bash
ubuntu@actorcloud:~$ hostname actorcloud
```

### 查看某个进程是否已经启动，并且正在监听端口

> `sudo netstat -tunlp` 则可以列出系统当前所有正在监听的端口。

```bash
ubuntu@actorcloud:~$ sudo netstat -tunlp | grep 5432
tcp6       0      0 :::5432      :::*          LISTEN      1366/docker-proxy
```

### 测试某个端口是否能被正常访问

> 如果端口监听正常，但是不能访问，说明可能是防火墙问题

如果能，则返回如下：

```bash
ubuntu@actorcloud:~$ telnet 127.0.0.1 5432
Trying 127.0.0.1...
Connected to 127.0.0.1.
Escape character is '^]'.
```

### 查看内存使用情况

```bash
ubuntu@actorcloud:~$ free -m
              total        used        free      shared  buff/cache   available
Mem:           7983        2150        3194         330        2638        5166
Swap:          4095           0        4095
```

### 查看当前目录下所有文件/文件夹的大小

```bash
ubuntu@actorcloud:~$ du -sh *
527M    rocksdb-5.17.2
5.0M    v5.17.2.tar.gz
```

### 查看本机已挂载的分区信息

```bash
ubuntu@actorcloud:~$ df -lh
Filesystem      Size  Used Avail Use% Mounted on
udev            3.9G     0  3.9G   0% /dev
tmpfs           799M   84M  715M  11% /run
/dev/vda1        20G  7.3G   12G  40% /
tmpfs           3.9G  424K  3.9G   1% /dev/shm
tmpfs           5.0M     0  5.0M   0% /run/lock
tmpfs           3.9G     0  3.9G   0% /sys/fs/cgroup
/dev/vdc1       118G  3.2G  109G   3% /opt
tmpfs           799M     0  799M   0% /run/user/1000
```

### 强制杀死某个进程

> 先用 ps 查到 进程 pid，再用 kill -9 pid 强行杀死

```bash
ubuntu@actorcloud:~$ ps -ef | grep vim
ramesh    7243  7222  9 22:43 pts/2    00:00:00 vim
 ubuntu@actorcloud:~$ kill -9 7243
```

### 查看某个监听端口的 pid

```bash
ubuntu@actorcloud:~$ lsof -i:18083
COMMAND   PID   USER   FD   TYPE DEVICE SIZE/OFF NODE NAME
beam.smp 5301 ubuntu   26u  IPv4  24481      0t0  TCP *:18083 (LISTEN)
```

### 改变某个目录/文件的所属用户及所属群组

 将某个文件改为ubuntu用户和ubuntu组所有

```bash
ubuntu@actorcloud:~$ chown ubuntu:ubuntu some_file
```

 递归修改某个目录及目录下的所有文件(或目录)

```bash
ubuntu@actorcloud:~$ chown -R ubuntu:ubuntu /opt/some_path
```

### 实时查看日志文件

> 这个命令执行后会等待，如果有新行添加到文件尾部，它会继续输出新的行，可以通过 CTRL-C 终止命令的执行

```bash
ubuntu@actorcloud:~$ tail -f log-file
```

### 返回到上一次目录

```bash
ubuntu@actorcloud:~$ pwd
/home/ubuntu
ubuntu@actorcloud:~$ cd /opt/
ubuntu@actorcloud:/opt$ cd -
/home/ubuntu
ubuntu@actorcloud:~$
```

## 磁盘分区、格式化、挂载

### 1. 查看机器挂载硬盘信息

```bash
ubuntu@actorcloud:~$ sudo fdisk -l
Disk /dev/vda: 20 GiB, 21474836480 bytes, 41943040 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: dos
Disk identifier: 0xd46abfdc
 Device     Boot Start      End  Sectors Size Id Type
/dev/vda1  *     2048 41940991 41938944  20G 83 Linux
 Disk /dev/vdb: 4 GiB, 4294967296 bytes, 8388608 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
```

### 2. 对有需要的硬盘执行分区操作

> 对 /dev/vda 分区，执行如下命令后，可以一直回车默认。最后一步输入 `w` 字符并回车保存本次分区配置；
> 一般会将整块硬盘都分成一个区。

```bash
ubuntu@actorcloud:~$ sudo fdisk /dev/vda
```

### 3. 对某个分区进行格式化操作

> 将分区格式化为 ext4 格式

```bash
ubuntu@actorcloud:~$ sudo mkfs.ext4 /dev/vdc1
```

### 4. 将格式化后的分区挂载到相应目录

> 该目录必须是已经存在的目录，如果不存在需要先创建

```bash
ubuntu@actorcloud:~$ sudo mount /dev/vdc1 /opt
```

### 5. 设置开机自动挂载该分区

> 用 vim 编辑 `/etc/fstab` 文件，格式如下
> 最后一行就是自动挂载 `/dev/vdc1` 到 `/opt` 目录

```bash
ubuntu@actorcloud:~$ cat /etc/fstab
 # <file system> <mount point>   <type>  <options>       <dump>  <pass>
# / was on /dev/vda1 during installation
UUID=0d09c6dd-e982-4abb-9401-b29458e12bc6 /               ext4    errors=remount-ro 0       1
/dev/vdc1                                 /opt            ext4    errors=remount-ro 0       1
```
