// component/calendar/caiendar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    lastMonth: {
      type: String,
      value: '◀'
    },
    nextMonth: {
      type: String,
      value: '▶'
    },
    weekText: {
      type: Array,
      value: ['周日', '周一', '周二', '周三', '周四', '周五','周六']
    }
  },
  read(){
    this.today();
  },

  /**
   * 组件的初始数据
   */
  data: {
    title: '',
    // 上个月的格子
    emptyGridsBefore: [],
    // 这个月的格子
    thisMonthDays: [],
    // 格式化日期
    format: '',
    year: 0,
    month: 0,
    date: 0,
    // 放几个常量，用于匹配是否为当天
    YEAR: 0,
    MONTH: 0,
    DATE: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    today(){
      let DATE = this.data.defaultValue ? new Date(this.data.defaultValue) : new Date(),
        year = DATE.getFullYear(),
        month = DATE.getMonth(),
        date = DATE.getDate(),
        select = year + '-' + this.zero(month) + '-' + this.zero(date);

        this.setData({
          format: select,
          select: select,
          year: year,
          month: month,
          date: date,
          YEAR: year,
          MONTH: month,
          DATE: date
        })

        // 初始化日历组件
        this.display(year, month, date)
    },
    zero(i){
      return i >= 10 ? i : '0' + i;
    },
    display(year, month, date){
      this.setData({
        year,
        month,
        date,
        title: year + '年' + this.zero(month) + '月'
      })
      this.createDays(year, month)
    },
    createDays(year, month){
      let thisMonthDays = [],
        days = this.getThisMonthDays(year, month);
      for(let i=1; i <= days; i++){
        thisMonthDays.push({
          date: i,
          dateFormat: this.zero(i),
          monthFormat: this.zero(month),
          week: this.data.weekText[new Date(Date.UTC(year, month - 1, i)).getDay()]
        })
      }
      this.setData({
        thisMonthDays
      })
    },
    // 获取当月天数
    getThisMonthDays(year, month){
      return new Date(year, month, 0).getDate();
    }
  }
})
