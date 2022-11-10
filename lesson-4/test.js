let a = 5;

setTimeout(() => {
  console.log("four", a);
  a = 10;
}, 0);

let p = new Promise((resolve, reject) => {
  console.log("first", a);
  a = 25;
  resolve();
});

p.then((res) => {
  console.log("third final result ", res);
});

console.log("second", a);
