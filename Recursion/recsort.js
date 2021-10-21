let arr = [9, 8, 7, 6, 1, 4];

function recsort(arr, index) {
  if (index == arr.length - 2) {
    if (arr[index] > arr[index + 1]) {
      let temp = arr[index];
      arr[index] = arr[index + 1];
      arr[index + 1] = temp;
    }
    return arr;
  }
  let result = recsort(arr, index + 1);
  if (result[index] > result[index + 1]) {
    let temp = result[index];
    result[index] = result[index + 1];
    result[index + 1] = temp;
  }
  return arr;
}

let res = recsort(arr, 0);
console.log(res);
