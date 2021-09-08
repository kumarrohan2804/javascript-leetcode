let dp = Array(2000 + 1).fill(-1);
function cutRod(arr, n) {
  if (n == 0) {
    return 0;
  }
  if (dp[n] !== -1) {
    return dp[n];
  }
  let curr = 0;
  for (let i = 1; i <= n; i++) {
    curr = Math.max(curr, arr[i] + cutRod(arr, n - i));
  }
  dp[n] = curr;
  return curr;
}

function runProgram(input) {
  var a = input.split("\n");
  var size = Number(a[0]);
  var arr = a[1].split(" ").map(Number);
  arr.unshift(0);
  let result = cutRod(arr, size);
  console.log(result);
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
