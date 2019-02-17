(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{298:function(t,e,i){"use strict";i.r(e);var r=i(0),_=Object(r.a)({},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),i("p",[i("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2014/05/restful_api.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考1"),i("OutboundLink")],1)]),t._v(" "),i("p",[i("a",{attrs:{href:"https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/0014735914606943e2866257aa644b4bdfe01d26d29960b000",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考2"),i("OutboundLink")],1)]),t._v(" "),i("p",[i("a",{attrs:{href:"https://github.com/jasonGeng88/blog/blob/master/201706/rest-api.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考3"),i("OutboundLink")],1)]),t._v(" "),t._m(2),t._v(" "),i("p",[t._v("API与用户的通信协议，总是使用"),i("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2014/02/ssl_tls.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTPs协议"),i("OutboundLink")],1),t._v("。")]),t._v(" "),t._m(3),t._v(" "),i("p",[t._v("应该尽量将API部署在专用域名之下。")]),t._v(" "),t._m(4),t._v(" "),i("p",[t._v("如果确定API很简单，不会有进一步扩展，可以考虑放在主域名下。")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),i("p",[t._v("应该将API的版本号放入URL。")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),i("p",[t._v('路径又称"终点"（endpoint），表示API的具体网址。')]),t._v(" "),i("p",[t._v('在RESTful架构中，每个网址代表一种资源（resource），所以网址中不能有动词，只能有名词，而且所用的名词往往与数据库的表格名对应。一般来说，数据库中的表都是同种记录的"集合"（collection），所以API中的名词也应该使用复数。')]),t._v(" "),i("p",[t._v("举例来说，有一个API提供动物园（zoo）的信息，还包括各种动物和雇员的信息，则它的路径应该设计成下面这样。")]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),i("p",[t._v("如果记录数量很多，服务器不可能都将它们返回给用户。API应该提供参数，过滤返回结果。")]),t._v(" "),i("p",[t._v("下面是一些常见的参数。")]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),i("p",[t._v("服务器向用户返回的状态码和提示信息，常见的有以下一些（方括号中是该状态码对应的HTTP动词）。")]),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),i("p",[t._v("针对不同操作，服务器向用户返回的结果应该符合以下规范。")]),t._v(" "),t._m(15),t._v(" "),i("p",[t._v("编写REST API，实际上就是编写处理HTTP请求的async函数，不过，REST请求和普通的HTTP请求有几个特殊的地方：")]),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"rest-api-规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rest-api-规范","aria-hidden":"true"}},[this._v("#")]),this._v(" REST API 规范")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("RESTful api -> "),e("strong",[this._v("URL定位资源，用HTTP动词（GET,POST,DELETE,DETC）描述操作。")])]),this._v(" "),e("p",[this._v("REST -- REpresentational State Transfer 直接翻译：表现层状态转移")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"协议"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#协议","aria-hidden":"true"}},[this._v("#")]),this._v(" 协议")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"域名"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#域名","aria-hidden":"true"}},[this._v("#")]),this._v(" 域名")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("https://api.example.com\n\n")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("https://example.org/api/\n\n")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"版本（versioning）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#版本（versioning）","aria-hidden":"true"}},[this._v("#")]),this._v(" 版本（Versioning）")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("https://api.example.com/v1/\n")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"路径（endpoint）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#路径（endpoint）","aria-hidden":"true"}},[this._v("#")]),this._v(" 路径（Endpoint）")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("ul",[e("li",[this._v("https://api.example.com/v1/zoos")]),this._v(" "),e("li",[this._v("https://api.example.com/v1/animals")]),this._v(" "),e("li",[this._v("https://api.example.com/v1/employees")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"过滤信息（filtering）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#过滤信息（filtering）","aria-hidden":"true"}},[this._v("#")]),this._v(" 过滤信息（Filtering）")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("blockquote",[i("ul",[i("li",[t._v("?limit=10：指定返回记录的数量")]),t._v(" "),i("li",[t._v("?offset=10：指定返回记录的开始位置。")]),t._v(" "),i("li",[t._v("?page=2&per_page=100：指定第几页，以及每页的记录数。")]),t._v(" "),i("li",[t._v("?sortby=name&order=asc：指定返回结果按照哪个属性排序，以及排序顺序。")]),t._v(" "),i("li",[t._v("?animal_type_id=1：指定筛选条件")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"状态码（status-codes）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#状态码（status-codes）","aria-hidden":"true"}},[this._v("#")]),this._v(" 状态码（Status Codes）")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("blockquote",[i("ul",[i("li",[t._v("200 OK - [GET]：服务器成功返回用户请求的数据，该操作是幂等的（Idempotent）。")]),t._v(" "),i("li",[t._v("201 CREATED - [POST/PUT/PATCH]：用户新建或修改数据成功。")]),t._v(" "),i("li",[t._v("202 Accepted - [*]：表示一个请求已经进入后台排队（异步任务）")]),t._v(" "),i("li",[t._v("204 NO CONTENT - [DELETE]：用户删除数据成功。")]),t._v(" "),i("li",[t._v("400 INVALID REQUEST - [POST/PUT/PATCH]：用户发出的请求有错误，服务器没有进行新建或修改数据的操作，该操作是幂等的。")]),t._v(" "),i("li",[t._v("401 Unauthorized - [*]：表示用户没有权限（令牌、用户名、密码错误）。")]),t._v(" "),i("li",[t._v("403 Forbidden - [*] 表示用户得到授权（与401错误相对），但是访问是被禁止的。")]),t._v(" "),i("li",[t._v("404 NOT FOUND - [*]：用户发出的请求针对的是不存在的记录，服务器没有进行操作，该操作是幂等的。")]),t._v(" "),i("li",[t._v("406 Not Acceptable - [GET]：用户请求的格式不可得（比如用户请求JSON格式，但是只有XML格式）。")]),t._v(" "),i("li",[t._v("410 Gone -[GET]：用户请求的资源被永久删除，且不会再得到的。")]),t._v(" "),i("li",[t._v("422 Unprocesable entity - [POST/PUT/PATCH] 当创建一个对象时，发生一个验证错误。")]),t._v(" "),i("li",[t._v("500 INTERNAL SERVER ERROR - [*]：服务器发生错误，用户将无法判断发出的请求是否成功。")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"返回结果"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#返回结果","aria-hidden":"true"}},[this._v("#")]),this._v(" 返回结果")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("blockquote",[i("ul",[i("li",[t._v("GET /collection：返回资源对象的列表（数组）")]),t._v(" "),i("li",[t._v("GET /collection/resource：返回单个资源对象")]),t._v(" "),i("li",[t._v("POST /collection：返回新生成的资源对象")]),t._v(" "),i("li",[t._v("PUT /collection/resource：返回完整的资源对象")]),t._v(" "),i("li",[t._v("PATCH /collection/resource：返回完整的资源对象")]),t._v(" "),i("li",[t._v("DELETE /collection/resource：返回一个空文档")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ol",[i("li",[t._v("REST请求仍然是标准的HTTP请求，但是，除了GET请求外，POST、PUT等请求的body是JSON数据格式，请求的"),i("code",[t._v("Content-Type")]),t._v("为"),i("code",[t._v("application/json")]),t._v("；")]),t._v(" "),i("li",[t._v("REST响应返回的结果是JSON数据格式，因此，响应的"),i("code",[t._v("Content-Type")]),t._v("也是"),i("code",[t._v("application/json")]),t._v("。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("/static/")]),this._v("开头的URL是静态资源文件，类似的，"),e("code",[this._v("/api/")]),this._v("开头的URL就是REST AP")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("API 的参数永远是一个字符串")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("blockquote",[i("p",[i("code",[t._v("200 OK")]),t._v(" "),i("code",[t._v("GET")]),t._v(", "),i("code",[t._v("PUT")]),t._v(" 或 "),i("code",[t._v("POST")]),t._v(" 请求响应成功.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[e("code",[this._v("201 Created")]),this._v(" 标识一个新实例创建成功。当创建一个新的实例，请使用"),e("code",[this._v("POST")]),this._v("方法并返回"),e("code",[this._v("201")]),this._v("状态码。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[e("code",[this._v("304 Not Modified")]),this._v(" 发现资源已经缓存在本地，浏览器会自动减少请求次数。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[e("code",[this._v("400 Bad Request")]),this._v(" 请求未被处理，因为服务器不能理解客户端是要什么。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[e("code",[this._v("401 Unauthorized")]),this._v(" 因为请求缺少有效的凭据，应该使用所需的凭据重新发起请求。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[e("code",[this._v("403 Forbidden")]),this._v(" 意味着服务器理解本次请求，但拒绝授权。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[e("code",[this._v("404 Not Found")]),this._v(" 表示未找到请求的资源。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[e("code",[this._v("500 Internal Server Error")]),this._v(" 表示请求本身是有效，但由于某些意外情况，服务器无法实现，服务器发生了故障。")])])}],!1,null,null,null);_.options.__file="HTTP REST api.md";e.default=_.exports}}]);