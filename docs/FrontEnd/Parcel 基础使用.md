# Parcel 基础使用

https://zh.parceljs.org/

## 服务
serve 命令启用一个开发服务器，且支持 热模块替换 以实现快速开发。当你更改文件时，该服务器将自动重新构建你的应用程序。

parcel index.html
也可以使用 -p \<port number> 选项覆盖默认的端口

## 构建（Build）
build 命令会一次性构建资源，它还启用了压缩功能，并将 NODE_ENV 变量设置为生产环境。详见生产环境

parcel build index.html

## Options
设置输出目录
默认为："dist"

可用于：serve，watch，build

parcel build entry.js --out-dir build/output
或者
parcel build entry.js -d build/output
root
- build
- - output
- - - entry.js

parcel 运用时 postcssrc 要把 modules 删除 才能显示 id class 选择器修改的样式
