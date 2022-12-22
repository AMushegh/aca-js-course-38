function Stack() {
  this.storage = [];

  this.isEmpty = function () {
    return !this.storage.length;
  };

  this.push = function (value) {
    this.storage.push(value);
  };

  this.pop = function () {
    return this.storage.pop();
  };

  this.peek = function () {
    return this.storage[this.storage.length - 1];
  };

  this.print = function () {
    console.log(this.storage);
  };
}

function isValid(str) {
  const stack = new Stack();

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(" || str[i] === "{" || str[i] === "[") {
      stack.push(str[i]);
    } else if (
      (stack.peek() === "(" && str[i] === ")") ||
      (stack.peek() === "{" && str[i] === "}") ||
      (stack.peek() === "[" && str[i] === "]")
    ) {
      stack.pop();
    } else {
      return false;
    }
  }

  return stack.isEmpty();
}

console.log(isValid("(){][}"));
