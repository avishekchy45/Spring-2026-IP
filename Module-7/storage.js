// Local Storage

localStorage.setItem("username", "Bill Gates");

const username = localStorage.getItem("username");

console.log(username);

localStorage.removeItem("username");


// Dark Mode Toggle

const button = document.querySelector("#themeBtn");

button.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const darkMode = document.body.classList.contains("dark");

  localStorage.setItem("darkMode", darkMode);
});

const darkMode = localStorage.getItem("darkMode");

if (darkMode === "true") {
  document.body.classList.add("dark");
}


// Session Storage

sessionStorage.setItem("studentID", "12345");

const studentID = sessionStorage.getItem("studentID");

console.log(studentID);

sessionStorage.removeItem("studentID");


// Storing Objects with JSON

// Storage values are strings, so objects need `JSON.stringify()` and `JSON.parse()`.

const student = {
  name: "Bill Gates",
  id: "12345",
  department: "CSE",
};

localStorage.setItem("student", JSON.stringify(student));

const data = localStorage.getItem("student");

const studentData = JSON.parse(data);

console.log(studentData.name);
console.log(studentData.id);
console.log(studentData.department);
