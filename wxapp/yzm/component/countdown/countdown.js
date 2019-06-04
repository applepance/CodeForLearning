// components/countdown/countdown.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    start: {
      type: Boolean,
      value: false,
      observer(newVal) {
        console.log('--------', newVal);
        if (newVal === true) {
          this.countdownFunc();
        }
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    timerText: '获取验证码'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _setStartDataEvent() {
      // 报告老板
      this.triggerEvent("setStartDataEvent", {
        start: this.data.start
      })
    },
    _getCountdownEvent() {
      this.triggerEvent("getCountdownEvent");
    },
    countdownFunc() {
      this.setData({
        timerText: 60
      })
      let countdownNum = this.data.timerText
      let timer = setInterval(() => {
        countdownNum--;
        this.setData({
          timerText: countdownNum
        })
        if (countdownNum === 0) {
          this.setData({
            timerText: '重新发送',
            start: false
          })
          this._setStartDataEvent();
          clearInterval(timer);
        }
      }, 1000)
    }
  }
})
