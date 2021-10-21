// let str = "abc";

// function subset(str, i, cur) {
//   if (i == str.length) {
//     console.log(cur);
//     return;
//   } else {
//     subset(str, i + 1, cur), subset(str, i + 1, cur + str[i]);
//   }
// }

// subset(str, 0, "");

// let temp = [];

// function flatten(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       flatten(arr[i]);
//     } else {
//       temp.push(arr[i]);
//     }
//   }
// }

// let arr = [1, [2, 3, 4, [5, 6, [7, 8]]], 10];
// flatten(arr);
// console.log(temp);
function hello() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("async function");
    }, 1000);
  });
}

async function run() {
  const result = await hello();
  console.log(result);
}

run();
