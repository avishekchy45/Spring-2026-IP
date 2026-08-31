// Using `let`:

let name = "Doraemon";
let age = 5000;
let isRobot = true;

console.log(name);
console.log(age);
console.log(isRobot);

age = 10000;

console.log(age);

age = "Ten thousand years old";

console.log(age);

// Using `const`:

const university = "Premier University";

console.log(university);

// const university = "Premier University";

// university = "Other University";

// Using `var`:

if (true) {
  var globalAlert = "I can escape the block!";
  let blockSecret = "I am locked inside.";
  const permanentSecret = "I am also locked inside.";

  console.log(blockSecret);
}

console.log(globalAlert);
console.log(blockSecret);