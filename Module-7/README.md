# Module 7 Notes: DOM Manipulation and Asynchronous JavaScript

## Code Link: [Github](https://github.com/avishekchy45/Spring-2026-IP/tree/main/Module-7)

## DOM: Document Object Model ([Code](index.html))

- What is DOM?
- HTML document → DOM tree
- `document` object
- Element vs node
- Parents, children and siblings
- DOM traversal
- Selecting elements
- Creating, modifying and deleting elements
- Attributes and properties
- `textContent` vs `innerHTML`
- `classList`
- Inline styles through JavaScript

### Important DOM methods

```javascript
document.getElementById();
document.querySelector();
document.querySelectorAll();
document.getElementsByClassName();

element.parentElement;
element.children;
element.firstElementChild;
element.lastElementChild;
element.nextElementSibling;
element.previousElementSibling;

element.createElement();
element.append();
element.prepend();
element.remove();

element.setAttribute();
element.getAttribute();
element.removeAttribute();
```

JavaScript can modify the **existing page structure without reloading the entire page**. This is the foundation for interactive web applications.

---

## DOM Selection and Manipulation ([Code](traversal.html))

- Parent-child relationships
- Sibling relationships
- Descendant elements

JavaScript does not directly "change the HTML file"; it changes the **DOM representation currently loaded in the browser**.

---

## JavaScript Events ([Code](events.html))

- What is an event?
- Event-driven programming
- Event listeners
- Event handlers
- `addEventListener()`
- Common events:
  - `click`
  - `dblclick`
  - `mouseover`
  - `mouseout`
  - `keydown`
  - `keyup`
  - `input`
  - `change`
  - `submit`
  - `load`
  - `DOMContentLoaded`
- Event object
- Event propagation
- Bubbling and capturing

---

## Form Validation and Submission ([Code](form-validation.html))

- Client-side validation
- Required fields
- Minimum/maximum length
- Email validation
- Numeric validation
- Regular expressions
- HTML5 validation attributes:
  - `required`
  - `minlength`
  - `maxlength`
  - `pattern`
  - `min`
  - `max`
- HTML5 validation vs JavaScript validation
- `preventDefault()`

Client-side validation is **not a replacement for server-side validation**.

---

## XML (Extensible Markup Language) ([Code](xmldemo.xml))

- What is XML?
- XML syntax
- Elements and attributes
- Root element
- Nested elements
- Well-formed XML
- XML's historical role in data exchange
- XML parsing
- XML vs HTML

| HTML                          | XML                                     |
| ----------------------------- | --------------------------------------- |
| Displays/presents information | Describes/stores/transports information |
| Predefined elements           | User-defined elements                   |
| Browser-oriented              | Data-oriented                           |
| Flexible syntax               | Strict syntax                           |

---

## JSON (JavaScript Object Notation) ([Code](jsondemo.js))

- What is JSON?
- JSON syntax
- JSON objects
- JSON arrays
- Key-value pairs
- Strings, Numbers, Boolean, `null`
- Nested objects/arrays
- JSON vs JavaScript objects
- JSON serialization/deserialization
- `JSON.stringify()`
- `JSON.parse()`
- Why JSON is commonly used with REST APIs
- XML vs JSON

### XML vs JSON

| XML                     | JSON                           |
| ----------------------- | ------------------------------ |
| Tag-based               | Key-value based                |
| More verbose            | Generally more compact         |
| Supports attributes     | No XML-style attributes        |
| Common in older systems | Very common in modern web APIs |
| XML parsers required    | Native JavaScript JSON methods |

---

## AJAX (Asynchronous JavaScript and XML)

- AJAX is a **technique/pattern**, not a programming language
- Updating part of a webpage without full-page reload
- Asynchronous HTTP requests
- `XMLHttpRequest`
- Relationship between AJAX and:
  - JavaScript
  - DOM
  - HTTP
  - JSON/XML
- Traditional AJAX vs modern `fetch()`

Historically, AJAX referred to making asynchronous HTTP requests and updating parts of a webpage without performing a complete page reload.

**AJAX does not necessarily mean XML anymore**. Modern applications commonly exchange JSON, rather than XML. MDN describes the modern pattern as asynchronous network requests, commonly retrieving JSON and REST API data. ([Network Requests][network-requests])

### Traditional AJAX architecture

```text
Browser
   │
   │ HTTP Request
   ▼
Web Server
   │
   │ Response
   ▼
JavaScript
   │
   ▼
Update DOM
```

### XMLHttpRequest example

```javascript
const xhr = new XMLHttpRequest();

xhr.open("GET", "data.json", true);

xhr.onload = function () {
  if (xhr.status === 200) {
    console.log(xhr.responseText);
  }
};

xhr.onerror = function () {
  console.error("Request failed");
};

xhr.send();
```

`XMLHttpRequest` is still available, but the **Fetch API is the modern replacement** and uses Promises rather than the older event/callback model. ([XMLHttpRequest API][XMLHttpRequestAPI])

---

## Asynchronous JavaScript

- Synchronous execution
- Asynchronous execution
- Blocking vs non-blocking
- Call stack
- Web APIs
- Callback functions
- Event loop
- Task/callback queue
- Microtask queue
- Why asynchronous programming is necessary for network operations
- Avoiding "callback hell"

### Synchronous example

```javascript
console.log("First");
console.log("Second");
console.log("Third");
```

Output:

```text
First
Second
Third
```

### Asynchronous example

```javascript
console.log("First");

setTimeout(() => {
  console.log("Second");
}, 2000);

console.log("Third");
```

Output:

