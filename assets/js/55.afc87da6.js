(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{280:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"docker-安装-mongodb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-安装-mongodb","aria-hidden":"true"}},[t._v("#")]),t._v(" Docker 安装 mongodb")]),t._v(" "),a("p",[t._v("https://brickyang.github.io/2017/03/15/%E5%88%A9%E7%94%A8-Docker-%E8%BF%90%E8%A1%8C-MongoDB/")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("docker pull mongo 下拉官方镜像")])]),t._v(" "),a("li",[a("h2",{attrs:{id:"运行-mongo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行-mongo","aria-hidden":"true"}},[t._v("#")]),t._v(" 运行 mongo")]),t._v(" "),a("p",[t._v("这里我们直接使用官方的 mong 镜像。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("docker run --name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("your-name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" -p 27017:27017 -v "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$PWD")]),t._v("/yushifan/data/db:/data/db -d mongo --auth\n")])])]),a("p",[a("code",[t._v("—name")]),t._v(" 指定库的名字，如果不指定会使用一串随机字符串。")]),t._v(" "),a("p",[a("code",[t._v("-p 27017:27017")]),t._v(" 官方的镜像已经暴露了 "),a("code",[t._v("27017")]),t._v(" 端口，我们将它映射到主机的端口上。如果你不使用默认端口，将 "),a("code",[t._v(":")]),t._v(" 前面的数字改成自定义端口。")]),t._v(" "),a("p",[a("code",[t._v("-v /data/db:/data/db")]),t._v(" 冒号前面的是主机上的文件路径，将它挂载到库中的文件夹下，实际对文件的读写就会在主机文件上操作。")]),t._v(" "),a("p",[a("code",[t._v("-d")]),t._v(" 在后台运行。")]),t._v(" "),a("p",[a("code",[t._v("mongo:3.4")]),t._v(" 指定镜像版本，默认是 "),a("code",[t._v("latest")]),t._v(" 。建议总是自己指定版本。")]),t._v(" "),a("p",[a("code",[t._v("—auth")]),t._v(" 以 "),a("code",[t._v("auth")]),t._v(" 模式运行 mongo。")]),t._v(" "),a("p",[t._v("然后执行一下 "),a("code",[t._v("docker ps")]),t._v(" 确认一下库已经正常运行起来。")]),t._v(" "),a("p",[t._v("​")]),t._v(" "),a("p",[t._v("使用mongo镜像执行mongo 命令连接到刚启动的容器,主机IP为172.17.0.1")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('runoob@runoob:~/mongo$ docker run -it mongo mongo --host 172.17.0.1\nMongoDB shell version: 3.2.7\nconnecting to: 172.17.0.1:27017/test\nWelcome to the MongoDB shell.\nFor interactive help, type "help".\nFor more comprehensive documentation, see\n  http://docs.mongodb.org/\nQuestions? Try the support group\n  http://groups.google.com/group/mongodb-user\n>\n')])])])])]),t._v(" "),a("h2",{attrs:{id:"新建管理员"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新建管理员","aria-hidden":"true"}},[t._v("#")]),t._v(" 新建管理员")]),t._v(" "),a("p",[t._v("现在我们需要进入 mongo shell 操作：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("docker "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("exec")]),t._v(" -it "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("YOUR-NAME"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" mongo admin\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" db.createUser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" user: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<USER>'")]),t._v(", pwd: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<PASSWORD>'")]),t._v(", roles: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" role: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'root'")]),t._v(", db: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'admin'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nSuccessfully added user: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<USER>"')]),t._v(",\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"roles"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"role"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"root"')]),t._v(",\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"db"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"admin"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("p",[t._v("以后想以管理员身份登入 mongo shell 就可以运行：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("docker "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("exec")]),t._v(" -it "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("YOUR-NAME"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" mongo -u "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("USER"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" -p "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("PASSWORD"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" --authenticationDatabase admin\n")])])]),a("p",[t._v("创建完成后连接数据库需要验证 admin 里面的管理员账户密码 run 时需要 运行—auth 模式")]),t._v(" "),a("p",[t._v("创建的数据库里需要有集合才能被保留")])])}],!1,null,null,null);e.options.__file="Docker 安装 mongodb.md";s.default=e.exports}}]);