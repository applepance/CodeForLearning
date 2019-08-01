const a = {
  b: 1
};
function b() {
  console.log('b变化')
}
function bindData() {
  // let start = a.b;
  // setTimeout(()=>{
  //   if(a.b !== start){
  //     b();
  //     console.log("现在的值："+a.b)
  //     console.log("过去的值："+start)
  //     start = a.b;
  //   }
  // },0)
  Object.keys(a).map(key => {
    let v = a[key];
    Object.defineProperty(a, key, {
      get() {
        console.log('你正在读取a里面的值 ');
        return v;
      },
      set(newA) {
        v = newA;
        b();
      }
    })
  })

}
bindData();
a.b = 2;
console.log(a.b);