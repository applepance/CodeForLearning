传统的MVC后端开发

MVVM
Model Page({data:{}})
View Template wxml
VM {{}} wx:for

MVC Model 数据库
V View 静态页面
C Controller

Web HTTP服务器
端口？ 3000
MySQL 3306
WebServer 80

用户 Request 通过ip + 端口 
Web Server Response

http
    .createServer(function(request,response){
        request 用户
        response 
    })
    .listen(8080)