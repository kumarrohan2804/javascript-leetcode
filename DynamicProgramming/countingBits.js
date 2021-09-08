var countBits = function (n) {
  let arr = [];
  arr[0] = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) {
      arr[i] = arr[Math.floor(i / 2)];
    } else {
      arr[i] = arr[i - 1] + 1;
    }
  }
  return arr;
};
