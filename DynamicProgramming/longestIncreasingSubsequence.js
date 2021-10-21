function increasing(dp, arr, size) {
  let result = 0;
  for (let i = 0; i < size; i++) {
    let max = 0;
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j]) {
        if (dp[j] > max) {
          max = dp[j];
        }
      }
    }
    dp[i] = max + 1;
    if (dp[i] > result) {
      result = dp[i];
    }
  }
  console.log(result);
}

function runProgram(input) {
  var a = input.split("\n");
  let size = Number(a[0]);
  let arr = a[1].trim().split(" ").map(Number);
  let dp = Array(10000).fill(0);
  increasing(dp, arr, size);
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
