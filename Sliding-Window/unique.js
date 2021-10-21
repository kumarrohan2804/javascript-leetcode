let str = "aabacebebebe";

function unique(str, k) {
  let start = 0,
    maxCount = 0,
    obj = {};
  for (let end = 0; end < str.length; end++) {
    obj[str[end]] = obj[str[end]] != undefined ? obj[str[end]] + 1 : 1;

    while (Object.keys(obj).length > k) {
      obj[str[start]]--;
      if (obj[str[start]] == 0) {
        delete obj[str[start]];
      }
      start++;
    }

    if (Object.keys(obj).length == k) {
      maxCount = Math.max(maxCount, end - start + 1);
    }
  }
  console.log(maxCount);
}

unique(str, 3);
