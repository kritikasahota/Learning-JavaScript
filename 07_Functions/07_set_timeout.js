// ==========================================
// setTimeout() IN JAVASCRIPT
// ==========================================

// setTimeout() executes a function ONCE after a specified delay (in milliseconds).

// Syntax:
// setTimeout(function, delay);

// ==========================================
// EXAMPLE 1: Basic setTimeout()
// ==========================================

setTimeout(() => {
  console.log("Hello after 2 seconds!");
}, 2000);

// ==========================================
// EXAMPLE 2: Normal Function
// ==========================================

function greet() {
  console.log("Welcome!");
}

setTimeout(greet, 3000);

// ==========================================
// EXAMPLE 3: Passing Arguments
// ==========================================

function display(name) {
  console.log(`Hello, ${name}`);
}

setTimeout(display, 1500, "Hitesh");

// ==========================================
// EXAMPLE 4: Store Timeout ID
// ==========================================

// setTimeout() returns a timeout ID.
const timeoutId = setTimeout(() => {
  console.log("This will run after 5 seconds.");
}, 5000);

console.log(timeoutId);

// ==========================================
// EXAMPLE 5: clearTimeout()
// ==========================================

// clearTimeout() cancels a scheduled timeout.
const timer = setTimeout(() => {
  console.log("This message will not be displayed.");
}, 3000);

clearTimeout(timer);

// ==========================================
// KEY POINTS
// ==========================================

// ✔ Executes code only once.
// ✔ Delay is in milliseconds (1000 ms = 1 second).
// ✔ Returns a timeout ID.
// ✔ clearTimeout() cancels the scheduled execution.
// ✔ Does not block the rest of the program.
