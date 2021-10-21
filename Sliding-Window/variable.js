let arr = [4, 2, 7, 1, 2, 3, 5, 6];

function window(arr, k) {
  let windowStart = 0,
    windowSum = 0,
    maxLen = 0;
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];
    while (windowSum > k) {
      windowSum -= arr[windowStart];
      windowStart++;
    }
    if (windowSum == k) {
      maxLen = Math.max(maxLen, windowEnd - windowStart + 1);
    }
  }
  console.log(maxLen);
}

window(arr, 5);
