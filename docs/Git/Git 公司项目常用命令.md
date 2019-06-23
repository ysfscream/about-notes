# Git 公司项目常用命令

- `git help -a && git** --help`

- `git clone [help || ssh]`

- `git commit --amend`  // 修改 commit 的 message (message 一次只做一件事)

- `git pull --rebase`

- `git rebase -i HEAD~(合并条数)` // 合并 commit 信息 到前一个 commit 信息

- `git stash` // 本地修改后 可以提交到暂存区 才可以 pull 远程代码 然后从暂存区取出代码 继续工作

- `git checkout -b 本地分支名 origin/远程分支名` 从远程仓库里拉取一条本地不存在的分支时
