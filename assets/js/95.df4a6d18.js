(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{341:function(t,_,v){"use strict";v.r(_);var a=v(0),P=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("div",{staticClass:"content"},[v("h1",{attrs:{id:"http"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http","aria-hidden":"true"}},[t._v("#")]),t._v(" HTTP")]),t._v(" "),v("p",[t._v("参考 -> https://github.com/jkchao/blog")]),t._v(" "),v("h2",{attrs:{id:"http-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http-2","aria-hidden":"true"}},[t._v("#")]),t._v(" HTTP")]),t._v(" "),v("blockquote",[v("p",[t._v("HTTP 协议，是 TCP/IP 协议的应用层协议。规定了客户端与服务器端的传输规则。")])]),t._v(" "),v("p",[t._v("一般来说，从浏览器输入一个 URL 会执行以下步骤：")]),t._v(" "),v("ul",[v("li",[t._v("浏览器接收 URL，从中取出方案，服务器位置，以及资源路径。")]),t._v(" "),v("li",[t._v("检查缓存，如果资源命中强缓存，则直接读取缓存，不再发起网络请求。直接到最后一步 ，如果没有命中缓存，进行下一步。")]),t._v(" "),v("li",[t._v("如果服务器位置，并不是一个 IP 地址，则需要进行 DNS 域名解析，解析出对应的 ip 地址，如果是 ip 地址，则跳过，直接进行下一步。")]),t._v(" "),v("li",[t._v("通过 IP 地址与端口号建立一条到 Web 服务器的 TCP 连接。")]),t._v(" "),v("li",[t._v("通过这条连接，发送一条请求报文，当为 http 协议时，其中有 HTTP 三次握手，若为 HTTPS，多一个 secureConnection，即 SSL协议握手过程。此后每次解密都多加解密过程。")]),t._v(" "),v("li",[t._v("服务器处理请求， 并返回一个 HTTP 响应报文。")]),t._v(" "),v("li",[t._v("浏览器从服务器读取响应报文。")]),t._v(" "),v("li",[t._v("浏览器关闭连接，HTTP 四次挥手。")]),t._v(" "),v("li",[t._v("浏览器检查 HTTP header 里的状态码，并作出不同的处理方式。")]),t._v(" "),v("li",[t._v("如果是可以缓存的，这个响应则会被存储起来。")]),t._v(" "),v("li",[t._v("浏览器处理该响应")])]),t._v(" "),v("h2",{attrs:{id:"tcp-ip-基本概念"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tcp-ip-基本概念","aria-hidden":"true"}},[t._v("#")]),t._v(" TCP / IP 基本概念")]),t._v(" "),v("p",[t._v("参考 -> https://github.com/jkchao/blog/issues/14")]),t._v(" "),v("blockquote",[v("p",[t._v("在我大万维网世界中，TCP就像汽车，我们用TCP来运输数据，它很可靠，从来不会发生丢件少件的现象。但是如果路上跑的全是看起来一模一样的汽车，那这个世界看起来是一团混乱，送急件的汽车可能被前面满载货物的汽车拦堵在路上，整个交通系统一定会瘫痪。为了避免这种情况发生，交通规则HTTP诞生了。HTTP给汽车运输设定了好几个服务类别，有GET, POST, PUT, DELETE等等，HTTP规定，当执行GET请求的时候，要给汽车贴上GET的标签（设置method为GET），而且要求把传送的数据放在车顶上（url中）以方便记录。如果是POST请求，就要在车上贴上POST的标签，并把货物放在车厢里。当然，你也可以在GET的时候往车厢内偷偷藏点货物，但是这是很不光彩；也可以在POST的时候在车顶上也放一些数据，让人觉得傻乎乎的。HTTP只是个行为准则，而TCP才是GET和POST怎么实现的基本。")])]),t._v(" "),v("p",[t._v("简单说 TCP 是运输数据的汽车，HTTP 是交通规则， methods 是汽车的标签类型 用于标志的汽车如何运输货物，运输公司则是 浏览器（（大多数）浏览器通常都会限制url长度在2K个字节，而（大多数）服务器最多处理64K大小的url）")]),t._v(" "),v("p",[t._v("世界上几乎所有的 HTTP 协议都是由 TCP / IP 协议来承载的。它是互联网相关的各类协议族的总称（通常所说的规则，就是协议）。")]),t._v(" "),v("p",[t._v("从输入的 URL 里我们可以从中获取服务器端的 IP 地址与端口号，建立一条 TCP 连接。建立连接之后，在客户端和服务器端之间交换的报文，不会丢失，受损，或者失序。分层")]),t._v(" "),v("p",[t._v("TCP / IP 协议族里最重要的特征就是分层，每一层都靠下一层的支持。TCP / IP 按层次分，分为四层：应用层、传输层、网络层、数据链路层。HTTPS 就是在应用层与传输层之间多了一层安全层。")]),t._v(" "),v("p",[v("img",{attrs:{src:"/about-notes/media/layered.png",alt:""}})]),t._v(" "),v("h3",{attrs:{id:"应用层"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#应用层","aria-hidden":"true"}},[t._v("#")]),t._v(" 应用层")]),t._v(" "),v("p",[t._v("应用层决定了向用户提供应用服务时通信的活动（规定传输的数据格式）。")]),t._v(" "),v("p",[t._v("比如 FTP 文件传输协议，DNS 域名解析系统，HTTP 超文本传输协议也位于此层。")]),t._v(" "),v("h3",{attrs:{id:"传输层"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#传输层","aria-hidden":"true"}},[t._v("#")]),t._v(" 传输层")]),t._v(" "),v("p",[t._v("传输层提供处于网络连接中的两台计算机之间的数据传输，在传输层有两个不同的协议，TCP 和 UDP 协议。")]),t._v(" "),v("h3",{attrs:{id:"网络层"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#网络层","aria-hidden":"true"}},[t._v("#")]),t._v(" 网络层")]),t._v(" "),v("p",[t._v("网络层，用来处理网络上流动的数据包，数据包是网络传输的最小数据单位，该层规定了通过怎样的路径到达对方计算机，并把数据包传送给对方。")]),t._v(" "),v("h3",{attrs:{id:"链路层"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#链路层","aria-hidden":"true"}},[t._v("#")]),t._v(" 链路层")]),t._v(" "),v("p",[t._v("用来处理网络的硬件部分。如操作系统，设备驱动等。")]),t._v(" "),v("h2",{attrs:{id:"tcp-和-udp-的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tcp-和-udp-的区别","aria-hidden":"true"}},[t._v("#")]),t._v(" TCP 和 UDP 的区别")]),t._v(" "),v("p",[t._v("1、TCP是面向链接的，虽然说网络的不安全不稳定特性决定了多少次握手都不能保证连接的可靠性，但TCP的三次握手在最低限度上(实际上也很大程度上保证了)保证了连接的可靠性; 而UDP不是面向连接的，UDP传送数据前并不与对方建立连接，对接收到的数据也不发送确认信号，发送端不知道数据是否会正确接收，当然也不用重发，所以说UDP是无连接的、不可靠的一种数据传输协议。")]),t._v(" "),v("p",[t._v("2、也正由于1所说的特点，使得UDP的开销更小数据传输速率更高，因为不必进行收发数据的确认，所以UDP的实时性更好。")]),t._v(" "),v("p",[t._v("即使是这样，UDP因为在底层协议的封装上没有采用类似TCP的“三次握手”而实现了TCP所无法达到的传输效率。")]),t._v(" "),v("p",[t._v("即使是这样，UDP因为在底层协议的封装上没有采用类似TCP的“三次握手”而实现了TCP所无法达到的传输效率。")]),t._v(" "),v("p",[t._v("链接：https://www.zhihu.com/question/39541968/answer/81841947")]),t._v(" "),v("p",[t._v("TCP是面向流字符的，数据流间无边界；UDP是面向分组的，分组间有明确的边界。")]),t._v(" "),v("p",[t._v("对于TCP，发送一串数字（1，2，3，4，5），接收时有可能变成两次（1，2）和（2，4，5），或者变成任意接收方式，协议栈只保证接收顺序正确；UDP发送一个分组，接收方或者接收完全失败，如果成功整个分组都会接收到。")]),t._v(" "),v("p",[t._v("1、TCP是面向连接的，UDP是无连接的。类比于打电话和发电报的关系。")]),t._v(" "),v("p",[t._v("TCP建立一个连接需要3次握手IP数据包，断开连接需要4次握手。另外断开连接时发起方可能进入TIME_WAIT状态长达数分钟（视系统设置，windows一般为120秒），在此状态下连接（端口）无法被释放。")]),t._v(" "),v("p",[t._v("2、TCP是可靠的，通过数据校验保证发送和接收到的数据是一致的；UDP是不可靠的，发送一串数字分组（1，2，3）可能接收到时就变成（1，0，0）了，做UDP连接时需要自己做数据校验。")]),t._v(" "),v("p",[t._v("3、TCP数据是有序的，以什么顺序发送的数据，接收时同样会按照此顺序；UDP是无序的，发出（1，2，3），有可能按照（1，3，2）的顺序收到。应用程序必须自己做分组排序。")]),t._v(" "),v("p",[t._v("4、TCP因为建立连接、释放连接、IP分组校验排序等需要额外工作，速度较UDP慢许多。TCP适合传输数据，UDP适合流媒体。")]),t._v(" "),v("p",[t._v("5、UDP比TCP更容易穿越路由器防火墙。")]),t._v(" "),v("p",[t._v("udp处理数据报，tcp处理网络流。")])])}],!1,null,null,null);P.options.__file="HTTP.md";_.default=P.exports}}]);