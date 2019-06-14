# SSH 登录服务器

## 使用 key 免密登录

无口令认证

服务器管理员将客户端传来的公钥追加到用户的 .ssh 目录下的 authorized_keys 或 authorized_keys2 文件中。

```bash
服务器$ cd ~/.ssh
服务器$ cat ../identity.pub >> authorized_keys
服务器$ cat ../id_rsa.pub   >> authorized_keys2
服务器$ cat ../id_dsa.pub   >> authorized_keys2
```

上述命令可以一次性完成：

```bash
本地主机$ ssh root@remote "cat >> /root/.ssh/authorized_keys2" < /root/.ssh/id_rsa.pub
```

之后用户就可以在创建了公钥－私钥对的客户端，无口令认证的登录远程服务器了。执行命令: 客户端$ ssh ubuntu@remotehost

## 错误记录

- 出现如下错误

```bash
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@ WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED! @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
```

对ssh服务器重装了系统，导致所有与原系统建立过ssh连接的系统都无法再建立连接，因为在于原系统建立首次连接时，双方相互记录了对方的公钥（ssh基于非对称密钥技术），在ssh服务主机重装系统后，公钥改变了，任以旧版本公钥的主机自然是无法与新系统连接的。

解决方案：

删除~/.ssh/known_hosts文件中，已经连接过的 IP 的那部分公钥
