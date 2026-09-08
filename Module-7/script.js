// console.log(document);

const title = document.querySelector("#title");
const message = document.querySelector("#message");

console.log(title);
console.log(title.innerHTML);
console.log(message);
console.log(message.textContent);
console.log(message.classList);

title.innerHTML = "<h2> New Title </h2>";
message.textContent = "<h2> New Message </h2>";