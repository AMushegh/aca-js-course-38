function Airplane(name) {
  this.name = name;
  this.isFlying = false;

  this.showName = function () {
    console.log(this.name);
  };
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};

// console.log(Airplane.prototype);
// console.log(Airplane.__proto__ === Function.prototype);
// console.log(Function.prototype.__proto__ === Object.prototype);

const armAvia = new Airplane("ArmAvia");

// console.log(armAvia);
armAvia.takeOff();
// console.log(armAvia);

const a = {};
const b = {};

a.foo = function () {
  console.log("a");
};

Object.prototype.myFoo = function () {
  console.log("object");
};

a.myFoo();
