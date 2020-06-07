# CSS Flex 固定一栏宽度

[https://stackoverflow.com/questions/23794713/how-can-i-have-two-fixed-width-columns-with-one-flexible-column-in-the-center/23794791#23794791](https://stackoverflow.com/questions/23794713/how-can-i-have-two-fixed-width-columns-with-one-flexible-column-in-the-center/23794791#23794791)

> Instead of using width (which is a suggestion when using flexbox), you could use flex: 0 0 230px; which means:

0 = don't grow (shorthand for flex-grow)

0 = don't shrink (shorthand for flex-shrink)

230px = start at 230px (shorthand for flex-basis)
which means: always be 230px

简单概括，设置 flex-basic 的值为一个固定值
