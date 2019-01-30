# npm 发布包

```bash
npm login

npm adduser

# 不能和已有的包的名字重名, 还有一点要注意的是npm对包名的限制：不能有大写字母/空格/下滑线
npm publish
```

npm 撤销发布包

```bash
npm unpublish
```

1. 根据规范，只有在发包的24小时内才允许撤销发布的包（ unpublish is only allowed with versions published in the last 24 hours）

2. 即使你撤销了发布的包，发包的时候也不能再和被撤销的包的名称和版本重复了（即不能名称相同，版本相同，因为这两者构成的唯一标识已经被“占用”了）

npm unpublish的推荐替代命令：

`npm deprecate <pkg>[@<version>] <message>`

使用这个命令，并不会在社区里撤销你已有的包，但会在任何人尝试安装这个包的时候得到警告

例如：npm deprecate penghuwanapp '这个包我已经不再维护了哟～'

npm更新发布后的包

事实上npm更新包和发布包的命令是一样的，都是npm publish,不同之处在于，你需要修改包的版本

所以步骤是：
1.修改包的版本（package.json里的version字段）
2.npm publish
关于修改版本的细节请看下面：

七.npm的版本控制——Semantic versioning
在我们的package.json里面有一个version字段。那么，怎么在项目不断构建的过程中调整版本呢？
npm有一套自己的版本控制标准——Semantic versioning（语义化版本）

具体体现为：

对于"version":"x.y.z"

1.修复bug,小改动，增加z

2.增加了新特性，但仍能向后兼容，增加y

3.有很大的改动，无法向后兼容,增加x

例如：我原本的项目是1.0.0版本的话

若是1中情况，变为1.0.1

若是2中情况，变为1.1.0

若是3中情况，变为2.0.0

通过npm version \<update_type> 自动改变版本
update_type为patch, minor, or major其中之一，分别表示补丁，小改，大改