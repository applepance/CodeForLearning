//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    latitude: 39.908860,
    longitude: 116.397390,
    scale: 18,
    markers: [{}]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onReady(){
    this.mapCtx = wx.createMapContext('myMap');
  },
  onLoad: function () {
    wx.getLocation({
      type:'gcj02',
      success:(res)=>{
        this.setData({
          latitude: res.latitude,
          longitude: res.longitude
        })
        setTimeout(()=>{
          this.mapCtx.getCenterLocation({
            success:(res)=>{
              this.generateMarkers(res);
            }
          })
        },1000)
      }
    })
  },
  generateMarkers:function(res){
    let ran = Math.ceil(Math.random() * 20);
    let markers = [];
    for(let i = 0; i < ran; i++){
      let marker = {
        id: i,
        title: '去这里',
        iconPath: '/images/map-bicycle.png',
        width: 52,
        height: 30
      }
      let sign_a = Math.random();
      let sign_b = Math.random();
      let a =  (Math.ceil(Math.random() * 99)) * 0.00002;
      let b =  (Math.ceil(Math.random() * 99)) * 0.00002;
      marker.latitude = sign_a > 0.5 ? res.latitude + a : res.latitude - a;
      marker.longitude = sign_b > 0.5 ? res.longitude + b : res.longitude - b;
      markers.push(marker);
    }
    this.setData({
      markers
    })
  }
})
