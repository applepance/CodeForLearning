function hanmingWeight(n) {
  let num = 0;
  while (n !== 0) {
    n &= (n-1);
    num++
  }
  return num;
}

console.log(hanmingWeight(01))