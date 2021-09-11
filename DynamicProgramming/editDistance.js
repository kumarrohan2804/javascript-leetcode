function editDistance(dp, s1, s2, m, n) {
  if (m == 0) {
    return n;
  }
  if (n == 0) {
    return m;
  }
  if (dp[m][n] !== -1) {
    return dp[m][n];
  }
  if (s1[m - 1] == s2[n - 1]) {
    dp[m][n] = editDistance(dp, s1, s2, m - 1, n - 1);
    return dp[m][n];
  } else {
    dp[m][n] =
      1 +
      Math.min(
        editDistance(dp, s1, s2, m - 1, n),
        editDistance(dp, s1, s2, m, n - 1),
        editDistance(dp, s1, s2, m - 1, n - 1)
      );
    return dp[m][n];
  }
}

function runProgram(input) {
  var a = input.split("\n");
  for (let i = 1; i < a.length; i += 2) {
    var str1 = a[i];
    var str2 = a[i + 1];
    let dp = [];
    for (let i = 0; i < str1.length + 1; i++) {
      let arr = Array(str2.length + 1).fill(-1);
      dp.push(arr);
    }
    console.log(editDistance(dp, str1, str2, str1.length, str2.length));
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
