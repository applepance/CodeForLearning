var isPalindrome = function (s) {
  return s.split("").reverse().join("") === s;
}

console.log(isPalindrome('aba'));