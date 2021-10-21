var makeGood = function (s) {
  if (s.length == 0) {
    return "";
  }
  let stack = [],
    top = -1;
  for (let i = 0; i < s.length; i++) {
    if (
      top !== -1 &&
      Math.abs(stack[top].charCodeAt(0) - s[i].charCodeAt(0)) == 32
    ) {
      stack.pop();
      top--;
    } else {
      stack.push(s[i]);
      top++;
    }
  }
  return stack.join("");
};

let s = "leEeetcode";
makeGood(s);
