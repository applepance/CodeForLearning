Function.prototype._call = function (){
  let [cxt, ...args] = [...arguments]
  if(!cxt) {
    cxt = typeof window === "undefined" ? global : window
  }
  cxt.fn = this;


  let r = cxt.fn(...args);
  delete cxt.fn;

  return r;
}

function cout (desc) {
  console.log(this.text,desc)
}

a = {
  text: 'a'
}

b = {
  text: 'b'
}

cout._call(a, 1)
cout._call(b, 2)