# 阿里 iconfont symbol 使用

- 进入阿里图标库Iconfont：http://www.iconfont.cn/，并登录

- 选择需要的图标后加入购物车，并在购物车里将图标添加至项目

- 获取项目下面生成的symbol代码或将项目下载至本地，并引入到html文件

  ```html
  <script type="text/javascript" src="生成的js文件"></script>
  ```

- 加入通用css代码（引入一次就行）

  ```css
     .icon {
         width: 11em; height: 11em;
         vertical-align: -0.15em;
         fill: currentColor;
         overflow: hidden;
      }
  ```

- 使用挑选相应图标并获取类名，应用于页面：

  ```html
  <svg class="icon" aria-hidden="true">
  	<use xlink:href="#icon-learning1"></use>
  </svg>
  ```

