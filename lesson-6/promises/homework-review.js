let counter = 0;

// const intervalId = setInterval(() => {
//   console.log("tick");
//   counter++;
//   if (counter === 10) {
//     clearInterval(intervalId);
//   }
// }, 1000);

function myTimeout(cb, duration) {
  const intervalID = setInterval(() => {
    cb();
    clearInterval(intervalID);
  }, duration);
}

// myTimeout(() => console.log("1111"));

function myTimeout2() {
  const intervalID = setInterval(() => {
    console.log("Without setTimeout");
    clearInterval(intervalID);
  }, 0);
}

myTimeout2();
