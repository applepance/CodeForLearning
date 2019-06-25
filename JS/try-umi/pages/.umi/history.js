// create history
const history = require('E:/nvm/v8.14.0/node_modules/umi/lib/createHistory').default({
  basename: window.routerBase,
});
window.g_history = history;
export default history;
