// "A man, a plan, a canal:Panama"
// 1. 忽略大小写 toLowerCase
// 2. 特殊字符忽略 ++
// 3. left right 
function isValid (c) {
  const charCode = c.charCodeAt(0);
  const isDigit = charCode >= "0".charCodeAt(0) && charCode <= "9".charCodeAt(0);
  const isChar = charCode >= "a".charCodeAt(0) && charCode <= "z".charCodeAt(0);
  return isDigit || isChar;
}
var isPalindrome = function (s) {
  let str = s.toLowerCase(),
    left = 0,
    right = str.length - 1;
  while (left < right) {
    if (!isValid(str[left])) {
      left++;
      continue;
    }
    if (!isValid(str[right])) {
      right--;
      continue;
    }
    if (str[left] === str[right]) {
      left++;
      right--;
    } else {
      break;
    }
  }
  return right <= left;
}
console.log(isPalindrome("A man, a plan, a canal:Panama"));