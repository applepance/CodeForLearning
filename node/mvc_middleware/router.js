const router = require('express').Router();
const user = require('./controllers/user.controller');
// mvc 声明路由
module.exports =  router.post('/api/login', user.login);
