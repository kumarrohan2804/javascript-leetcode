var nextPermutation = function (nums) {
  if (nums.length === 1) return nums;
  let last = nums.length - 1,
    secLast = nums.length - 2;
  while (secLast >= 0) {
    if (nums[secLast] < nums[last]) {
      let temp = nums[last];
      nums[last] = nums[secLast];
      nums[secLast] = temp;
      return nums;
    }
    secLast--;
  }
  nums.sort((a, b) => a - b);
  return nums;
};

let nums = [1];
console.log(nextPermutation(nums));
