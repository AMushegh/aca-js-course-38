const foo = function () {
  this.x = 5;
  (function () {
    this.x = 3;
  })();
  console.log(this.x);
};

const obj = {
  x: 4,
  logger: function () {
    console.log(this.x);
  },
};

// foo();
// new foo();
obj.logger();
new obj.logger();
