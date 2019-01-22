# Vue .exact 修饰符

> 2.5.0 新增

https://cn.vuejs.org/v2/guide/events.html#exact-%E4%BF%AE%E9%A5%B0%E7%AC%A6

`.exact` 修饰符允许你控制由精确的系统修饰符组合触发的事件。

```vue
<!-- 即使 Alt 或 Shift 被一同按下时也会触发 -->
<button @click.ctrl="onClick">A</button>

<!-- 有且只有 Ctrl 被按下的时候才触发 -->
<button @click.ctrl.exact="onCtrlClick">A</button>

<!-- 没有任何系统修饰符被按下的时候才触发 -->
<button @click.exact="onClick">A</button>
```

