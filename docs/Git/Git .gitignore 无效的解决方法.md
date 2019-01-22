# Git .gitignore 无效的解决方法

> .gitignore只能忽略那些原来没有被 track 的文件，如果某些文件已经被纳入了版本管理中，则修改 .gitignore 是无效的。

解决方法是先把本地缓存删除，然后再提交。

```shell
git rm -r --cached .
git add .
git commit