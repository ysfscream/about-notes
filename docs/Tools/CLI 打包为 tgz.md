# CLI 打包为 tgz

```shll
# 将 dist 文件夹打包压缩为 dist.tgz
tar -czvf dist.tgz dist/
```

> czf -> create gzip file，意思就是创建一个打包任务，并将打包的每个文件都进行 gzip 压缩，最后输出到 file.tar.gz 文件，参数的顺序不能乱。如果不想压缩，去掉 z 参数就行了；解压，同理。

```shell
tar -xzf file.tar.gz
```

- -f，指定输出的文件地址，如果不指定，打包结果会输出到 stdout 中

- -c 和 -x，前面的是 Create，后者是 Extract

- -z 是 gzip 压缩，tar 核心能力是打包，并非压缩，增加了 -z 参数才是压缩

- -v Verbose，展示详细过程，很多命令都会有这个参数
