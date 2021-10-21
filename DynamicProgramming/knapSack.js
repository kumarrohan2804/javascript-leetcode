function knapsack(dp, w, v) {
  for (let i = 1; i < dp.length; i++) {
    for (let j = 0; j < dp[0].length; j++) {
      if (j < w[i - 1]) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j - w[i - 1]] + v[i - 1], dp[i - 1][j]);
      }
    }
  }
  console.log(dp[dp.length - 1][dp[0].length - 1]);
}

function runProgram(input) {
  var a = input.split("\n");
  for (let i = 1; i < a.length; ) {
    let [capacity, n] = a[i].trim().split(" ").map(Number);
    let weight = [],
      value = [];
    for (let j = 0; j < n; j++) {
      let [wTemp, vTemp] = a[i + j + 1].trim().split(" ").map(Number);
      weight.push(wTemp);
      value.push(vTemp);
    }
    let dp = [];
    for (let j = 0; j <= n; j++) {
      let arr = Array(capacity + 1).fill(-1);
      dp.push(arr);
    }
    for (let j = 0; j <= capacity; j++) {
      dp[0][j] = 0;
    }
    for (let j = 0; j <= n; j++) {
      dp[j][0] = 0;
    }
    knapsack(dp, weight, value);
    i += n + 1;
  }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
  read += input;
});
process.stdin.on("end", function () {
  read = read.replace(/\n$/, "");
  runProgram(read);
});

process.on("SIGINT", function () {
  read = read.replace(/\n$/, "");
  runProgram(read);
  process.exit(0);
});
