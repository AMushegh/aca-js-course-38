// ex 1

function returnNums(arr, num) {
  if (arr.length < num) {
    return arr;
  }

  let newArr = [];

  for (let i = 0; i < num; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}

// console.log(returnNums([1, 2, 3, 4], 8));

// ex 2

function getUnion(arr1, arr2) {
  let temp = [...arr1, ...arr2];
  return temp.filter((el, index) => {
    return temp.indexOf(el) === index;
  });
}

getUnion([1, 2, 4], [1, 1, 2, 5, 6]);

// ex 3

const names = ["John", "Taylor", "John"];

const filtered = names.filter(function (element, index, arr) {
  return arr.indexOf(element) === index;
});

console.log(filtered);
