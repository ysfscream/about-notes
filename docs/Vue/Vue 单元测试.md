# Vue 单元测试

https://vue-test-utils.vuejs.org/zh/guides/common-tips.html

https://cn.vuejs.org/v2/cookbook/unit-testing-vue-components.html

https://cn.vuejs.org/v2/guide/unit-testing.html

## [为什么要测试？](https://cn.vuejs.org/v2/cookbook/unit-testing-vue-components.html#%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E6%B5%8B%E8%AF%95%EF%BC%9F)

组件的单元测试有很多好处：

- 提供描述组件行为的文档
- 节省手动测试的时间
- 减少研发新特性时产生的 bug
- 改进设计
- 促进重构

自动化测试使得大团队中的开发者可以维护复杂的基础代码。

对于 UI 组件来说，我们不推荐一味追求行级覆盖率，因为它会导致我们过分关注组件的内部实现细节，从而导致琐碎的测试。

取而代之的是，我们推荐把测试撰写为断言你的组件的公共接口，并在一个黑盒内部处理它。一个简单的测试用例将会断言一些输入 (用户的交互或 prop 的改变) 提供给某组件之后是否导致预期结果 (渲染结果或触发自定义事件)。

比如，对于每次点击按钮都会将计数加一的 `Counter` 组件来说，其测试用例将会模拟点击并断言渲染结果会加 1。该测试并没有关注 `Counter` 如何递增数值，而只关注其输入和输出。

该提议的好处在于，即便该组件的内部实现已经随时间发生了改变，只要你的组件的公共接口始终保持一致，测试就可以通过。

单元测试应该：

- 可以快速运行
- 易于理解
- 只测试*一个独立单元的工作*



##### 1.额外的时间花费

即使你愿意花费开发的几分之一的时间去写单元测试，但是一旦功能有变更，就意味着测试逻辑也需要调整。对于一些经常变更的功能来说，这会导致很大的单元测试维护量。 所以我们要权衡好当中的利弊，可以考虑只针对稳定的功能（比如一些公用组件）和核心流程编写单元测试。

##### 2.并非全部代码都能单元测试

如果项目里充斥着颗粒度低，方法间互相耦合的代码，你会发现无法进行单元测试。因为单元测试旨在从代码粒度上实现对应用质量的把握。面对这样的情况，要么重构已有代码，要么放弃单元测试寻求其他测试方法，比如人工测试，e2e测试。

虽然这算是单元测试的一个缺点，但我认为同时也是**优点**，习惯编写单元测试可以促使工程师提高代码的颗粒度，思维更加缜密。

##### 3.无法保证一整个流程的运作

前端是一个非常复杂的测试环境，因为每个浏览器都有差异，需要的数据又依赖于后端。单元测试只能对功能每一个单元进行测试，对于一些依赖api的数据一般只能mock，无法真正的模拟用户实际的使用场景。对于这种情况，建议采用其他测试方法，比如人工测试、e2e测试。


安装Karma+Mocha模块，这个模块依赖比较多，我在遇到了坑，解决问题半天发现缺少了某个模块，在这里全部列出需要的模块

```shell
npm i -D karma karma-webpack phantomjs-prebuilt karma-phantomjs-launcher karma-phantomjs-shim karma-chrome-launcher karma-sourcemap-loader mocha karma-mocha sinon chai sinon-chai karma-sinon-chai karma-spec-reporter karma-coverage
---------------------
原文：https://blog.csdn.net/u014196765/article/details/79818042
版权声明：本文为博主原创文章，转载请附上博文链接！

```