// 2
function getMyTextLater(value) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (typeof value === "string") {
        resolve(value.toUpperCase());
      }
      reject(value);
    }, 500);
  });
}

// variant 1
// getMyTextLater("some text")
//   .then(function (data) {
//     console.log(data);
//     return 5;
//   })
//   .then((data) => console.log(data))
//   .catch(function (data) {
//     console.log(data);
//   });

// // variant 2
// getMyTextLater(1234)
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (data) {
//     console.log(data);
//     return "value from catch";
//   })
//   .then((data) => {
//     console.log(data);
//   });

// ex 3

function mapPromise(prom, mapper) {
  return new Promise((res, rej) => {
    prom.then((data) => res(mapper(data))).catch((err) => rej(err));
  });
}

const myPromise = new Promise((resolve, reject) => {
  reject(2);
});
const timesTwo = (val) => val * 2;
mapPromise(myPromise, timesTwo)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
