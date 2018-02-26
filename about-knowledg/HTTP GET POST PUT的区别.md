# HTTP Post Get Put 的区别

[get 和 post](https://mp.weixin.qq.com/s?__biz=MzI3NzIzMzg3Mw==&amp;mid=100000054&amp;idx=1&amp;sn=71f6c214f3833d9ca20b9f7dcd9d33e4#rd)

[put 和 post](https://qiujun.me/post/diff-between-put-and-post/)



```
GET      获取资源
PUT      更新或创建资源
POST     创建资源
DELETE   删除资源
```



## GET 和 POST

> GET 和 POST 是 HTTP 协议的两种发送请求
>
> 所以 他们的底层都是 TCP/IP



> 在我大万维网世界中，TCP就像汽车，我们用TCP来运输数据，它很可靠，从来不会发生丢件少件的现象。但是如果路上跑的全是看起来一模一样的汽车，那这个世界看起来是一团混乱，送急件的汽车可能被前面满载货物的汽车拦堵在路上，整个交通系统一定会瘫痪。为了避免这种情况发生，交通规则HTTP诞生了。HTTP给汽车运输设定了好几个服务类别，有GET, POST, PUT, DELETE等等，HTTP规定，当执行GET请求的时候，要给汽车贴上GET的标签（设置method为GET），而且要求把传送的数据放在车顶上（url中）以方便记录。如果是POST请求，就要在车上贴上POST的标签，并把货物放在车厢里。当然，你也可以在GET的时候往车厢内偷偷藏点货物，但是这是很不光彩；也可以在POST的时候在车顶上也放一些数据，让人觉得傻乎乎的。HTTP只是个行为准则，而TCP才是GET和POST怎么实现的基本。



简单说 TCP 是运输数据的汽车，HTTP 是交通规则， methods 是汽车的标签类型 用于标志的汽车如何运输货物，运输公司则是 浏览器（（大多数）浏览器通常都会限制url长度在2K个字节，而（大多数）服务器最多处理64K大小的url）



最直观的区别就是 GET把参数包含在 URL 中 POST 通过 request body 传递参数

- GET在浏览器回退时是无害的，而POST会再次提交请求
- GET请求会被浏览器主动cache，而POST不会，除非手动设置。
- GET请求只能进行url编码，而POST支持多种编码方式
- GET请求参数会被完整保留在浏览器历史记录里，而POST中的参数不会被保留
- GET请求在URL中传送的参数是有长度限制的，而POST没有。
- GET比POST更不安全，因为参数直接暴露在URL上，所以不能用来传递敏感信息。



GET和POST还有一个重大区别，简单的说：

GET产生一个TCP数据包；POST产生两个TCP数据包。

 对于GET方式的请求，浏览器会把http header和data一并发送出去，服务器响应200（返回数据）

而对于POST，浏览器先发送header，服务器响应100 continue，浏览器再发送data，服务器响应200 ok（返回数据）。（三次握手）（FireFox 只发送一次）



## PUT 和 POST

#### **什么是幂等**

要理解PUT和POST的区别，还要知道HTTP协议中的一个重要性质，幂等（Idempotence）

HTTP协议中的幂等指的是一个资源无论请求多少次，对他产生的副作用是一样的

- GET操作是安全的，也就是不管操作多少次，资源的状态都不会改变，所以GET也是幂等的
- PUT和DELETE是幂等的，比如我用PUT或者DELETE修改一个资源，不管操作多少次，每次操作后的结果并没有什么不同
- POST操作既不是安全的，也不是幂等的，如果常见的POST重复加载的问题，我们进行了多少次POST的操作，最后就创建了多少个资源，这也是为什么Chrom等浏览器，在刷新POST请求时会有弹窗提示

在不知道资源标志符时用POST创建，也就是POST是作用在一个资源集合上。也就是当只知道被创建的资源的父节点是谁时用POST

```
HTTP POST /uri
```

##### **什么时候用PUT**

在允许客户端指定资源标识符时用PUT创建，也就是PUT是作用在一个特定资源上

```
HTTP PUT /uri/xxx
```

