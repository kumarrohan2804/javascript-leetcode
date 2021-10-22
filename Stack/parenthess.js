var minAddToMakeValid = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (stack.length == 0) {
      stack.push(s[i]);
    } else if (stack[stack.length - 1] == "(" && s[i] == ")") {
      stack.pop();
      console.log("pop", stack);
    } else {
      stack.push(s[i]);
    }
  }
  console.log(stack);
};

let s = "())";
minAddToMakeValid(s);
