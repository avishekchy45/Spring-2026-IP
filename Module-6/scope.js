// Function scope

let globalVariable = "Global";
function test() {
  let localVariable = "Local";
  console.log(globalVariable);
  console.log(localVariable);
}
test();
console.log(globalVariable);
// console.log(localVariable); // Error

// Block scope

if (true) {
  let message = "Inside block";
  console.log(message);
}
// console.log(message); // Error

// Why `var` is different

if (true) {
  var message = "Hello";
}
console.log(message); // Works

if (true) {
  let message = "Hello";
}
console.log(message); // Error

// Lexical scope

function outerFunction() {
  let outerVariable = "Outer";
  console.log(outerVariable);

  function innerFunction() {
    let innerVariable = "Inner";
    console.log(innerVariable);
    console.log(outerVariable);
  }

  innerFunction();
}
outerFunction();

// Hoisting
// Variables declared with `let` and `const` are hoisted, but they are not initialized. They remain uninitialized in a state called the Temporal Dead Zone (TDZ) from the start of the block until the execution reaches the line where they are declared. Accessing them early throws a ReferenceError.

console.log(hoistedVariable);
var hoistedVariable = "I am hoisted";
console.log(hoistedVariable);
