# Flutter 设定镜像配置

如果你在国内使用 Flutter，那么你可能需要找一个与官方同步的可信的镜像站点， 帮助你的 Flutter 命令行工具到该镜像站点下载其所需的资源。 你需要为此设置两个环境变量：“PUB_HOSTED_URL”和“FLUTTER_STORAGE_BASE_URL”， 然后再运行 Flutter 命令行工具。

以 macOS 或者与 Linux 相近的系统为例，这里有以下步骤帮助你设定镜像。 在系统终端里执行如下命令设定环境变量，并通过 GitHub 检出 Flutter SDK：

*content_copy*

```bash
$ export PUB_HOSTED_URL=https://pub.flutter-io.cn
$ export FLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn
$ git clone -b dev https://github.com/flutter/flutter.git
$ export PATH="$PWD/flutter/bin:$PATH"
$ cd ./flutter
$ flutter doctor
```
