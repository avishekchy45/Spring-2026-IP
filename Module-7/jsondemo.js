// Import JSON file
const student = require("./jsondemo.json");

// const student = {
//   id: 101,
//   name: "Steve Jobs",
//   department: "CSE",
// };

// JavaScript object → JSON string
const jsonData = JSON.stringify(student);

console.log(jsonData);

// JSON string → JavaScript object
const objectData = JSON.parse(jsonData);

console.log(objectData);

console.log(objectData.name);
