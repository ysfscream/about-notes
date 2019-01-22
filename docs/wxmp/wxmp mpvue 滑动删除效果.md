# mpvue 滑动删除效果

```js
<template>
  <div class="container personal-view">
    <div class="delete">
      <div v-for="(item, index) in list" :key="index" class="slider">
        <div class="content" @touchstart='touchStart' @touchmove='touchMove' @touchend='touchEnd' :style="deleteSlider1">
         {{ item.name }}
        </div>
        <div class="remove">
          删除
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'personal-view',

  data() {
    return {
      startX: 0, // 触摸位置
      endX: 0, // 结束位置
      moveX: 0, //  滑动时的位置
      disX: 0, // 移动距离
      deleteSlider1: '', // 滑动时的效果,使用v-bind:style="deleteSlider"
      delBtnWidth: '100', // 删除按钮宽度单位
      list: [
        { name: '123' },
        { name: '231' },
      ],
    }
  },

  methods: {
    touchStart(e) {
      this.startX = e.clientX
    },
    touchMove(e, index) {
      console.log(e)
      console.log(index)
      this.moveX = e.clientX
      this.disX = this.startX - this.moveX;
      if (this.disX < 0 || this.disX === 0) {
        this.deleteSlider1 = 'transform:translateX(0px)'
      } else if (this.disX > 0) {
        this.deleteSlider1 = `transform:translateX(-${this.disX * 5}px)`
        if (this.disX * 5 >= this.delBtnWidth) {
          this.deleteSlider1 = `transform:translateX(-${this.delBtnWidth}px)`
        }
      }
    },
    // touchEnd(e) {
    //   console.log(e)
      // const endX = e.clientX
      // this.disX = this.startX - endX
      // // 如果距离小于删除按钮一半,强行回到起点
      // if ((this.disX * 5) < (this.delBtnWidth / 2)) {
      //   this.deleteSlider = 'transform:translateX(0px)'
      // } else {
      //   // 大于一半 滑动到最大值
      //   this.deleteSlider = `transform:translateX(-${this.delBtnWidth}px)`
      // }
    // },
  },
}
</script>

<style lang="scss" scoped>
.slider{
  width: 100%;
  height:200px;
  position: relative;
  user-select: none;
  .content{
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background:green;
      z-index: 100;
      //    设置过渡动画
      transition: 0.3s ease;
  }
  .remove{
    position: absolute;
    width:200px;
    height:200px;
    background:red;
    right: 0;
    top: 0;
    color:#fff;
    text-align: center;
    font-size: 40px;
    line-height: 200px;
  }
}
</style>

```

