# webpack file-loader

Instructs webpack to emit the required object as file and to return its public URL

```javascript
{
  test: /\.(png|jpg|gif)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        // 文件的输出路径，相对于 webpack 的 output
        outputPath: '../img',
      },
    },
  ],
},
```
