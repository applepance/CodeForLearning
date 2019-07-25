exports.login = async (req, res) => {
  console.log(req.body, req.query);
  // 参数的验证 抽象成模块
  const msg = req.checkBody({
    username: {
      required: '用户名不能为空'
    },
    password: {
      required: '密码不能为空'
    },
    code: {
      required: '验证码不能为空'
    }
  })
  console.log(msg);
  if (msg) {
    // 出错处理，
    return res.handleError(msg);
  }
  // await model.query
  res.json({
    page: '登录'
  })
}