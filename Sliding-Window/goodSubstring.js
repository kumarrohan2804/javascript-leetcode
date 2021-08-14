var countGoodSubstrings = function (s) {
  let count = 0;
  for (let i = 2; i < s.length; i++) {
    if (s[i - 2] != s[i - 1] && s[i - 1] != s[i] && s[i] != s[i - 2]) {
      count++;
    }
  }
  return count;
};

let s = "xyzzaz";
console.log(countGoodSubstrings(s));
