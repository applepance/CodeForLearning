
const app = getApp()
Page({
  data: {
    isPlay: false,
    song:{}
  },

  createBackgroundAudio: function(songInfo){
    const bgAudio = wx.getBackgroundAudioManager();
    bgAudio.title = "title";
    bgAudio.epname = "epname";
    bgAudio.singer = "chris wu";
    bgAudio.coverImgUrl = "";
    bgAudio.src = songInfo.url;
    bgAudio.onPlay(res=>{
      this.setData({
        isPlay: true
      })
    })
  },
  onLoad: function (options) {
    let id = options.id;
    wx.request({
      url: app.globalData.baseUrl + '/song/url',
      data: {
        id: id
      },
      success: res => {
        console.log('歌曲详情',res);
        if(res.data.code === 200){
          this.createBackgroundAudio(res.data.data[0]);
        }
      }
    })
    wx.request({
      url: app.globalData.baseUrl + '/song/detail',
      data: {
        ids: id
      },
      success: (res)=>{
        console.log('歌曲信息' , res);
        this.setData({
          song: res.data.songs[0]
        })
      }
    })
  },


  
})