function debounce(fn, interval = 1000) {
  var timerId;

  return function () {
    if (!!timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      fn.apply(this, arguments);
    }, interval)
  }
}

var a = debounce((arr) => {
  console.log(arr)
}, 1000)

a([1, 2, 3, 4])
a([1, 2])
a([1, 2, 3, 4])
a([1, 2, 3, 4])
a([1, 2, 3, 4])
a([1, 2, 3, 4])
a([1, 2, 3, 4])