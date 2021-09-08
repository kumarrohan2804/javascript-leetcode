function cutRod(arr, n) {
  if (n <= 0) {
    return 0;
  }
  let max = -Infinity;
  for (let i = 0; i < n; i++) {
    max = Math.max(max, arr[i] + cutRod(arr, n - (i + 1)));
  }
  return max;
}

function runProgram(input) {
  var a = input.split("\n");
  var size = Number(a[0]);
  var arr = a[1].split(" ").map(Number);
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
