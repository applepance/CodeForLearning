function bubbleSort (arr) {
  let i = arr.length;
  while(i >= 0) {
    for(let j = 0; j < i; j++){
      if(arr[j] > arr[j+1]){
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    i--;
  }
  return arr;
}

console.log(bubbleSort([2,3,4,1,4,1,1,2,1,4,2,2,1]))