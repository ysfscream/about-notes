# REST API 规范

> RESTful api -> **URL定位资源，用HTTP动词（GET,POST,DELETE,DETC）描述操作。**
>
> REST -- REpresentational State Transfer 直接翻译：表现层状态转移

[参考1](http://www.ruanyifeng.com/blog/2014/05/restful_api.html)

[参考2](https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/0014735914606943e2866257aa644b4bdfe01d26d29960b000)

[参考3](https://github.com/jasonGeng88/blog/blob/master/201706/rest-api.md)

[参考4](https://hacpai.com/article/1552958044343)

## 协议

API与用户的通信协议，总是使用[HTTPs协议](http://www.ruanyifeng.com/blog/2014/02/ssl_tls.html)。

## 域名

应该尽量将API部署在专用域名之下。

```text
https://api.example.com
```

如果确定API很简单，不会有进一步扩展，可以考虑放在主域名下。

> `https://example.org/api/`

## 版本（Versioning）

应该将API的版本号放入URL。

> `https://api.example.com/v1/`

## 路径（Endpoint）

路径又称"终点"（endpoint），表示API的具体网址。

在RESTful架构中，每个网址代表一种资源（resource），所以网址中不能有动词，只能有名词，而且所用的名词往往与数据库的表格名对应。一般来说，数据库中的表都是同种记录的"集合"（collection），所以API中的名词也应该使用复数。

举例来说，有一个API提供动物园（zoo）的信息，还包括各种动物和雇员的信息，则它的路径应该设计成下面这样。

> `https://api.example.com/v1/zoos`
> `https://api.example.com/v1/animals`
> `https://api.example.com/v1/employees`

## 过滤信息（Filtering）

如果记录数量很多，服务器不可能都将它们返回给用户。API应该提供参数，过滤返回结果。

下面是一些常见的参数。

> - ?limit=10：指定返回记录的数量
> - ?offset=10：指定返回记录的开始位置。
> - ?page=2&per_page=100：指定第几页，以及每页的记录数。
> - ?sortby=name&order=asc：指定返回结果按照哪个属性排序，以及排序顺序。
> - ?animal_type_id=1：指定筛选条件

## 状态码（Status Codes）

服务器向用户返回的状态码和提示信息，常见的有以下一些（方括号中是该状态码对应的HTTP动词）。

> - 200 OK - [GET]：服务器成功返回用户请求的数据，该操作是幂等的（Idempotent）。
> - 201 CREATED - [POST/PUT/PATCH]：用户新建或修改数据成功。
> - 202 Accepted - [*]：表示一个请求已经进入后台排队（异步任务）
> - 204 NO CONTENT - [DELETE]：用户删除数据成功。
> - 400 INVALID REQUEST - [POST/PUT/PATCH]：用户发出的请求有错误，服务器没有进行新建或修改数据的操作，该操作是幂等的。
> - 401 Unauthorized - [*]：表示用户没有权限（令牌、用户名、密码错误）。
> - 403 Forbidden - [*] 表示用户得到授权（与401错误相对），但是访问是被禁止的。
> - 404 NOT FOUND - [*]：用户发出的请求针对的是不存在的记录，服务器没有进行操作，该操作是幂等的。
> - 406 Not Acceptable - [GET]：用户请求的格式不可得（比如用户请求JSON格式，但是只有XML格式）。
> - 410 Gone -[GET]：用户请求的资源被永久删除，且不会再得到的。
> - 422 Unprocesable entity - [POST/PUT/PATCH] 当创建一个对象时，发生一个验证错误。
> - 500 INTERNAL SERVER ERROR - [*]：服务器发生错误，用户将无法判断发出的请求是否成功。

## 返回结果

针对不同操作，服务器向用户返回的结果应该符合以下规范。

> - GET /collection：返回资源对象的列表（数组）
> - GET /collection/resource：返回单个资源对象
> - POST /collection：返回新生成的资源对象
> - PUT /collection/resource：返回完整的资源对象
> - PATCH /collection/resource：返回完整的资源对象
> - DELETE /collection/resource：返回一个空文档

编写REST API，实际上就是编写处理HTTP请求的async函数，不过，REST请求和普通的HTTP请求有几个特殊的地方：

1. REST请求仍然是标准的HTTP请求，但是，除了GET请求外，POST、PUT等请求的body是JSON数据格式，请求的`Content-Type`为`application/json`；
2. REST响应返回的结果是JSON数据格式，因此，响应的`Content-Type`也是`application/json`。

`/static/`开头的URL是静态资源文件，类似的，`/api/`开头的URL就是REST AP

**API 的参数永远是一个字符串**:

> `200 OK` `GET`, `PUT` 或 `POST` 请求响应成功.
> `201 Created` 标识一个新实例创建成功。当创建一个新的实例，请使用`POST`方法并返回`201`状态码。
> `304 Not Modified` 发现资源已经缓存在本地，浏览器会自动减少请求次数。
> `400 Bad Request` 请求未被处理，因为服务器不能理解客户端是要什么。
> `401 Unauthorized` 因为请求缺少有效的凭据，应该使用所需的凭据重新发起请求。
> `403 Forbidden` 意味着服务器理解本次请求，但拒绝授权。
> `404 Not Found` 表示未找到请求的资源。
> `500 Internal Server Error` 表示请求本身是有效，但由于某些意外情况，服务器无法实现，服务器发生了故障。
