const WXAPI = require('../../wxapi/main');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods: [],// 商品列表
    categories: [],// 分类
    activeCategoryId: 0, // 当前分类
    noticeList: [] // 通知列表
  },
  getBanners(){
    WXAPI.banners({
      type: 'new'
    })
    .then(res => {
      console.log(res);
    })
  },
  loadGoods(){
    WXAPI.goods({
      recommendStatus: 1
    })
    .then(res => {
      console.log(res);
    })
  },
  getNotice(){
    WXAPI.noticeList({
      pageSize: 5
    })
    .then(res => {
      this.setData({
        noticeList: res.data
      })
      console.log(res);
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getBanners();// 请求Banner位
    this.loadGoods();// 商品
    this.getNotice();// 通告
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