var finalPrices = function (prices) {
  let stack = [],
    res = [];
  let length = prices.length;
  for (let i = length - 1; i >= 0; i--) {
    if (stack.length == 0) {
      res.push(prices[i]);
    } else if (stack.length > 0) {
      while (stack.length !== 0 && prices[i] < stack[stack.length - 1]) {
        stack.pop();
      }
      if (stack.length == 0) {
        res.push(prices[i]);
      } else {
        res.push(prices[i] - stack[stack.length - 1]);
      }
    }
    stack.push(prices[i]);
  }
  return res.reverse();
};

let arr = [8, 4, 6, 2, 3];
finalPrices(arr);
