const express = require('express');
const http = require('http');
const app = express(); // 应用
// /api 后端API 服务
const api = require('./api');
app.use(api);
app.set('port', 3000);
http
  .createServer(app)
  .listen(app.get('port'), '0.0.0.0', function() {
    console.log('Express server listening on port')
  })