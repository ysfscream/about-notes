# Webpack 简单概念

https://www.webpackjs.com/concepts/

*webpack* 是一个现代 JavaScript 应用程序的模块打包器(*module bundler*)

之前的代码都是通过外引的方式引入*HTML*中  打包就是将这些各类文件按功能需求打包成不同的模块 通过配置*webpack.config.js*(默认导出*module.export*)入口*entry* 出口*output module*里的*loader*配置打包其他文件

Webpack 本身只能处理原生的 JavaScript 模块，但是 loader 转换器可以将各种类型的资源转换成 JavaScript 模块。这样，任何资源都可以成为 Webpack 可以处理的模块。

## 入口（entry）

**入口起点(entry point)**指示 webpack 应该使用哪个模块，来作为构建其内部*依赖图*的开始。进入入口起点后，webpack 会找出有哪些模块和库是入口起点（直接和间接）依赖的。

一个 `entry` 配置的最简单例子：

**webpack.config.js**

```js
module.exports = {
  entry: './path/to/my/entry/file.js'
};
```

## 出口（output）

**output** 属性告诉 webpack 在哪里输出它所创建的 *bundles*，以及如何命名这些文件，默认值为 `./dist`。基本上，整个应用程序结构，都会被编译到你指定的输出路径的文件夹中。你可以通过在配置中指定一个 `output`字段，来配置这些处理过程：

**webpack.config.js**

```javascript
const path = require('path');

module.exports = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js' // [name].js 使用占位符(substitutions)来确保每个文件具有唯一的名称, name 为文件名，模块名称。[name].[chunkhash].js chunk 内容的 hash。
  }
};
```

## loader

