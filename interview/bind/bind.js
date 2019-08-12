Function.prototype._bind = function (obj) {
  if(typeof this !== 'function'){
    return ;
  }
  let _self = this;
  let args = [].slice.call(arguments, 1);
  return function () {
    return _self.apply(obj, ...args, ...[].slice.call(arguments,0))
  }
}

var a = function () {
  console.log(this.a)
}

b = {
  a: 'b'
}

a._bind(b)();