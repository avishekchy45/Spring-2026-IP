# Module 6 Notes: JavaScript Fundamentals (ES6+)

## Code Link: [Github](https://github.com/avishekchy45/Spring-2026-IP/tree/main/Module-6)

## JavaScript in a Web Page

- What is JavaScript (JS)?
  - JS is a dynamic, multi-paradigm language, and its core language includes variables, types, operators, control structures, functions, arrays, objects, and modules. ([JavaScript][javascript])

- JS vs HTML vs CSS
  - HTML creates the structure, CSS handles the presentation, and JS drives the interactivity.
- Client-side vs Server-side JS
  - Client-side JS executes directly inside a user's web browser rather than on a web server. It manipulates web pages, builds user interfaces and handles user interactions.
  - Server-side JS runs on the server and has the file system, network, databases, process control, and full system access. It builds APIs, manages data, serves responses to clients and handles business logic.

- Core Capabilities of Client-side JS
  - **DOM Manipulation**: Modifies webpage structure, text, and styles in real-time without refreshing the page.
  - **Event Handling**: Listens and responds to immediate user actions like clicks, keystrokes, and mouse movements.
  - **Asynchronous Fetching**: Uses the Fetch API or AJAX to request background server data without a full reload.
  - **Local Storage**: Persists application data and user preferences directly on the device using localStorage and cookies.
  - **Form Validation**: Evaluates user input formatting locally before submission to reduce server processing load.

- JS engine
  - A computer program that converts human-readable JS code into machine-readable instructions so a device CPU can run it.
  - Blink is a browser rendering engine, whereas V8 is a dedicated JavaScript and WebAssembly engine, and Blink actually uses V8 internally to handle and execute JS.

- ECMAScript and ES6+
  - ECMAScript is the official specification standard, while JS is the actual programming language that implements it.
  - ES6+ refers to ECMAScript 6 (released as ECMAScript 2015) and all subsequent annual version updates that modernised JS. It adds cleaner syntax, better safety features, and powerful tools to build apps easily.

### Basic example ([Code](index.html))

- How JS is included in HTML
- External vs internal JS
- Statement (performs an action) and expression (produces a value)

---

## Variables ([Code](variables.js))

- What is a variable?
- Variable declaration vs initialization
- `let`
- `const`
- `var` — older JS
- Reassignment
- Naming conventions
- Constants
- Scope of variables
- Dynamically typed (same variable can refer to values of different types during execution)

### `let` vs `const` vs `var`

| Feature          | `let`       | `const`     | `var`         |
| ---------------- | ----------- | ----------- | ------------- |
| Can reassign?    | Yes         | No          | Yes           |
| Block scoped?    | Yes         | Yes         | No            |
| Modern usage     | Recommended | Recommended | Mostly legacy |
| Must initialize? | No          | Yes         | No            |

---

## Data Types ([Code](variables.js))

JS has primitive types including **Number, BigInt, String, Boolean, Symbol, Undefined, and Null**; other values are objects. ([JavaScript][javascript])

- Primitive vs object/reference values
- `Number`
- `String`
- `Boolean`
- `Undefined`
- `Null`
- `BigInt`
- `Symbol`
- Objects
- `typeof`

---

## Operators ([Code](operators.js))

- Arithmetic Operators
- Assignment Operators
- Comparison Operators

> **loose equality `==` and loose inequality (`!=`)** compares two values after converting them to a common type, while **strict equality (`===`) and strict inequality (`!==`)** compares both the value and the data type without conversion. Use strict equality rather than loose equality. MDN's JavaScript code-style guidance similarly recommends avoiding loose equality in examples. ([JS Examples][js-examples])

- Logical Operators
- Ternary Operator

---

## Control Structures ([Code](control-structures.js))

- Sequential execution
- Conditional execution
- `if`
- `else`
- `else if`
- `switch`
- `for`
- `while`
- `do...while`
- `break`
- `continue`

---

## Functions ([Code](functions.js))

- Why functions are needed
- Function declaration
- Function invocation
- Parameters
- Arguments
- Return values
- Local variables
- Default parameters
- Function expressions
- Functions as values

Functions are particularly important in JS because they are **first-class objects**: they can be stored in variables, passed to other functions, and returned from functions. ([JavaScript][javascript])

---

## Arrays ([Code](arrays.js))

- What is an array?
- Array indexing
- Zero-based indexing
- `length`
- Adding/removing elements
- Iterating through arrays
- Basic array methods

