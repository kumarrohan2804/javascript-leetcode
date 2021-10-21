var removeDuplicates = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    let x;
    if (stack.length > 0 && stack[stack.length - 1] === s[i]) {
      x = stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return stack.join("");
};

let s = "abbaca";
removeDuplicates(s);
