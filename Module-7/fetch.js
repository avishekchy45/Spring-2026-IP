// // Basic GET request

// fetch("https://jsonplaceholder.typicode.com/users") // Fetch data from an API
// // fetch("jsondemo.json") // Fetch from a local JSON file
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }

//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });


// Modern `async/await`

async function loadUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const users = await response.json();

    console.log(users);
  } catch (error) {
    console.error(error);
  }
}
loadUsers();

console.log("This will log before the fetch completes due to asynchronous behavior.");


// // POST request

// async function createUser() {
//   const user = {
//     name: "Rahim",
//     email: "rahim@example.com",
//   };

//   const response = await fetch("https://jsonplaceholder.typicode.com/users", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(user),
//   });

//   const result = await response.json();

//   console.log(result);
// }

// createUser();
