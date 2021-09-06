function downToZero(a) {
  if (a == 0) {
    count++;
    return;
  }
  if (a >= 5) {
    downToZero(a - 5);
  }
  if (a >= 2) {
    downToZero(a - 2);
  }
  if (a >= 1) {
    downToZero(a - 1);
  }
  return;
}

let count = 0;
function runProgram(input) {
  var a = input.split("\n").map(Number);
  var testCase = a[0];
  for (let i = 1; i < a.length; i++) {
    downToZero(a[i]);
    console.log(count);
    count = 0;
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
