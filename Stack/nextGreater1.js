var nextGreaterElement = function (nums1, nums2) {
  let obj = {},
    stack = [];
  let len = nums2.length;
  for (let i = len - 1; i >= 0; i--) {
    if (stack.length == 0) {
      obj[nums2[i]] = -1;
    } else if (stack.length !== 0) {
      while (stack.length !== 0 && nums2[i] >= stack[stack.length - 1]) {
        stack.pop();
      }
      if (stack.length == 0) {
        obj[nums2[i]] = -1;
      } else {
        obj[nums2[i]] = stack[stack.length - 1];
      }
    }
    stack.push(nums2[i]);
  }
  let res = [];
  for (let i = 0; i < nums1.length; i++) {
    res.push(obj[nums1[i]]);
  }
  return res;
};

let nums1 = [4, 1, 2],
  nums2 = [1, 3, 4, 2];

nextGreaterElement(nums1, nums2);
