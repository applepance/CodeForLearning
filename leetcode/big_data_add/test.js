// let str = '123';
// let str2 = '456';
// // Number(str)
// // parseInt(str)
// console.log(+str + (+str2));

var num1 = '123456789987654321111114456777777111111111111111111112222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222123456789987654321111114456777777111111111111111111112222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222';
var num2 = '99958321098765432102222223333211112222222222222222222';

function addTwoNumbers(str1, str2){
  // 表达清除了 字符串 不能相加
  // 新的数据结构打理 [] 存储
  // 字符串有index
  let l1 = str1.length,
    l2 = str2.length,
    carry = 0,
    arr = [];
  
  var max = Math.max(l1, l2);
  for(let i = l1-1, j = l2-1, n = max-1; n >= 0; n--, i--, j--){
    var sum = (+str1[i]||0) + (+str2[j]||0) + carry;
    if(sum >= 10){
      carry = 1;
      arr.push(sum - 10);
    } else {
      carry = 0;
      arr.push(sum);
    }
  }
  if(carry > 0){
    arr.push(carry);
  }

  return arr.reverse().join('');
}

console.log(addTwoNumbers(num1, num2));