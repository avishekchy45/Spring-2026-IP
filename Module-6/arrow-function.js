// Arrow functions vs regular functions

function regularFunction() {
  console.log("Regular function");
}

const arrowFunction = () => {
  console.log("Arrow function");
};

regularFunction();
arrowFunction();

// Lexical bound `this` in arrow functions
// While regular functions bind `this` dynamically based on how they are called, arrow functions permanently look outward to their parent scope for this. This means that arrow functions do not have their own `this` context, and they inherit it from the surrounding code.

const person = {
  name: "Bill Gates",
  regularFunction: function () {
    console.log(this.name);
  },
  arrowFunction: () => {
    console.log(this.name);
  }
};

person.regularFunction();
person.arrowFunction();

const person3 = {
  name: "Steve Jobs",
  regularFunction() {
    console.log(this.name);
    const arrowFunction = () => {
      console.log(this.name);
    };
    arrowFunction();
  }
};

person3.regularFunction();
// person2.arrowFunction();

// Parameter

const greet = (name) => {
  console.log(`Hello, ${name}!`);
};
greet("Bill Gates");

// Implicit return

const add = (a, b) => a + b;
console.log(add(10, 20));

const getUser = id => ({ userId: id, role: "Admin" });
console.log(getUser(1));

// Explicit return

const multiply = (a, b) => {
  return a * b;
};
console.log(multiply(10, 20));

// With arrays

const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map((number) => number * number);
console.log(squares);