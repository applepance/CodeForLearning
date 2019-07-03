## react-router-dom
  Switch 只显示符合path的第一个组件
  不加 Switch 所有符合的都显示

https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?_=1562038582060&g_tk=5381&uin=0&format=jsonp&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&jsonpCallback=callback

## setState
1. 异步的
2. 合并

## jsonp
const OPTION = {
  param: 'jsonpCallback',
  prefix: 'callback'
}
?jsonpCallback=xxx
xxx 是可以定死的
jsonp jquery 
每次请求的 callback xxx 都是不一样的 加上随机值
prefix指的是前面那部分