# Js polyfill

> Polyfill你可以理解为“腻子”，就是装修的时候，可以把缺损的地方填充抹平。

举个例子，html5的storage(session,local), 不同浏览器，不同版本，有些支持，有些不支持。
我们又想使用这个特性，怎么办？
有些人就写对应的Polyfill（Polyfill有很多），帮你把这些差异化抹平，不支持的变得支持了（简单来讲，写些代码判断当前浏览器有没有这个功能，没有的话，就写一些支持的补丁代码）。
你只需要把需要的Polyfill引入到你的程序里，就可以了。

链接：[https://juejin.im/post/5a579bc7f265da3e38496ba1](https://juejin.im/post/5a579bc7f265da3e38496ba1)
