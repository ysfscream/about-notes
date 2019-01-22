# CSS 让position:absolute超出DIV溢出隐藏

通常，为了让DIV子元素超出部分隐藏，都是在父元素设置overflow:hidden，这样即可防止子元素撑开父元素，使子元素能够溢出隐藏！

但是，对于position:absolute定位的子元素，仅仅使用overflow:hidden没办法将其溢出部分隐藏，需要在父元素上也加上一个定位position:relative;才能将含有 position:absolute属性的子元素进行溢出隐藏！