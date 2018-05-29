# CSS 超出部分不换行并显示横向滚动条

首先white-space: nowrap;  然后让他 overflow-x:scroll;  overflow-y:hidden;然后再给个宽高

```css
.nowrap{
    white-space: nowrap;
    overflow-x: scroll;
    height: 200px;
    overflow-y: hidden;  /***这行加上就好了***/
}

```
