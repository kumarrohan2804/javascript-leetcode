var calPoints = function (ops) {
  let stack = [];
  for (let i = 0; i < ops.length; i++) {
    if (ops[i] == "C") {
      stack.pop();
    } else if (ops[i] == "D") {
      stack.push(2 * stack[stack.length - 1]);
    } else if (ops[i] == "+") {
      stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
    } else {
      stack.push(Number(ops[i]));
    }
  }
  let sum = 0;
  for (let i = 0; i < stack.length; i++) {
    sum += stack[i];
  }
  console.log(sum);
};

let ops = ["5", "2", "C", "D", "+"];
calPoints(ops);
