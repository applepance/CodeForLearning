// pages/vehicles/index.js
const db = require('../../assets/db.js');
const { handleTestDrive } = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    entity: {}
  },
  handleTestDrive,

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const id = options.id;
    console.log('vehicles', id);
    const entity = db.vehicles.find(item => item.id == id);
    if(entity){
      this.setData({
        entity
      })
      wx.setNavigationBarTitle({
        title: entity.header
      })
    } else {
      wx.showToast({
        title: '没有当前车辆信息',
        icon: 'none',
        duration: 1500
      })
      setTimeout(()=>{
        // 不允许跳转到 tabbar 页面
        // wx.redirectTo({
        //   url: '../index/index'
        // })
        wx.navigateBack();
      },1500)
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})