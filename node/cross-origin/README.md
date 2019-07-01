## 跨域
浏览器的安全（同源）策略，
协议 域名 端口 有一个不一致的时候就存在跨域


## cors
cross origin resource share 
1. 一个标准，规定了一些 http 的 首部字段，让服务器允许哪些网站可以访问。
2. 规定，如果是非简单请求，浏览器会先发一个预检请求，从服务端知道是否允许跨域，若果允许，才会发出正式的请求。
3. 非简单请求 简单请求

## jsonp 原理
1. script 标签 可以跨域
2. 加载进来的内容会被当作 js 执行
3. 后端 先获取到 前端发出的 callback 在callback里面 插入自己想要的数据
4. 前端 拿到返回的内容 当成 js 执行
5. 预先定义好的一个函数
6. 缺点：只能 get 请求
7. 写一个 promise 风格的 jsonp 函数
8. param = { type: 'man', age = 18 }
jsonp(url, param = {})
.then(res => {
  console.log(res)
})
- 思路
1. 一个全局的方法
2. 插入一个 script 标签，根据方法名 param 拼接url
3. 根据 js 的 加载情况 判断 请求成功与否 返回数据
4. script 标签上面 有事件

## iframe
可以引入一个跨域的html文件

1. 引入 和 后端 接口同源的一个 iframe
2. 该 iframe 不存在跨域 可以请求
3. 和 iframe 通信 postMessage message

## 
同一个页面的里面的 所有 iframe 共享 window.name


## server 后台
koa-static 映射过 /url

## static 前端
static live-server
前后端 通信 fe-iframe 文件 收到后台的结果 middle 后台 static iframe

window.name

1. 上一步一样
2. iframe 请求 放在一个 共享的 window.name 上面
3. fe-iframe.html 得到请求的结果
4. 请求完成之后 跳到一个第三方页面 执行定义在 fe-iframe.html 里的回调

## 代理