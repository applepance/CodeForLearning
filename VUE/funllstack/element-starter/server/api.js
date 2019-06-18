const express = require('express');
// 路由对象
const router = express.Router();

router
  .get('/api/user/login', (req, res) => {
    const username = req.query.username;
    const password = req.query.password;
    console.log(username, password);
    res.send({
      status: 1
    });
  })

module.exports = router;



