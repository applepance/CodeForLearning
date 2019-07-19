SEO Nuxt ssr框架
SPA #root 其他的都是 .vue => js
index.html html的内容输出 SEO极差

约定即规则

- .vue pages/ 页面
  mvc controller => model => controller => html => http response    .vue 放到后端来编译
  文本 .vue(html模版) => nuxt => html代码
  生命周期，异步的数据 页面运行 server side rendering
  mvvm webpack => .js => render => root (JS DOM)
  加载过程
  asyncData