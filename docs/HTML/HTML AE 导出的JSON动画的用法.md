# HTML AE 导出的JSON动画的用法

HTML player installation

```shell
# with npm
npm install lottie-web

# with bower
bower install bodymovin
```

可以使用 bodymovin 的 cdn: [cdnjs.com/libraries/bodymovin](https://cdnjs.com/libraries/bodymovin) 或者直接从AE插件点击get Player中获取

Demo

[基础实现](https://codepen.io/airnan/project/editor/ZeNONO/) 

例子

[codepen.](http://codepen.io/collection/nVYWZR/) 



HTML template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Bodymovin Demo</title>
    <script src="bodymovin.js"></script>
</head>
<body>
    <div id="animation"></div>
    <script>
        bodymovin.loadAnimation({
            path:'data.json',   //json文件路径
            loop:true,
            autoplay:true,
            renderer:'canvas',  //渲染方式，有"html"、"canvas"和"svg"三种
            container:document.getElementById('animation')
        });
       	//alertnative
        lottie.loadAnimation({
          container: element, // the dom element that will contain the animation
          renderer: 'svg',
          loop: true,
          autoplay: true,
          path: 'data.json' // the path to the animation json
        });
        //bodymovin.js的完整api文档见GitHub项目首页(https://github.com/bodymovin/bodymovin)
    </script>
</body>
</html>
```



