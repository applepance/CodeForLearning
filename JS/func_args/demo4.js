function sum(a = err('第一个为空'), b = err('第二个为空')) {
  return a + b;
}
function err(msg){
  throw new Error(msg);
}
console.log(sum(1,2))
console.log(sum(undefined, 10)) // 报错，第一个参为空
console.log(sum(10)) // 报错，第二个参为空
// 不允许改函数体