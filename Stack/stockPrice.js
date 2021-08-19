var StockSpanner = function (prices) {
  this.pricesArr = [];
};
StockSpanner.prototype.next = function (price) {
  let c = 1;
  while (
    this.pricesArr.length > 0 &&
    price >= this.pricesArr[this.pricesArr.length - 1][0]
  ) {
    c += this.pricesArr[this.pricesArr.length - 1][1];
    this.pricesArr.pop();
  }
  this.pricesArr.push([price, c]);
  return c;
};