*loader* 让 webpack 能够去处理那些非 JavaScript 文件（webpack 自身只理解 JavaScript）。loader 可以将所有类型的文件转换为 webpack 能够处理的有效[模块](https://www.webpackjs.com/concepts/modules)，然后你就可以利用 webpack 的打包能力，对它们进行处理。

webpack loader 将所有类型的文件，转换为应用程序的依赖图（和最终的 bundle）可以直接引用的模块。

在更高层面，在 webpack 的配置中 **loader** 有两个目标：

1. `test` 属性，用于标识出应该被对应的 loader 进行转换的某个或某些文件。
2. `use` 属性，表示进行转换时，应该使用哪个 loader。

**webpack.config.js**

```javascript
const path = require('path');

const config = {
  output: {
    filename: 'my-first-webpack.bundle.js'
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  }
};

module.exports = config;
```

以上配置中，对一个单独的 module 对象定义了 `rules` 属性，里面包含两个必须属性：`test` 和 `use`。这告诉 webpack 编译器(compiler) 如下信息：

> “嘿，webpack 编译器，当你碰到「在 `require()`/`import` 语句中被解析为 '.txt' 的路径」时，在你对它打包之前，先**使用** `raw-loader` 转换一下。”

[`module.rules`](https://www.webpackjs.com/configuration/module/#module-rules) 允许你在 webpack 配置中指定多个 loader。 这是展示 loader 的一种简明方式，并且有助于使代码变得简洁。同时让你对各个 loader 有个全局概览：

```js
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  }
```

## 插件（plugins）

loader 被用于转换某些类型的模块，而插件则可以用于执行范围更广的任务。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量。[插件接口](https://www.webpackjs.com/api/plugins)功能极其强大，可以用来处理各种各样的任务。

想要使用一个插件，你只需要 `require()` 它，然后把它添加到 `plugins` 数组中。多数插件可以通过选项(option)自定义。你也可以在一个配置文件中因为不同目的而多次使用同一个插件，这时需要通过使用 `new` 操作符来创建它的一个实例。

**webpack.config.js**

```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const webpack = require('webpack'); // 用于访问内置插件
const CleanWebpackPlugin = require('clean-webpack-plugin')

const config = {
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({template: './src/index.html'}) // HtmlWebpackPlugin 会默认生成 index.html 文件。这就是说，它会用新生成的 index.html 文件，把我们的原来的替换
  	new CleanWebpackPlugin(['dist']) //	每次构建前清理 /dist 文件夹，因此只会生成用到的文件。
  ]
};

module.exports = config;
```

webpack **插件**是一个具有 [`apply`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) 属性的 JavaScript 对象。`apply` 属性会被 webpack compiler 调用，并且 compiler 对象可在**整个**编译生命周期访问。

**ConsoleLogOnBuildWebpackPlugin.js**

```javascript
const pluginName = 'ConsoleLogOnBuildWebpackPlugin';

class ConsoleLogOnBuildWebpackPlugin {
    apply(compiler) {
        compiler.hooks.run.tap(pluginName, compilation => {
            console.log("webpack 构建过程开始！");
        });
    }
}
```

compiler hook 的 tap 方法的第一个参数，应该是驼峰式命名的插件名称。建议为此使用一个常量，以便它可以在所有 hook 中复用。

## 模式（mode)

提供 `mode` 配置选项，告知 webpack 使用相应模式的内置优化。

### mode: development

```diff
// webpack.development.config.js
module.exports = {
+ mode: 'development'
- plugins: [
-   new webpack.NamedModulesPlugin(),
-   new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("development") }),
- ]
}
```

### mode: production

```diff
// webpack.production.config.js
module.exports = {
+  mode: 'production',
-  plugins: [
-    new UglifyJsPlugin(/* ... */),
-    new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("production") }),
-    new webpack.optimize.ModuleConcatenationPlugin(),
-    new webpack.NoEmitOnErrorsPlugin()
-  ]
}
```

## webpack 模块

对比 [Node.js 模块](https://nodejs.org/api/modules.html)，webpack _模块_能够以各种方式表达它们的依赖关系，几个例子如下：

- [ES2015 `import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) 语句
- [CommonJS](http://www.commonjs.org/specs/modules/1.0/) `require()` 语句
- [AMD](https://github.com/amdjs/amdjs-api/blob/master/AMD.md) `define` 和 `require` 语句
- css/sass/less 文件中的 [`@import` 语句](https://developer.mozilla.org/en-US/docs/Web/CSS/@import)。
- 样式(`url(...)`)或 HTML 文件(`<img src=...>`)中的图片链接(image url)

## 模块解析（module resolution）

resolver 是一个库(library)，用于帮助找到模块的绝对路径。一个模块可以作为另一个模块的依赖模块，然后被后者引用，如下：

```js
import foo from 'path/to/module'
// 或者
require('path/to/module')
```

所依赖的模块可以是来自应用程序代码或第三方的库(library)。resolver 帮助 webpack 找到 bundle 中需要引入的模块代码，这些代码在包含在每个 `require`/`import` 语句中。 当打包模块时，`webpack` 使用 [enhanced-resolve](https://github.com/webpack/enhanced-resolve) 来解析文件路径。

解析器(resolver)将检查路径是否指向文件或目录。如果路径指向一个文件：

- 如果路径具有文件扩展名，则被直接将文件打包。
- 否则，将使用 [`resolve.extensions`] 选项作为文件扩展名来解析，此选项告诉解析器在解析中能够接受哪些扩展名（例如 `.js`, `.jsx`）。

```js
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
resolve: {
    extensions: ['.js', '.vue', '.json'], // 该文件的文件名不用输入文件名后缀
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'), // @代表绝对路径的开头
    }
  },
```

## 构建目标（targets）

因为服务器和浏览器代码都可以用 JavaScript 编写，所以 webpack 提供了多种*构建目标(target)*，你可以在你的 webpack [配置](https://www.webpackjs.com/configuration)中设置

要设置 `target` 属性，只需要在你的 webpack 配置中设置 target 的值。

**webpack.config.js**

```javascript
module.exports = {
  target: 'node'
};
```

在上面例子中，使用 `node` webpack 会编译为用于「类 Node.js」环境（使用 Node.js 的 `require` ，而不是使用任意内置模块（如 `fs` 或 `path`）来加载 chunk）。

每个*target*都有各种部署(deployment)/环境(environment)特定的附加项，以支持满足其需求。查看[target 的可用值](https://www.webpackjs.com/configuration/target)。

多个 Target，尽管 webpack 不支持向 `target` 传入多个字符串，你可以通过打包两份分离的配置来创建同构的库：

**webpack.config.js**

```javascript
var path = require('path');
var serverConfig = {
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'lib.node.js'
  }
  //…
};

var clientConfig = {
  target: 'web', // <=== 默认是 'web'，可省略
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'lib.js'
  }
  //…
};

module.exports = [ serverConfig, clientConfig ];
```

上面的例子将在你的 `dist` 文件夹下创建 `lib.js` 和 `lib.node.js` 文件。



## 配置

### 基本

**webpack.config.js**

```javascript
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({template: './index.html'}), // HtmlWebpackPlugin 会默认生成 index.html 文件。这就是说，它会用新生成的 index.html 文件，把我们的原来的替换
    new CleanWebpackPlugin(['dist']) //	每次构建前清理 /dist 文件夹，因此只会生成用到的文件。
    new webpack.NamedModulesPlugin(), // 添加了 NamedModulesPlugin，以便更容易查看要修补(patch)的依赖
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  devtool: 'eval-source-map', //使用 source map 将编译后的代码映射回原始源代码，出现错误可以精准指向源码，而不是打包后的 bundle 文件
  devServer: {
    hot: true, // 启用 HMR 就是更新 webpack-dev-server 的配置
    port: 8080, // 默认 8080 可自定义
	contentBase: './dist'
  } // 使用 webpack-dev-server 提供了一个简单的 web 服务器，并且能够实时重新加载(live reloading)。让我们设置以下 以上配置告知 webpack-dev-server，在 localhost:8080 下建立服务，将 dist 目录下的文件，作为可访问文件。package.json 添加脚本 "webpack-dev-server --open" 即可打开服务。
}
```

从 webpack 4 开始，也可以通过 `"mode"` 配置选项轻松切换到压缩输出，只需设置为 `"production"`。

注意，也可以在命令行接口中使用 `--optimize-minimize` 标记，来使用 `UglifyJSPlugin`。

**webpack.config.js**

```diff
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
+ mode: "production"
};
```

package.json

```json
"devDependencies": {
    "clean-webpack-plugin": "^0.1.19",
    "css-loader": "^1.0.0",
    "express": "^4.16.3",
    "file-loader": "^2.0.0",
    "html-webpack-plugin": "^3.2.0",
    "style-loader": "^0.23.0",
    "webpack": "^4.19.1",
    "webpack-cli": "^3.1.0",
    "webpack-dev-middleware": "^3.4.0",
    "webpack-dev-server": "^3.1.9",
    "webpack-merge": "^4.1.4"
},
```





*开发环境(development)*和*生产环境(production)*的构建目标差异很大。在*开发环境*中，我们需要具有强大的、具有实时重新加载(live reloading)或热模块替换(hot module replacement)能力的 source map 和 localhost server。而在*生产环境*中，我们的目标则转向于关注更小的 bundle，更轻量的 source map，以及更优化的资源，以改善加载时间。由于要遵循逻辑分离，我们通常建议为每个环境编写**彼此独立的 webpack 配置**。

虽然，以上我们将*生产环境*和*开发环境*做了略微区分，但是，请注意，我们还是会遵循不重复原则(Don't repeat yourself - DRY)，保留一个“通用”配置。为了将这些配置合并在一起，我们将使用一个名为 [`webpack-merge`](https://github.com/survivejs/webpack-merge) 的工具。通过“通用”配置，我们不必在环境特定(environment-specific)的配置中重复代码。

### 通用

webpack.common.js

```js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].[chunk].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new CleanWebpackPlugin(['./dist'])
  ],
}
```

### 开发模式

webpack.dev.js

```js
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }
        ]
    }
})
```

### 生产环境

webpack.prod.js

```js
const webpack = require('webpack');
const merge = require('webpack-merge')
const uglifyJSPlugin = require('uglifyjs-webpack-plugin')
const common = require('webpack-merge')

