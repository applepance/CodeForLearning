export default function (len = 32) {
  const $chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
  const length = $chars.length;
  let str = '';
  while(str.length<len) {
    let ran_num = Math.floor(Math.random()*length);
    str += $chars[ran_num]
  }
  return str;
}