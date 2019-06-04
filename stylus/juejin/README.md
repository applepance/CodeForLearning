## css 预编译语言stylus
写的是stylus .styl 在浏览器端运行的是.css
前端工作流在发生改变
界面开发工作被重新定义了，更快，更短小
stylus main.styl -o main.css
编译 -o 输出
stylus 提供了css不具备的变量定义， 模块化， 函数， 快捷 ===> 新的语法
-w watch 监听文件修改同步更新编译

1. 变量
2. 减少输入{} :;
3. 函数
4. 嵌套
    .book-bought 模块
        .label
            img
    & 引用上一级的层次类名，同时可以缩进，省去重复上一次的选择器

flex 是 css 在移动时代最爽的布局方案，手机端
子元素们对齐方式，水平 主轴 justify-content
纵轴 align-items center
传统方案是 img + 兄弟结点 vertical-align: middle

flex 的考点 自适应
1. flex:1 比例划分, 只给一个元素设置, 占据其他元素之外的所有
2. 父元素与多个子元素之间的关系
    水平对齐 justify-content
    垂直对齐 align-items
3. 剩余空间 flex-grow