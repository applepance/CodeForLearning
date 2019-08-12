function binarySearch(nums, target) {
  let low = 0, high = nums.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      high = mid - 1;
    } else if (nums[mid] < target) {
      low = mid + 1;
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4], 4))