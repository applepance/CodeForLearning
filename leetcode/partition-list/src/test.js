function qie(arr, flag) {
  let i = 0;
  let front = []
  let behind = []
  while (arr[i]) {
    if (arr[i] < flag) {
      front.push(arr[i])
    } else if (arr[i] > flag) {
      behind.push(arr[i])
    }
    i++
  }
  return [...front, ...behind]
}


let arr = [1, 4, 3, 2, 5, 2]
console.log(qie(arr, 3))
