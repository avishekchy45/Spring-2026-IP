let studentName = "Nobita"; // String
let age = 26; // Number
let passed = true; // Boolean
let result; // Undefined
let scholarship = null; // Null
let largeNumber = 123456789n; // BigInt

console.log(typeof studentName);
console.log(typeof age);
console.log(typeof passed);
console.log(typeof result);
console.log(typeof scholarship);
console.log(typeof largeNumber);


const sym1 = Symbol("id");
const sym2 = Symbol("id");

console.log(sym1 === sym2); // false
console.log(sym1.description); // "id"