function throttle(fn, time = 250) {
  var last, timerId;
  return function () {
    var now = Date.now();
    if (last && now - last < time) {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        fn.apply(this, arguments);
      }, time)
    } else {
      last = now;
      fn.apply(this, arguments);
    }
  }
}

var a = throttle((arr)=>{console.log(arr)})