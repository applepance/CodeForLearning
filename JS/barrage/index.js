let data = [
    {value:'周杰伦的听妈妈的话，好好听！', time:5,color:'red',speed:1,fontSize:22},
    {value:'想快快长大，啦啦啦！', time:10,color:'#00a1f5',speed:1,fontSize:30},
    {value:'听妈妈的话吧，别早恋了！', time:12,speed:1,fontSize:16},
    {value:'听妈妈的话吧，别早恋了！', time:13,speed:1,fontSize:30},
    {value:'听妈妈的话吧，别早恋了！', time:14,speed:1,fontSize:16},
    {value:'听妈妈的话吧，别早恋了！', time:18,speed:1,fontSize:28},
    {value:'听妈妈的话吧，别早恋了！', time:20,speed:1,fontSize:16},
    {value:'听妈妈的话吧，别早恋了！', time:23,speed:1,fontSize:22},
    {value:'听妈妈的话吧，别早恋了！', time:25,speed:1,fontSize:16},
  ]
  
  // 获取到所有的dom元素
  let doc = document;
  let canvas = doc.getElementById('canvas')
  let video = doc.getElementById('video')
  let $txt = doc.getElementById('text')
  let $btn = doc.getElementById('btn')
  let $color = doc.getElementById('color')
  let $range = doc.getElementById('range')
  
  class CanvasBarrage {
    constructor(canvas, video, opts = {}) {
      if (!canvas || !video) {
        return;
      }
      console.log(this)
  
      // 挂在到this上
      this.video = video;
      this.canvas = canvas;
      this.canvas.width = video.width;
      this.canvas.height = video.height;
  
      this.ctx = canvas.getContext('2d')
  
      // 设置默认值，如果没有传入就使用该值
      let defOpts = {
        color: '#e91e63',
        speed: 1.5,
        opacity: 0.5,
        fontSize: 20,
        data: []
      }
      // 合并对象全部挂载到this实例上
      Object.assign(this, defOpts, opts)
  
      // 添加属性，用来判断播放状态，默认true是暂停
      this.isPaused = true
      // 得到所有的弹幕消息
      this.barrages = this.data.map(item => new Barrage(item, this))
      // 渲染
      this.render()
    }
    // function rander() {}
    render() {
      this.clear()
      // 渲染弹幕
      this.renderBarrage()
      // 如果没有暂停的话就继续渲染
      if (this.isPaused === false) {
        // 通过raf渲染动画，递归进行渲染
        requestAnimationFrame(this.render.bind(this))
      }
    }
    clear() {
      // 清除整个画布
      this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)
    }
    renderBarrage() {
      // 根据时间来和弹幕要展示的时间做比较，判断是否展示弹幕
      let time = this.video.currentTime
  
      // 遍历所有弹幕，每一个barrage都是Barrage的实例
      this.barrages.forEach(barrage => {
        // 只有在视频播放的时间大于等于当前弹幕的展示时间才做处理
        if (!barrage.flag && time >= barrage.time) {
          // 判断当前弹幕是否已经初始化了
          if (!barrage.isInit) {
            barrage.init()
            barrage.isInit = true
          }
          // 弹幕需要从右往左渲染，所以X坐标减去当前弹幕的speed即可
          barrage.x -= barrage.speed
          barrage.render()
          // 如果弹幕的X坐标小于自身的宽度，表示渲染结束
          if (barrage.x < -barrage.width) {
            barrage.flag = true
          }
        }
      });
    }
  }
  
  // 创建Barrage类，用来实例化每一个弹幕元素
  class Barrage {
    constructor(obj,ctx) {
      this.value = obj.value // 弹幕的内容
      this.time = obj.time // 弹幕出现的时间
  
      // 把obj和ctx都挂载到this上，方便获取
      this.obj = obj
      this.context = ctx
    }
    // 初始化弹幕
    init() {
      // 如果数据没有涉及到下面4中参数，就直接取默认参数
      this.color = this.obj.color || this.context.color
      this.speed = this.obj.speed || this.context.speed
      this.opacity = this.obj.opacity || this.context.opacity
      this.fontSize = this.obj.fontSize || this.context.fontSize
  
      // 为了计算每个弹幕的宽度，我们来创建一个元素p，然后计算文字的宽度
      let p = document.createElement('p')
      p.style.fontSize = this.fontSize + 'px'
      p.innerHTML = this.value
      document.body.appendChild(p)
  
      this.width = p.clientWidth
      document.body.removeChild(p)
  
      // 设置弹幕出现的位置
      this.x = this.context.canvas.width
      this.y = this.context.canvas.height * Math.random();
  
      // 做一下超出范围的处理
      if (this.y < this.fontSize) {
        this.y = this.fontSize
      } else if (this.y > this.context.canvas.height - this.fontSize) {
        this.y = this.context.canvas.height - this.fontSize
      }
    }
    // 渲染每一条弹幕
    render() {
      // 设置画布文字的字号和字体
      this.context.ctx.font = `${this.fontSize}px Arial`;
      // 设置画布文字颜色
      this.context.ctx.fillStyle = this.color
      // 绘制文字
      this.context.ctx.fillText(this.value, this.x, this.y)
    }
  }
  
  // 创建CanvasBarrage的实例
  let canvasBarrage = new CanvasBarrage(canvas, video, {data})
  // 设置video的play事件来调用canvasBarrage里面的render
  video.addEventListener('play', () => {
    canvasBarrage.isPaused = false
    canvasBarrage.render(); // 触发弹幕
  })
  