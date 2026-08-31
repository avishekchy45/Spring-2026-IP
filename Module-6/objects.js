// Basic object

let student = {
  name: "Bill Gates",
  age: 26,
  department: "CSE",
};

console.log(student.name);
console.log(student.age);

// Bracket notation

console.log(student["name"]);

// Modifying an object

student.age = 25;
student.university = "Premier University";

console.log(student);

// Object method

const student2 = {
  name: "Steve Jobs",

  greet() {
    console.log(`Hello, I am ${this.name}`);
  },
};

student2.greet();