let str = "pwekwqed";

function allUnique(str) {
  let start = 0,
    maxLen = 0,
    obj = {};
  for (let end = 0; end < str.length; end++) {
    let temp = str[end];
    if (obj[temp] == undefined) {
      obj[temp] = 1;
      maxLen = Math.max(maxLen, end - start + 1);
    } else {
      while (obj[temp] !== undefined) {
        delete obj[str[start]];
        start++;
      }
      obj[temp] = 1;
    }
    console.log(str[end], obj);
  }
  console.log(maxLen);
}

allUnique(str);
