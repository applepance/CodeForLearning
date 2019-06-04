function Nya(callback) {
  var self = this; // 记录三种状态：初始化null为pending、true为resolve、false为reject
  var state = null;
  // 记录resolve的参数
  var param = null;
  // then 方法返回的promise对象的resolve和reject
  var nextResolve = null;
  var nextReject = null;
  // 记录then方法的参数, onFulfilled,onReject
  var asynconFulfilled = null;
  var asynconReject = null;

  // 执行并改变promise对象状态
  callback(resolve, reject);

  // then方法
  this.then = function (onFulfilled, onReject) {
    // 返回一个新的promise对象
    return new self.constructor(function (resolve, reject) {
      // 判断异步代码是否执行完毕 （是否resolve或reject）
      // 若执行完毕，就在then方法里立即执行，否则就将参数记录下来，等待state就绪再执行****函数
      if (state === true) {
        doAsynconFulfilled(onFulfilled, resolve, reject);
      } else if (state === false) {
        doAsynconRejected(onReject, resolve, reject);
      } else {
        nextResolve = resolve;
        nextReject = reject;
        asynconFulfilled = onFulfilled;
        asynconReject = onReject;
      }
    })
  }
  this.catch = function(onReject,onFulfilled) {
    // 返回一个新的promise对象
    return new self.constructor(function (resolve, reject) {
      // 判断异步代码是否执行完毕 （是否resolve或reject）
      // 若执行完毕，就在then方法里立即执行，否则就将参数记录下来，等待state就绪再执行****函数
      if (state === true) {
        doAsynconFulfilled(onFulfilled, resolve, reject);
      } else if (state === false) {
        doAsynconRejected(onReject, resolve, reject);
      } else {
        nextResolve = resolve;
        nextReject = reject;
        asynconFulfilled = onFulfilled;
        asynconReject = onReject;
      }
    })
  }

  // resolve方法
  function resolve(data) {
    state = true;
    param = data;
    if (nextResolve) {
      doAsynconFulfilled(asynconFulfilled, nextResolve, nextReject);
    }
  }
  function reject(err) {
    state = false;
    param = err;
    if (nextReject) {
      doAsynconRejected(asynconReject, nextResolve, nextReject);
    }
  }
  function doAsynconFulfilled(onFulfilled, resolve, reject) {
    window.setTimeout(function () {
      // 判断onFulfilled 是否为 function，不是则忽略
      if (typeof onFulfilled === 'function') {
        // 执行onFulfilled方法获取返回值promise()
        var promise = onFulfilled(param);
        // 如果promise为undefined 执行if
        // 如果promise为一个Nya对象 执行 else if
        // 如果promise为一个非Nya对象 执行 else
        if(promise === undefined){
          resolve(param);
        } else if (promise.constructor === self.constructor) {
          // 等待传进来promise对象执行完毕，然后根据传进来的promise对象的状态执行resolve或者reject
          promise.then(function(param){
            resolve(param);
          },function(err){
            reject(err)
          })
        } else {
          // 直接执行.then方法返回对象的resolve
          resolve(param);
        }
      } else {
        resolve(param);
      }
    }, 0)
  }
  function doAsynconRejected(onReject, resolve, reject){
    window.setTimeout(function(){
      if (typeof onReject === 'function') {
        var promise = onReject(param);
        if(promise === undefined){
          reject(param);
        } else if (promise.constructor === self.constructor) {
          promise.then(function(param){
            resolve(param);
          },function(err){
            reject(err)
          })
        } else {
          reject(param);
        }
      } else {
        reject(param);
      }
    },0)
  }
}