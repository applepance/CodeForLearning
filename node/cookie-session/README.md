## why

无状态

## cookie

本地存储
怎么来:
1. js document.cookie 可读 可写
2. 服务端 通过 Set-Cookie 响应头设置 cookie

内容:
name:
value:
path: cookie 在哪个路径下生效
domain:

/           /所有路径
/user       /user user以及user 下面的
/user/abc   /user/abc user/abc 以及下面的

domain:

httpOnly: true/false 如果设置为 true ,就不能通过 js 获取 cookie 的值
maxAge: 在几秒后，cookie 被删除
secure: 安全 只会在 https 协议下传输
koa: ms js: s

作用范围:
domain + path
在什么域名什么路径下生效
浏览器检查存储的 cookie, 会发送给服务端的
而且: http 传输报文的大小
放在 Cookie 请求头里面发送

用途:
状态管理, t
用户个性化设置 f
规定死

## session
会话
考后台语言自己实现
很多个用户 产生很多个 session

userId
sessionId 用户会话的时候 通过 自己 sessionId 查询自己的状态
cookie: sessionID=id