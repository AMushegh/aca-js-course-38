// ex 1

let arr = [1, 2, 4, 1, 3, 3, 4, 7, 5];

for (let value of arr) {
  console.log("log for break", value);

  if (arr.indexOf(value) === arr.lastIndexOf(value)) {
    console.log("result", value);
    break;
  }
}

// ex 9

function uniqueValues(arr) {
  let res = [];
  for (let i of arr) {
    if (arr.indexOf(i) === arr.lastIndexOf(i)) {
      res.push(i);
    }
  }
  return res;
}

// ex 12

function reverse(str) {
  const symbols = str.split("");

  for (let i = 0; i < symbols.length / 2; i++) {
    let temp = symbols[i];
    symbols[i] = str[symbols.length - 1 - i];
    symbols[symbols.length - 1 - i] = temp;
  }

  console.log(symbols.join(""));
}

reverse("12345");

// ex 1
function findEvensFrom(a, b) {
  let start = a % 2 === 0 ? a + 2 : a + 1;
  let res = [];

  for (let i = start; i < b; i += 2) {
    res.push(i);
  }

  if (res.length === 0) {
    return "there are no even numbers";
  }
  return res;
}

console.log(findEvensFrom(12, 20));
