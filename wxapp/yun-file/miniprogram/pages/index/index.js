// 连上数据库
const db = wx.cloud.database();
// 找到userInfo表
const userInfo = db.collection('userInfo');

Page({
  data: {
    userList: []
  },
  getUserInfo(result) {
    console.log(result);
    // 用户_openid前端拿不到
    // 云开发可以
    wx
      .cloud
      .callFunction({
        name: 'getOpenId',
        complete: res => {
          // 不是结果，是符合条件的数量
          userInfo.where({
            _openid: res.result.openId
          }).count().then(res => {
            if (res.total == 0) {
              userInfo.add({
                data: result.detail.userInfo
              })
                .then(res => {
                  console.log(res);
                })
            } else {
              // console.log('加过了');
              wx.navigateTo({
                url: '/pages/add/add',
                success (res) {
                  console.log(res);
                }
              })
            }
          })
          console.log(result.detail.userInfo)
          // 云数据库中，传一个json 代表一条记录，
          // userInfo.add({
          //   data: result.detail.userInfo
          // })
          // .then(res => {
          //   console.log(res);
          // })
        }
      })
  },
  onLoad(options){
    userInfo
      .get()
      .then(res => {
        this.setData({
          userList: res.data
        })
      })
  }
})