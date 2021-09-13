function goldMine(arr, n, m) {
  let dp = [];
  for (let i = 0; i < n; i++) {
    let arr = Array(m).fill(-1);
    dp.push(arr);
  }
  for (let i = 0; i < n; i++) {
    dp[i][0] = arr[i][0];
  }
  for (let row = 0; row < n; row++) {
    for (let col = 1; col < m; col++) {
      if (row < n - 1 && row > 0) {
        dp[row][col] =
          arr[row][col] +
          Math.max(
            dp[row - 1][col - 1],
            dp[row][col - 1],
            dp[row + 1][col - 1]
          );
      } else if (row == n - 1) {
        dp[row][col] =
          arr[row][col] + Math.max(dp[row - 1][col - 1], dp[row][col - 1]);
      } else if (row == 0) {
        dp[row][col] =
          arr[row][col] + Math.max(dp[row][col - 1], dp[row + 1][col - 1]);
      }
    }
  }
  let result = arr[0][0];
  for (let i = 0; i < n; i++) {
    result = Math.max(dp[i][m - 1], result);
  }
  console.log(result);
}

let arr = [
  [1, 3, 3],
  [2, 1, 4],
  [0, 6, 4],
];

goldMine(arr, 3, 3);
