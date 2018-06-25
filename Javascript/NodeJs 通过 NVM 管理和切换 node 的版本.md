# NodeJs 通过 NVM 和 n 管理和切换 node 的版本



## NVM

https://segmentfault.com/a/1190000004404505

https://github.com/creationix/nvm

使用`curl`方式来安装：

```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.30.2/install.sh | bash
```

 完成后nvm就被安装在了`~/.nvm`下啦，接下来就需要配一下环境变量了，如果你也使用了`zsh`的话，就需要在`~/.zshrc`这个配置文件中配置，否则就找找看`~/.bash_profile`或者`~/.profile`吧。

打开`~/.zshrc`，在最后一行加上：

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm
```

这一步的作用是每次新打开一个bash，nvm都会被自动添加到环境变量中了。 完成后输入`source ~/.zshrc`重新启动一下配置。

可以使用`nvm ls-remote`看一下node有哪些版本可以安装

```bash
nvm install 版本号
nvm use v4.1.0
Now using node v4.1.0 (npm v2.14.3)
node -v
v4.1.0
nvm use v5.5.0
Now using node v5.5.0 (npm v3.3.12)
node -v
v5.5.0
```

不过问题来了，这时如果你新打开一个bash，输入`nvm current`会发现显示为`null`，这是因为使用`nvm use`命令只会在当前bash里生效，重新打开一个bash你会发现`$PATH`的值已经不包含刚才的node目录了，要解决这个问题也很简单，使用`nvm alias default <version>`命令来指定一个默认的node版本就ok了，这里我使用了`v4.1.0`作为默认版本：

```bash
nvm alias default v4.1.0
default -> v4.1.0
```

此时再打开一个bash输入`nvm current`就会显示为`v4.1.0`了。

## n

直接查看官方文档：https://github.com/tj/n

参考：https://75team.com/post/manage_node_with_n.html

```bash
# 安装 Node 版本
$ n 版本号

# 选择你想使用的版本
$ n 

# Use or install the latest official release:
$ n latest
Use or install the stable official release:

$ n stable
Use or install the latest LTS official release:

$ n lts

Remove some versions:

$ n rm 0.9.4 v0.10.0
Alternatively, you can use - in lieu of rm:

$ n - 0.9.4
Removing all versions except the current version:

$ n prune 
```





