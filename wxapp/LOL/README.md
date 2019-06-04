- 小程序是个伟大的产品，
Android/IOS 两套代码
小程序使用前端开发思路和技术，基于微信大APP，App开发
1. 一份代码，到处运行
2. 前端开发，快快快
3. 基于微信，性能良好

1. wxml == html
    新的标签或组件 view = div
    wxss = css
    js
    page = wxml + wxss + js
    App = 多个page
    这就是小程序的架构
2. 三者周转得很6
    写结构
    写样式 rpx
    js 约定 事件函数只要加在
    page({
        ,
        bind......: function(){

        }
    })
    bindtap="bind......"