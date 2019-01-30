# Git commit CLI 规范

>commit message 应该清晰明了，说明本次提交的目的 具体可以[查看这里(ruanyf)](http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html) || [使用 commitlint Angular 规范](https://marionebl.github.io/commitlint/#/)

```js
[
  'build || chore',  // 构建过程或辅助工具的变动
  'ci', // 持续集成
  'docs', // 文档
  'feat', // 新功能 (feature)
  'fix',  // 修补 bug
  'perf',  // 性能
  'refactor', // 重构 既不是修补 bug 也不是新功能
  'revert',  // 恢复原状
  'style', // 修改样式 代码格式
  'test' // 增加测试
]
```

```js
<type>(<scope>): <subject> // example: "fix(index.js): fix the bug"
```