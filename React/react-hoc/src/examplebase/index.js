// defineProperty(obj, key, {
//   value: ''
// })

// descriptor 拿到了 add 这个方法 descriptor
// function log(target, name, descriptor) {
//   const method = descriptor.value;
//   descriptor.value = function (...args) {
//     console.log('log type: add');
//     return method(...args);
//   }
// }
function log(logType) {
  return function log(target, name, descriptor) {
    const method = descriptor.value;
    descriptor.value = function (...args) {
      console.log('log type: ' + logType);
      return method(...args);
    }
  }
}
// 修饰符 是一个函数
// @log log 是一个函数
// @log('add') @log('add') 也是一个函数
class Base {
  @log('add')
  add(a, b) {
    return a + b;
  }
  @log('divide')
  divide(a, b) {
    return a / b;
  }
}
Object.defineProperty(Base, 'add', {
  value: () => { },
  // ...
})
const base = new Base();
console.log('add', base.add(1, 2));
console.log('divide', base.divide(5, 2));
// 加日志
// 有了更好 没有也行的 装饰器
export default base;