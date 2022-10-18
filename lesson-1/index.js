// ex 1
const arrayEx1 = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < arrayEx1.length; i++) {
  if (arrayEx1[i] % 2 !== 0) {
    sum += arrayEx1[i];
  }
}

console.log("ex 1: ", sum);

// ex 2

const array = [15, 3, 5, 25, 6, 1, 12, 17, 74, 20];

let minIndex = 0;
let maxIndex = 0;
for (let i = 0; i < array.length; ++i) {
  if (array[i] < array[minIndex]) {
    minIndex = i;
  }
  if (array[i] > array[maxIndex]) {
    maxIndex = i;
  }
}

let temp = array[minIndex];
array[minIndex] = array[maxIndex];
array[maxIndex] = temp;

console.log("ex 2: ", array);

// swap
let a = 2;
let b = 3;
a = a + b; // a = 5
b = a - b; // b = 2
a = a - b; // a = 3

// ex 3

// function sumMakesTen(a, b) {
//   if (a + b === 10) {
//     return true;
//   }
//   return false;
// }

function sumMakesTen(a, b) {
  return a + b === 10;
}

console.log("ex 3: ", sumMakesTen(1, 8));

// ex 5
function arrayOfMultiples(num, length) {
  if (num === 0) {
    return [0];
  }

  const res = [];
  for (let i = num; i <= num * length; i += num) {
    res.push(i);
  }

  return res;
}

console.log(arrayOfMultiples(2, 5));

// ex 6
const words = ["attention", "please", "attend"];
const pref = "at";

function countStartsWith(words, pref) {
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].substring(0, pref.length) === pref) {
      count++;
    }
  }

  return count;
}

// ex 7

function rps(p1, p2) {
  if (
    (p1 === "Rock" && p2 === "Paper") ||
    (p1 === "Scissors " && p2 === "Rock") ||
    (p1 === "Paper" && p2 === "Scissors")
  ) {
    return "The winner is p2";
  } else if (p1 === p2) {
    return "It's a draw";
  } else {
    return "The winner is p1";
  }
}
console.log(rps("Rock", "Paper"));
