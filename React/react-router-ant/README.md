- React 路由
  在 React 的页面切子页面，当前最新版本提倡使用路由器切换而不是children传值。
- 页面传值的两种方式
  /post/abcdefg => {path="/post/:id"} {props.match.params.id;}
  /table?xx=a =>

## function && class
  function component (dumb component) 根据 props 渲染 不会依赖任何东西 性能好
  class component (smart component) 负责状态管理 复杂 依赖于其他组件