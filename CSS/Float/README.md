- 清除浮动的笔记
####### tip:    记得清除浮动的时候，有需要就在父元素加一个 clearFix 类名
1. 在父元素底部加上一行代码<div style="clear: left;"></div> 也可用both
2. 在父元素的CSS上加一个div.content{float:left;}
3. 在父元素的CSS上加一个伪元素after 同样 clear:left; 并加上 display:block
4. 利用BFC简称 (块级格式化上下文) 的效果来弥补父容器的高度塌陷
    .clearFix {
            padding: 0 200px;
            overflow: hidden;auto;scroll;
        }
5. 尼古拉斯大师 方法, 把父容器的display设置为table，可以创建一个匿名表格单元，直接触发BFC效果======>不推荐
    .clearFix {
            display:table;
        }

- 双飞燕布局和圣杯布局的原理是一样，只是父元素的宽度不一样，所以定位细节也是不一样。