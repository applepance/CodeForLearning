虚拟DOM
- vue react MVVM 
  不去做DOM这一非常耗费性能的事
  不用去直接操作 DOM, 操作 data ... 将MVVM的修改( DOM 片段)更新到页面上去。
  SPA -> PWA Application 性能OK

  DOM 树
  ComponentA render (JSX) replaceChild() -> DOM树上
  性能不行 组件对应的树,遍历
    Tag node
    属性改变 style
    文本改变了  innerText
    append  li*n
    childTag

  oldState  oldTree
    newState  newTree 遍历对比得到的 virtual DOM
    最后才生成DOM 树
    oldState DOM树的 描述 JS版本的DOM树

    DOM 树, 内存中有 JS Virtual DOM

- elementObj => 新的virtualDOM
  diff  补丁  补上DOM
        1
      2   3
    4  5 6  7
        1
      2   9
    4  5 6  8
  [{ value: 9, index: 2},{ value: 9, index: 6}]
- 遍历确定修改的部分 先序深度遍历
- patches [] dom diff
- 修改DOM