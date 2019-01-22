# CSS 简单规范

- css hack 浏览器兼容
- 属性书写顺序

```css
位置属性(position, top, right, z-index, display, float等)
大小(width, height, padding, margin)
文字系列(font, line-height, letter-spacing, color- text-align等)
背景(background, border等)
其他(animation, transition等)
display
float
position
z-index
width
height
overflow
left(right)
top(bottom)
text-xxx
font-xxx
color
border
background
cursor
```

- 0 不带单位 除动画0%

- css 属性使用缩写

  ```css
  padding: 1px 2px 3px 4px;   
  ```

- z-index

  ```css
  //左右侧导航: 100-109 
  //弹窗: 110-119 
  //顶部: 90-99 
  //搜索: 80-89 
  //导航: 70-79 
  //主内容: 50-59 
  //底部: 40-49
  ```

- 命名规则 全部小写 `- `符号连接 可以单个单词 组合单词语义化 形容词-名词 或 命名空间-形容词-名词

- ```
  Class名称|命名|Class名称|命名
  :---------------|:---------------|:---------------|:---------------
  二级|   sub |面包屑|    breadcrumb
  标志    |logo   |广告   |bner(禁用banner或ad)
  登陆    |login  |注册   |register/reg
  搜索    |search |加入   |join
  状态    |status |按钮   |btn
  滚动    |scroll |标签页 |tab
  文章列表    |list|  短消息| msg/message
  当前的  |current    |提示小技巧 |tips
  图标    |icon|  注释|   note
  指南    |guide  |服务   |service
  热点    |hot    |新闻   |news
  下载    |download   |投票   |vote
  合作伙伴    |partner    |友情链接   |link
  版权|   copyright|  演示|   demo
  下拉框  |select |摘要   |summary
  翻页    |pages| 主题风格|   themes
  设置    |set    |成功|  suc
  按钮    |btn|   文本|   txt
  颜色    |color/c|   背景    |bg
  边框    |border/bor|    居中|   center
  上  |top/t  |下|    bottom/b
  左  |left/l |右 |right/r
  添加    |add    |删除   |del
  间隔    |sp|    段落    |p
  弹出层  |pop    |公共   |global/gb
  操作|   op  |密码   |pwd
  透明    |tran|  信息    |info
  重点    |hit    |预览   |pvw
  单行输入框| input|  首页    |index
  日志    |blog   |相册|  photo
  留言板  |guestbook| 用户|   user
  确认    |confirm    |取消   |cancel
  报错    |error||
  ```