JS arrays are technically a special kind of object and have a `length` property.

---

## Objects ([Code](objects.js))

- Object concept
- Properties
- Key-value pairs
- Object literals
- Dot notation
- Bracket notation
- Updating properties
- Adding properties
- Methods
- Nested objects

Objects can be introduced as collections of key-value pairs; properties can be accessed through either dot or bracket notation. ([JavaScript][javascript])

---

## Scope ([Code](scope.js))

This is an **important theoretical topic** because it connects variables, functions, `let`, `const`, and later DOM/event programming.

- Global scope
- Function scope
- Block scope
- Local variables
- Scope chain
- `let`/`const` block scope
- `var` function scope
- Basic idea of lexical scope
- Hoisting

---

## Template Literals ([Code](literals.js))

- Backtick syntax
- String interpolation
- `${expression}`
- Multi-line strings

Template literals are particularly useful for constructing strings containing variables and expressions.

---

## Arrow Functions ([Code](arrow-function.js))

This is one of the main **ES6+ features** of the module.

- Arrow function syntax
- Arrow functions vs regular functions
- `this` in arrow function
- Parameters
- Implicit return
- Single vs multiple parameters

---

## JS Modules ([Code](main.js))

- Why modules are needed
- Splitting large programs into multiple files
- `export`
- `import`
- Named exports
- Default exports
- Module scope
- `<script type="module">`

Modern browsers natively support JS modules. `import`/`export` are used to exchange functionality between modules, and browser HTML must load the entry script with `type="module"`.

> When testing browser modules, use a **local development server** rather than simply opening the HTML file with `file://`, because module loading can encounter browser security/CORS restrictions. ([JavaScript Modules][js-modules])

---

## Basic debugging techniques ([Code](debugging.js))

MDN recommends the browser console, `console.log()`, `console.error()`, and the debugger as fundamental JS debugging techniques. ([JavaScript Debugging][js-debugging])

---

## Browser Developer Tools

Modern browsers provide Developer Tools for inspecting HTML/CSS/JS and diagnosing problems. ([Developer Tools][developer-tools])

- **Console**
- **Elements/Inspector**
- **Sources**
- Viewing JS files
- Reading error messages
- Line numbers in errors
- Setting breakpoints
- Stepping through code
- Inspecting variables
- Call Stack
- Scope
- Watch expressions

```javascript
let x = 10;
let y = 20;

x + y;
```

```javascript
console.log("Hello from DevTools!");
```

```javascript
const student = {
  name: "Bill Gates",
  age: 21,
};

console.table(student);
```

The Console can both display logged messages and act as a REPL where you execute JS interactively. ([Chrome DevTools][devtools])

### Breakpoint

```javascript
function calculateTotal(price, quantity) {
  const total = price * quantity;

  return total;
}

const result = calculateTotal(500, 3);

console.log(result);
```

A breakpoint can be placed inside `calculateTotal()` and observe:

- `price`
- `quantity`
- `total`
- Call Stack
- Scope

Browser debuggers allows to pause execution at breakpoints and inspect the current values and execution context.

```javascript
function calculate(a, b) {
  debugger;

  return a + b;
}

console.log(calculate(10, 20));
```

The `debugger` statement causes execution to pause when a debugging facility is available. ([Debugger][debugger])

---

## Recommended Hands-on Lab Exercises

By the end of Module 6, complete the following practical task:

1. Build a simple grading system using objects and functions. You can create an array of student objects, each containing the student's name and marks. Then, write a function that takes the marks as input and returns the corresponding grade based on a grading scale. Finally, loop through the array of students and print their names, marks, and grades. This single task reinforces:

- `const`
- Arrays
- Objects
- Object properties
- Functions
- Arrow functions
- Parameters
- `return`
- `if...else`
- `for...of`
- Template literals
- Scope

[javascript]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Language_overview "JavaScript language overview - JavaScript | MDN"
[js-examples]: https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Code_style_guide/JavaScript "Guidelines for writing JavaScript code examples - MDN Web Docs | MDN"
[js-modules]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules "JavaScript modules - JavaScript | MDN"
[js-debugging]: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Debugging_JavaScript "JavaScript debugging and error handling - Learn web development | MDN"
[developer-tools]: https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools "What are browser developer tools? - Learn web development | MDN"
[devtools]: https://developer.chrome.com/docs/devtools/console "Console overview  |  Chrome DevTools  |  Chrome for Developers"
[debugger]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger "debugger - JavaScript | MDN"
