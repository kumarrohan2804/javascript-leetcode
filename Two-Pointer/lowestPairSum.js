function runProgram(input) {
  var a = input.split("\n");
  var testCase = a[0];
  for (let i = 1; i < a.length; i += 2) {
    let [size, target] = a[i].trim().split(" ").map(Number);
    let arr = a[i + 1].trim().split(" ").map(Number);
    arr.sort((a, b) => a - b);
    let p1 = 0,
      p2 = size - 1;
    let result = Infinity;
    while (p1 < p2) {
      if (arr[p1] + arr[p2] > target) {
        result = Math.min(result, arr[p1] + arr[p2]);
        p2--;
      } else if (arr[p1] + arr[p2] <= target) {
        p1++;
      }
    }
    console.log(result);
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
