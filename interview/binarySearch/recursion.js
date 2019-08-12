function binarySearch(nums, target) {
  let low = 0, high = nums.length - 1;
  const binaryWalker = (nums, low, high, target) => {
    if (low > high) return -1;
    const mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] > target) return binaryWalker(nums, low, mid - 1, target);
    if (nums[mid] < target) return binaryWalker(nums, mid + 1, high, target);
  }
  return binaryWalker(nums, low, high, target);
}

console.log(binarySearch([1, 2, 3, 4], 3))