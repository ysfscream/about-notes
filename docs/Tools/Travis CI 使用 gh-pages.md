# Travis CI 使用 gh-pages

[https://github.com/tschaub/gh-pages/issues/22](https://github.com/tschaub/gh-pages/issues/22)

[https://neveryu.github.io/2019/02/05/travis-ci/](https://neveryu.github.io/2019/02/05/travis-ci/)

[https://juejin.im/post/5d0715f6f265da1ba56b1e01](https://juejin.im/post/5d0715f6f265da1ba56b1e01)

`$GITHUB_TOKEN` 在 travis 中设置的环境变量

```shell
yarn docs:build && gh-pages --repo https://$GITHUB_TOKEN@github.com/ysfscream/about-notes.git -d dist
```
