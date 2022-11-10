// setTimeout(() => {
//   console.log(" 2 ");
// }, 0);

// new Promise((resolve) => {
//   resolve(" 3 ");
// }).then((data) => console.log(data));

// new Promise((resolve) => {
//   resolve(" 4 ");
// }).then((data) => console.log(data));

// console.log(" 1 ");

console.log(1);

let a = new Promise((res) => {
  console.log(2);
  res("a");
}).then((data) => console.log("last", data));

console.log(3);

console.log(a);
