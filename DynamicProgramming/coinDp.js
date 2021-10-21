function coinDp(arr, n) {
  let dp = [];
  for (let i = 0; i < arr.length + 1; i++) {
    let arr = Array(n + 1).fill(-1);
    dp.push(arr);
  }
  for (let i = 0; i < n + 1; i++) {
    dp[0][i] = 0;
  }
  for (let i = 0; i < arr.length + 1; i++) {
    dp[i][0] = 1;
  }
  for (let row = 1; row < arr.length + 1; row++) {
    for (let col = 1; col < n + 1; col++) {
      if (arr[row - 1] > col) {
        dp[row][col] = dp[row - 1][col];
      } else {
        dp[row][col] = dp;
      }
    }
  }
}

let arr = [1, 2, 3];
coinDp(arr, 4);
