export const createStore =  (state, storeChange) => {
  var listeners = []; // 组件
  const store = state || {};
  // listen callback
  const subscribe = (listen) => listeners.push(listen)// 订阅发布者
  const dispatch = (action) => {
    const newStore = storeChange(store, action);
    // 新的
    listeners.forEach(item => {
      item(newStore, store);
    })
  }
  return { store, dispatch, subscribe }
}