module.exports = merge(common, {
  devtool: 'source-map', // 追踪源码错误，避免在生产中使用 inline-*** 和 eval-***，因为它们可以增加 bundle 大小，并降低整体性能。
  plugins: [
  	new uglifyJSPlugin({
		sourceMap: true
  	}),
    new webpack.DefinePlugin({
    	'process.env.NODE_ENV': JSON.stringify('production') // 指定环境，许多 library 将通过与 process.env.NODE_ENV 环境变量关联，以决定 library 中应该引用哪些内容。例如，当不处于生产环境中时，某些 library 为了使调试变得容易，可能会添加额外的日志记录(log)和测试(test)。其实，当使用 process.env.NODE_ENV === 'production' 时，一些 library 可能针对具体用户的环境进行代码优化，从而删除或添加一些重要代码。我们可以使用 webpack 内置的 DefinePlugin 为所有的依赖定义这个变量
    })
  ]
})
```



### 分离 CSS（split css）

`extract-text-webpack-plugin`

```js
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack');
const merge = require('webpack-merge')
const uglifyJSPlugin = require('uglifyjs-webpack-plugin')
const common = require('webpack-merge')

module.exports = merge(common, {
  devtool: 'source-map',
  plugins: [
  	new uglifyJSPlugin({
		sourceMap: true
  	}),
    new webpack.DefinePlugin({
    	'process.env.NODE_ENV': JSON.stringify('production')
    })
    new ExtractTextPlugin({
      filename:  (getPath) => {
      	return getPath('css/[name].[contenthash]css').replace('css/js', 'css');
      },
    }),
  ]
})
```

它会将所有的入口 chunk(entry chunks)中引用的 `*.css`，移动到独立分离的 CSS 文件。因此，你的样式将不再内嵌到 JS bundle 中，而是会放到一个单独的 CSS 文件（即 `styles.css`）当中。 如果你的样式文件大小较大，这会做更快提前加载，因为 CSS bundle 会跟 JS bundle 并行加载。

