function throttle(fn, time = 250) {
  var last, timerId;
  return function () {
    var now = Date.now();
    if (last && now - last < time) {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        fn.apply(fn, arguments);
      }, time)
    } else {
      last = now;
      fn.apply(fn, arguments);
    }
  }
}

var b = function () {console.log(this.b)}
b.b = 'b'
var a = throttle(b)
a();
a();
a();
a();
a();
a();