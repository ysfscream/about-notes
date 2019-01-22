# SEO

> 搜索引擎优化。 是一种方式:利用搜索引擎的规则提高网站在有关搜索引擎内的自然排名。



## meta 标签

可定义关键词、网站描述

```html
< meta name="keywords" content="关键词1，关键词2" />

< meta name="description" content="描述词1，描述词2" />
```



## 语义化标签

一方面是，利用html标签，达到语义化的目的，比如列表使用ul，ol。表格使用table等，不建议什么元素都使用div。

另一方面是尽可能使用html5提供的具有语义化的标签。

对比 

```html
<div class="header"></div>
<div class="main"></div>
<div class="footer"></div>
```

建议写法

```html
<header></header>
<main></main>
<footer></footer>
```



## html嵌套级别不宜过多

这一点就是尽量使html做到扁平化，避免嵌套过多，但是这点相对而言，难度比较大。



## h1 - h6 标签

1. 一个页面建议只出现一个h1标签，而且一般是放在网页log上面使用。
2. h2标签一般用于详情页的主标题。详情页没有logo，标题使用h1。如有副标题，使用h3。
3. h1-h6标签自带权重，如果只为了设置字体大小，或者区分样式，不适合使用h1-h6。

