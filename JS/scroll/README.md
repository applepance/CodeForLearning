兼容性 不行
scroll-behavior: smooth

chrome 支持css，但其他主流浏览器怎么办？ scroll-behavior 失效
JS写 

scroll-behavior ie不支持
兼容 hack ie js window.scrollTo(0, 1/8);
requestAnimationFrame(递归函数) 请求运动帧，调用刷新