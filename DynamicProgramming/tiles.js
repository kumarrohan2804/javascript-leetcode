let arr = Array(10).fill(-1);
arr[0] = 0;
arr[1] = 1;
function tiles(n) {
  if (arr[n] !== -1) {
    return arr[n];
  }
  arr[n] = tiles(n - 1) + tiles(n - 2);
  return arr[n];
}

console.log(tiles(4));
