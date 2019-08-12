function debounce(fn, interval = 1000) {
  var timerId;

  return function () {
    if (!!timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      fn.apply(fn, arguments);
    }, interval)
  }
}

var b = function () {
  console.log(this.b)
}
b.b = 'b';

var a = debounce(b, 1000)
a.b = 'a';
a();
a();