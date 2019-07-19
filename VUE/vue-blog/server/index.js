const {
  Nuxt,
  Builder // mvc req res pages/index.vue
} = require('nuxt')
require('./models');
const express = require('express');
// /api
const config = require('../nuxt.config.js')
const app = express();
const path = require('path');
const start = async () => {
  const nuxt = new Nuxt(config);
  if(true) {
    // 开发阶段实时编译
    const builder = new Builder(nuxt);
    await builder.build();
  }
  app.use(nuxt.render); //使用此中间件
  // 前端 /pages 路由
  // nuxt /index /about .vue template 
  app.listen(3025, () => {
    console.log('server is running at 127.0.0.1:3025')
  })
}
start();