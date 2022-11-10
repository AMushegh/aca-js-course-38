// 3
const obj1 = Object.create(null);
const obj2 = Object.create({});
const obj3 = Object.create(Object.prototype);

// obj1.toString(); throws an error
// obj2.toString(); -> self: {} -> proto: {} -> Object.prottype
// obj3.toString(); self: {} -> proto: Object.prottype

// 4
// console.log(Object.getPrototypeOf({}));
// console.log({}.prototype === Object.getPrototypeOf({}));

function Builder() {}
// console.log(Builder.prototype === Object.getPrototypeOf(Builder));

function Worker() {}
console.log(Builder.prototype === Worker.prototype);

// const age = 27;
// console.log(age.prototype === Number.prototype);
// console.log(Object.getPrototypeOf(age) === Number.prototype);

// const man = new Builder();
// console.log(Object.getPrototypeOf(man) === Builder.prototype);

// class HouseBuilder extends Builder {}
// const otherMan = new HouseBuilder();
// console.log(Object.getPrototypeOf(otherMan) === Builder);
// console.log(otherMan.constructor === Builder);
// console.log(otherMan.constructor === HouseBuilder);

// console.log(Object.getPrototypeOf(HouseBuilder));
