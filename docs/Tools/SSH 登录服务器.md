# SSH 登录服务器

## 使用 key 免密登录

无口令认证

服务器管理员将客户端传来的公钥追加到用户的 .ssh 目录下的 authorized_keys 或 authorized_keys2 文件中。

```bash
服务器$ cd ~jiangxin/.ssh
服务器$ cat ../identity.pub >> authorized_keys
服务器$ cat ../id_rsa.pub   >> authorized_keys2
服务器$ cat ../id_dsa.pub   >> authorized_keys2
```

上述命令可以一次性完成：

```bash
本地主机$ ssh root@remote "cat >> /root/.ssh/authorized_keys2" < /root/.ssh/id_rsa.pub
```

之后用户就可以在创建了公钥－私钥对的客户端，无口令认证的登录远程服务器了。执行命令: 客户端$ ssh ubuntu@remotehost