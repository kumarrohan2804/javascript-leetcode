var isValid = function (s) {
  let arr = [];
  let top = -1;
  let balanced = true;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "{" || s[i] == "[" || s[i] == "(") {
      arr.push(s[i]);
      top++;
    } else {
      if (arr.length == 0) {
        balanced = false;
        return false;
      } else {
        let char = arr[top];
        if (s[i] == ")" && char !== "(") {
          balanced = false;
          return false;
        } else if (s[i] == "]" && char !== "[") {
          balanced = false;
          return false;
        } else if (s[i] == "}" && char !== "{") {
          balanced = false;
          return false;
        } else {
          arr.pop();
          top--;
          continue;
        }
      }
    }
  }
  if (arr.length > 0) {
    return false;
  } else if (arr.length == 0 && balanced) {
    return true;
  }
};
