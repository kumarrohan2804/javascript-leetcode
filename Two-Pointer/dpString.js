function runProgram(input) {
  var a = input.split("\n");
  var testCase = Number(a[0]);

  for (let i = 1; i < a.length; i += 2) {
    let str1 = a[i];
    let str2 = a[i + 1];
    // console.log(str1, str2);
    let p1 = 0;
    let p2 = 0;
    while (p1 < str1.length && p2 < str2.length) {
      if (str1[p1] == str2[p2]) {
        p1++;
        p2++;
      } else {
        p2++;
      }
    }
    if (p2 == str2.length && p1 !== str1.length) {
      console.log("No");
    } else if (p1 == str1.length) {
      console.log("Yes");
    }
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
