function maxSum(arr, k) {
  // taking value at 0 will be the maximum
  let curr = 0;
  let mSum = arr[0];
  // looping through the rest of the indexes to find the maximum
  for (let i = 0; i < k; i++) {
    // at each iteration checking the maximum
    curr += arr[i];
    if (curr > mSum) {
      mSum = curr;
    }
    if (curr < 0) {
      curr = 0;
    }
  }
  console.log(mSum);
}

function runProgram(input) {
  var a = input.split("\n");
  var testCase = Number(a[0]);

  for (let i = 1; i < a.length; i += 2) {
    let size = Number(a[i]);
    let arr = a[i + 1].trim().split(" ").map(Number);
    maxSum(arr, size);
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
