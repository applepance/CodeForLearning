Page({
  data: {
    hasUserInfo: false,
    userInfo: {},
    isAddTodo: false,
    todos: [],
    addText: '',
    focus: false,
    status: '1' 
  },
  showStatus: function(e){
    var status = e.currentTarget.dataset.status;
    if(status === this.data.status){
      return;
    }
    this.setData({
      status
    })
  },
  setInput: function(e) {
    console.log(e);
    this.setData({
      addText: e.detail.value
    })
  },
  addTodo: function() {
    // 1. 检测有没有输入
    if (!this.data.addText.trim()) {
      wx.showToast({
        title: '请输入todo',
        duration: 1000,
        icon: 'none'
      })
      return;
    }
    // 2. todos push
    this.setData({
      todos: [
        {
          title: this.data.addText,
          id: new Date().getTime(),
          status: 0
        },
        ...this.data.todos
      ],
      isAddTodo: false,
      addText: '',
      focus: false
    })
    // 3. 关闭表单
  },
  addTodoHide: function() {
    this.setData({
      isAddTodo: false,
      focus: false
    })
  },
  addTodoShow: function() {
    this.setData({
      isAddTodo: true
    })
  },
  getUserInfo: function(e) {
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})