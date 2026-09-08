const getData = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Student data received");
  } else {
    reject("Failed to retrieve student data");
  }
});

getData
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Operation completed.");
  });


// new Promise((resolve, reject) => {
//   const success = true;

//   if (success) {
//     resolve("Student data received");
//   } else {
//     reject("Failed to retrieve student data");
//   }
// })

//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error(error);
//   })
//   .finally(() => {
//     console.log("Operation completed.");
//   });
