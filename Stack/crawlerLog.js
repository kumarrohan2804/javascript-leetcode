var minOperations = function (logs) {
  let stack = [0];
  for (let i = 0; i < logs.length; i++) {
    if (stack.length > 1 && logs[i] == "../") {
      stack.pop();
    } else if (logs[i] !== "./" && logs[i] !== "../") {
      stack.push(1);
    }
  }
  let count = 0;
  while (stack.length > 1) {
    stack.pop();
    count++;
  }
  return count;
};

let logs = ["./", "../", "./"];
console.log(minOperations(logs));