```text
First
Third
Second
```

---

## Promises ([Code](promises.js))

- A Promise represents the eventual result of an asynchronous operation.
- Three states:

```text
Pending
   │
   ├──► Fulfilled
   │
   └──► Rejected
```

- Creating a Promise
- `resolve()`
- `reject()`
- `.then()`
- `.catch()`
- `.finally()`
- Promise chaining
- Error handling
- Relationship between Promises and asynchronous operations

---

## Fetch API ([Code](fetch.html))

- What Fetch API is
  - The Fetch API is the modern interface for network requests and is a promise-based replacement for `XMLHttpRequest`. ([Fetch API][FetchAPI])
- `fetch()`
- Request and Response
- HTTP methods
- Response status
- `response.json()`
- Promise-based requests
- Promise returned by `fetch()`
- Error handling
- GET requests
- POST requests
- Request headers
- Request body
- `async/await`

`fetch()` resolves its Promise when the response headers arrive; an HTTP error such as 404 does **not automatically reject the Promise**, so learn to check `response.ok` or `response.status`.

---

## Consuming REST APIs ([Code](rest-api.html))

- What is an API (Application Programming Interface)?
  - A set of rules and protocols that lets different software programs talk to each other
- What is a REST API (Representational State Transfer Application Programming Interface)?
  - An architectural style that allows different computer systems to securely communicate and exchange data over the internet.
- Client-server communication
- Endpoint
- Resource
- HTTP methods:
  - GET
  - POST
  - PUT
  - PATCH
  - DELETE
- HTTP status codes
- JSON responses
- Request headers
- Request body
- API response handling
- Rendering API data into the DOM

---

## SOP (Same-Origin Policy)

- What is an origin?
- Scheme/protocol
- Host/domain
- Port
- Same-origin vs Cross-origin requests
- Why browsers impose SOP
- Why browsers restrict cross-origin access
- Security implications
- CORS as the mechanism for controlled cross-origin access

An origin is determined by the **scheme, host and port**. The same-origin policy restricts how a document/script from one origin can interact with resources from another origin. ([SOP][SOP])

```text
https://example.com
        │
        ├── same protocol
        ├── same host
        └── same port
```

```text
https://example.com
https://api.example.com
```

These are different origins because the hosts differ.

### CORS

```text
JavaScript
     │
     │ fetch()
     ▼
Different Origin
     │
     │ CORS headers
     ▼
Browser decides whether JS can access the response
```

Fetch and `XMLHttpRequest` are subject to same-origin restrictions, while CORS allows servers to explicitly permit controlled cross-origin access. ([CORS][CORS])

---

## jQuery

Historically, jQuery simplified:

- DOM manipulation
- Event handling
- AJAX
- Browser compatibility
- CSS selectors
- Animation

Example:

```javascript
$("#btn").click(function () {
  $("#message").text("Hello from jQuery!");
});
```

Modern JavaScript:

```javascript
document.querySelector("#btn").addEventListener("click", () => {
  document.querySelector("#message").textContent = "Hello from JavaScript!";
});
```

Modern browsers now provide many capabilities that previously required jQuery, including:

```javascript
document.querySelector();
document.querySelectorAll();
addEventListener();
fetch();
classList;
```

Fetch, for example, is now a promise-based modern replacement for `XMLHttpRequest`.

Saying **“jQuery is dead”** would be inaccurate. jQuery **4.0.0 was released in January 2026**, and the official project currently lists the 4.x branch as fully supported, while 3.x receives only critical fixes. ([jQuery][jQuery])

> **jQuery is less central to modern front-end development despite remaining an actively maintained library.**

---

## Recommended Hands-on Lab Exercises

By the end of Module 7, complete the following practical task:

1. Build an interactive DOM application: Simple **To-Do List**

**Requirements**:

```text
Add Task
   ↓
Create DOM element
   ↓
Display task
   ↓
Mark completed
   ↓
Delete task
```

Practice:

- DOM selection
- Creating elements
- Events
- `classList`
- Removing elements

---

2. Build a **Registration Form** with validation

**Requirements**:

```text
Submit
  ↓
Validate
  ↓
Invalid → Display error
  ↓
Valid → Display success
```

Include:

- Name
- Email
- Password
- Confirm Password
- Age

Practice:

- `submit`
- `preventDefault()`
- DOM manipulation
- validation
- events

---

3. Build a **User Directory**

**Requirements**:

```text
                REST API
                   │
                 fetch()
                   │
                Promise
                   │
                  JSON
                   │
                JavaScript
                   │
                  DOM
                   │
             User Directory
```

Display:

- User name
- Email
- Phone
- Company

Include:

- Loading message
- Error message
- API response
- Dynamic DOM generation

---

4. Build a small API-Based application

**Weather Dashboard**

```text
User enters city
       ↓
JavaScript event
       ↓
Fetch API
       ↓
REST API
       ↓
JSON response
       ↓
Promise / async-await
       ↓
DOM manipulation
       ↓
Display weather
```

[network-requests]: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Network_requests? "Making network requests with JavaScript - Learn web development | MDN"
[XMLHttpRequestAPI]: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest_API? "XMLHttpRequest API - Web APIs | MDN"
[FetchAPI]: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API? "Fetch API - Web APIs | MDN"
[SOP]: https://developer.mozilla.org/en-US/docs/Web/Security/Defenses/Same-origin_policy? "Same-origin policy - Security | MDN"
[CORS]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS? "Cross-Origin Resource Sharing (CORS) - HTTP | MDN"
[jQuery]: https://jquery.com/support/ "jQuery Support | jQuery"
