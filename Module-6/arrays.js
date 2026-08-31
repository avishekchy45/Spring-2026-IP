// Creating arrays

const students = ["Bill Gates", "Steve Jobs", "Mark Zuckerberg"];

console.log(students[0]);
console.log(students[1]);
console.log(students.length);


// Modifying arrays

students.push("Elon Musk");

students.pop();

students.unshift("Elon Musk");

students.shift();

console.log(students);

// Useful ES6+ array methods

const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map((number) => number * 2);

console.log(doubled);

const numbers2 = [10, 15, 20, 25, 30];

const result = numbers2.filter((number) => number >= 20);

console.log(result);
