// setInterval(() => {
//   console.log("tick");
// }, 1000);

function myInterval(cb, duration) {
  setTimeout(() => {
    cb();
    myInterval(cb, duration);
  }, duration);
}

myInterval(() => {
  console.log(5);
}, 1000);
