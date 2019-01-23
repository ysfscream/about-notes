# CSS Flex 布局 

http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html

https://juejin.im/post/58e3a5a0a0bb9f0069fc16bb

flex 的核心的概念就是 **容器** 和 **轴**。容器包括外层的 **父容器** 和内层的 **子容器**，轴包括 **主轴** 和 **交叉轴**，可以说 flex 布局的全部特性都构建在这两个概念上。

## 容器

以下6个属性设置在容器上。

> - flex-direction 属性决定主轴的方向（即项目的排列方向）
> - flex-wrap 如果一条轴线排不下，如何换行。
> - flex-flow `flex-flow`属性是`flex-direction`属性和`flex-wrap`属性的简写形式，默认值为`row nowrap`
> - justify-content 属性定义了项目在主轴上的对齐方式
> - align-items 属性定义项目在交叉轴上如何对齐。即设置子容器
> - align-content 属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用 即设置父级容器

### 父级容器

- 设置子容器沿主轴排列：`justify-content` 属性用于定义如何沿着主轴方向排列子容器。

  值如下：

  > **flex-start**：起始端对齐

  ![img](https://lc-mhke0kuv.cn-n1.lcfile.com/ac1d8c5e7b4a2ba51ca7.png)

  > **flex-end**：末尾段对齐

  ![img](https://lc-mhke0kuv.cn-n1.lcfile.com/9ec9245881c2882a35a6.png)

  > **center**：居中对齐

  ![img](https://lc-mhke0kuv.cn-n1.lcfile.com/476461f1b9604a985046.png)

  > **space-around**：子容器沿主轴均匀分布，位于首尾两端的子容器到父容器的距离是子容器间距的一半。

  ![img](https://lc-mhke0kuv.cn-n1.lcfile.com/63119c88aa64853107a9.png)

  > **space-between**：子容器沿主轴均匀分布，位于首尾两端的子容器与父容器相切。

  ![img](https://lc-mhke0kuv.cn-n1.lcfile.com/495f46fc9c5c0c6d1e65.png)



  - 设置子容器如何沿交叉轴排列：**align-items** 

  > **flex-start**：起始端对齐

  ![img](https://lc-mhke0kuv.cn-n1.lcfile.com/56622862c7831a4d61be.png)

  > **flex-end**：末尾段对齐

  ![img](https://lc-mhke0kuv.cn-n1.lcfile.com/33519955a141be1e713a.png)

  > **center**：居中对齐

  ![img](https://lc-mhke0kuv.cn-n1.lcfile.com/f10513a47130d52f2aa8.png)

  > **baseline**：基线对齐，这里的 `baseline` 默认是指首行文字，即 `first baseline`，所有子容器向基线对齐，交叉轴起点到元素基线距离最大的子容器将会与交叉轴起始端相切以确定基线。

  ![img](https://lc-mhke0kuv.cn-n1.lcfile.com/f78e9f42be9a3f165f8f.png)

  > **stretch**：子容器沿交叉轴方向的尺寸拉伸至与父容器一致。

  ![img](https://lc-mhke0kuv.cn-n1.lcfile.com/160170b3d2022800ffea.png)

  ### 子容器

  - 在主轴上如何伸缩：**flex**

  ![img](https://lc-mhke0kuv.cn-n1.lcfile.com/089d48122453e9fc372c.png)

    子容器是有弹性的（flex 即弹性），它们会自动填充剩余空间，子容器的伸缩比例由 `flex` 属性确定。

    `flex` 的值可以是无单位数字（如：1, 2, 3），也可以是有单位数字（如：15px，30px，60px），还可以是 `none` 关键字。子容器会按照 `flex` 定义的尺寸比例自动伸缩，如果取值为 `none` 则不伸缩。

  - 单独设置子容器如何沿交叉轴排列：**align-self**

  ![img](https://lc-mhke0kuv.cn-n1.lcfile.com/1d09fe5bb413a6dfa5dd.png)

    每个子容器也可以单独定义沿交叉轴排列的方式，此属性的可选值与父容器 `align-items` 属性完全一致，如果两者同时设置则以子容器的 `align-self` 属性为准。

  > **flex-start**：起始端对齐

  ![img](https://lc-mhke0kuv.cn-n1.lcfile.com/93d138727b9dd780bdda.png)

  > **flex-end**：末尾段对齐

  ![img](https://lc-mhke0kuv.cn-n1.lcfile.com/112f075777fdcb6f5d6f.png)

  > **center**：居中对齐

  ![img](https://lc-mhke0kuv.cn-n1.lcfile.com/d7b0131447247a5228fe.png)

  > **baseline**：基线对齐

  ![img](https://lc-mhke0kuv.cn-n1.lcfile.com/26b04323df92c4b1b023.png)

  > **stretch**：拉伸对齐

  ![img](https://lc-mhke0kuv.cn-n1.lcfile.com/ef196e2ba84c406c9ad6.png)

  ### 

   

   

   

  ## 轴

  如图所示，**轴** 包括 **主轴** 和 **交叉轴**，我们知道 `justify-content` 属性决定子容器沿主轴的排列方式，`align-items` 属性决定子容器沿着交叉轴的排列方式。那么轴本身又是怎样确定的呢？在 flex 布局中，`flex-direction` 属性决定主轴的方向，交叉轴的方向由主轴确定。

  ![img](https://lc-mhke0kuv.cn-n1.lcfile.com/5f2a17efffe8f3ab78a4.png)

  - 主轴

  主轴的起始端由 `flex-start` 表示，末尾段由 `flex-end` 表示。不同的主轴方向对应的起始端、末尾段的位置也不相同。

  > 向右：`flex-direction: row`

  ![img](https://lc-mhke0kuv.cn-n1.lcfile.com/da0c2a225cbbdba47297.png)

  > 向下：`flex-direction: column`

  ![img](https://lc-mhke0kuv.cn-n1.lcfile.com/ab305a50ff35d7e7b6b4.png)

  > 向左：`flex-direction: row-reverse`

  ![img](https://lc-mhke0kuv.cn-n1.lcfile.com/f3b60f80ddd45974449d.png)

  > 向上：`flex-direction: column-reverse`

  ![img](https://lc-mhke0kuv.cn-n1.lcfile.com/c219413da157decc5b9e.png)

  - 交叉轴

    主轴沿逆时针方向旋转 90° 就得到了交叉轴，交叉轴的起始端和末尾段也由 `flex-start` 和 `flex-end` 表示。

    上面介绍的几项属性是 flex 布局中最常用到的部分，一般来说可以满足大多数需求，如果实现复杂的布局还需要深入了解更多的属性。

  ## flex 进阶概念

  ### 1. 父容器

  - 设置换行方式：**flex-wrap**

    决定子容器是否换行排列，不但可以顺序换行而且支持逆序换行。

  ![img](https://lc-mhke0kuv.cn-n1.lcfile.com/19fb0f3a31fa497191b8.png)

  > **nowrap**：不换行

  ![img](https://lc-mhke0kuv.cn-n1.lcfile.com/a41d1342e46cd37cd09e.png)

  > **wrap**：换行

  ![img](https://lc-mhke0kuv.cn-n1.lcfile.com/0566bf9682ffa0890624.png)

  > **wrap-reverse**：逆序换行

  逆序换行是指沿着交叉轴的反方向换行。

  ![img](https://lc-mhke0kuv.cn-n1.lcfile.com/2f578fcc69919238bd3b.png)

  - 轴向与换行组合设置：**flex-flow**

    flow 即流向，也就是子容器沿着哪个方向流动，流动到终点是否允许换行，比如 `flex-flow: row wrap`，`flex-flow` 是一个复合属性，相当于 flex-direction 与 flex-wrap 的组合，可选的取值如下：

    - `row`、`column` 等，可单独设置主轴方向
    - `wrap`、`nowrap` 等，可单独设置换行方式
    - `row nowrap`、`column wrap` 等，也可两者同时设置

  - 多行沿交叉轴对齐：**align-content**

    当子容器多行排列时，设置行与行之间的对齐方式。

  ![img](https://lc-mhke0kuv.cn-n1.lcfile.com/ff9bd219375f048b3304.png)

  > **flex-start**：起始端对齐

  ![img](https://lc-mhke0kuv.cn-n1.lcfile.com/0183db03d8fedadc4cf8.png)

  > **flex-end**：末尾段对齐

  ![img](https://lc-mhke0kuv.cn-n1.lcfile.com/12e524438423ac7afc8c.png)

  > **center**：居中对齐

  ![img](https://lc-mhke0kuv.cn-n1.lcfile.com/274a5c1282b997e423db.png)

  > **space-around**：等边距均匀分布

  ![img](https://lc-mhke0kuv.cn-n1.lcfile.com/4a435e3fd0cab3433631.png)

  > **space-between**：等间距均匀分布

  ![img](https://lc-mhke0kuv.cn-n1.lcfile.com/f50d931bdfeb6c24ccae.png)

  > **stretch**：拉伸对齐

  ![img](https://lc-mhke0kuv.cn-n1.lcfile.com/878b39463db6bc499fbc.png)

  ### 2. 子容器

  - 设置基准大小：**flex-basis**

    `flex-basis` 表示在不伸缩的情况下子容器的原始尺寸。主轴为横向时代表宽度，主轴为纵向时代表高度。

  ![img](https://lc-mhke0kuv.cn-n1.lcfile.com/af0dbf4ca6e857ff5de8.png)

  ![img](https://lc-mhke0kuv.cn-n1.lcfile.com/7c73d684a32fd8411db6.png)

  - 设置扩展比例：**flex-grow**

    子容器弹性伸展的比例。如图，剩余空间按 1:2 的比例分配给子容器。

  ![img](https://lc-mhke0kuv.cn-n1.lcfile.com/bcca55b82d18e2ac2367.png)

  ![img](https://lc-mhke0kuv.cn-n1.lcfile.com/72e9f508dff25a474b40.png)

  - 设置收缩比例：**flex-shrink**

    子容器弹性收缩的比例。如图，超出的部分按 1:2 的比例从给子容器中减去。

  ![img](https://lc-mhke0kuv.cn-n1.lcfile.com/38596937d4f86beeac0b.png)

  ![img](https://lc-mhke0kuv.cn-n1.lcfile.com/d278e36c13b9643ff481.png)

  - 设置排列顺序：**order**

    改变子容器的排列顺序，覆盖 HTML 代码中的顺序，默认值为 0，可以为负值，数值越小排列越靠前。

  ![img](https://lc-mhke0kuv.cn-n1.lcfile.com/4eb20f9bfc611e66b069.png)

  ------

    以上就是 flex 布局的全部属性，一共 12 个，父容器、子容器各 6 个，可以随时通过下图进行回顾。

  ![img](https://lc-mhke0kuv.cn-n1.lcfile.com/0dd26d8e99257ff36443.png)



  ## 12栏布局

  创建一个 3 列布局，其中每列占据容器的 col-{n} / 12 比率

  设置父容器为 `display: flex`，然后使用 `flex` 为每列提供与其比值相对应的 `flex-grow` 值。

  ```css
  <style lang="scss">
  .row {
    display: flex;
    &__col {
      ...
      &--2 {
        flex: 2
      }
      &--7 {
        flex: 7
      }
      &--3 {
        flex: 3
      }
    }
  }
  </style>
  <div class="row">
    <div class="row__col row__col--2"></div>
    <div class="row__col row__col--7"></div>
    <div class="row__col row__col--4"></div>
  </div>
  ```

  ### 加分回答

  - 在使用过程中需注意浏览器兼容问题
  - 常见用法除了布局外还可以用于上下居中、左右居中、页面平铺等
  - 父容器
  - flex-direction：决定主轴的方向（row | row-reverse | column | column-reverse）
  - flex-wrap：轴线排列方式（nowrap | wrap | wrap-reverse）
  - flex-flow：是 `flex-direction` 和 `flex-wrap` 的简写形式，默认值为 `row nowrap`
  - justify-content：主轴上的对齐方式（flex-start | flex-end | center | space-between | space-around）
  - align-items：交叉轴上的对齐方式（flex-start | flex-end | center | baseline | stretch）
  - align-content：多根轴线的对齐方式（flex-start | flex-end | center | space-between | space-around | stretch）
  - 子容器
  - order：排列顺序。数值越小，排列越靠前
  - flex-grow：子容器比例
  - flex-shrink：在父容器限制下，子容器缩小比例
  - flex-basis：父容器有多余空间时，子容器占据的主轴空间的大小
  - flex：`flex-grow`，`flex-shrink` 和 `flex-basis` 的简写，默认值为 `0 1 auto`
  - align-self：单个子容器在交叉轴上的对齐方式，可覆盖`align-items`属性

  作者：Vanessa

  链接：https://hacpai.com/article/1545875909329

  来源：黑客派

  协议：CC BY-SA 4.0 https://creativecommons.org/licenses/by-sa/4.0/





   

   

   

    

   

   

    
