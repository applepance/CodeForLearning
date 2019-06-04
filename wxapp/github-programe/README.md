- 极简UI风格，一整套
  app.wxss 全局皮肤设置

- 组件思想
  界面中相对独立的显示区块，抽成组件
  意义 => 界面由组件构成，不是由标签构成
  组件复用

- 项目之中，所有请求都封装到 api 目录下面
  module.exports = require

- wx.startPullDownRefresh(); onload 把生命周期函数交给onPullDownRefresh()
  api请求
  wx.stopPullDownRefresh()