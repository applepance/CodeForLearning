function quickSort(arr){
  if(arr.length<=1){return arr;}
  var left = [], right=[],
  baseDot = Math.round(arr.length/2),
  base = arr.splice(baseDot,1)[0];
  for(var i= 0;i<arr.length;i++){
      if(arr[i]<base){
          left.push(arr[i])
      }else{
          right.push(arr[i])
      }
  }

  return quickSort(left).concat([base],quickSort(right));  // concat 拼接
}
console.log(quickSort([1,32,3,6,86,25,744]))
