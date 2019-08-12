function quickSort(arr) {
  if (arr.length <= 1) return arr;
  let left = [];
  let right = [];
  let pivot = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if(arr[i] >= pivot) {
      right.push(arr[i])
    } else {
      left.push(arr[i])
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort([2,3,4,1,4,1,1,2,1,4,2,2,1]))