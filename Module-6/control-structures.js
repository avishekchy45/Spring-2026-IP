// if...else

let marks = 75;

if (marks >= 80) {
  console.log("A+");
} else if (marks >= 70) {
  console.log("A");
} else if (marks >= 60) {
  console.log("B");
} else {
  console.log("Fail");
}

// switch

let day = 3;

switch (day) {
  case 1:
    console.log("Sunday");
    break;

  case 2:
    console.log("Monday");
    break;

  case 3:
    console.log("Tuesday");
    break;

  default:
    console.log("Invalid day");
}

// Loops

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}

do {
  console.log(i);
  i++;
} while (i <= 5);

const students = ["Bill Gates", "Steve Jobs", "Mark Zuckerberg"];

for (const student of students) {
  console.log(student);
}
