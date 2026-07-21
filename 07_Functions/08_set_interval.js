// ==========================================
// setInterval() IN JAVASCRIPT
// ==========================================

// setInterval() executes a function repeatedly after a specified time interval (in milliseconds).

// Syntax:
// setInterval(function, delay);

// ==========================================
// EXAMPLE 1: Basic setInterval()
// ==========================================

const intervalId = setInterval(() => {
  console.log("Hello!");
}, 2000);

// ==========================================
// EXAMPLE 2: Using a Normal Function
// ==========================================

function greet() {
  console.log("Welcome!");
}

const id = setInterval(greet, 3000);

// ==========================================
// EXAMPLE 3: Passing Arguments
// ==========================================

function display(name) {
  console.log(`Hello, ${name}`);
}

const timer = setInterval(display, 1500, "Hitesh");

// ==========================================
// EXAMPLE 4: clearInterval()
// ==========================================

// clearInterval() stops the repeated execution.

let count = 0;

const stop = setInterval(() => {
  count++;
  console.log(count);

  if (count === 5) {
    clearInterval(stop);
    console.log("Interval Stopped");
  }
}, 1000);

// ==========================================
// KEY POINTS
// ==========================================

// ✔ Executes repeatedly after the given delay.
// ✔ Delay is in milliseconds (1000 ms = 1 second).
// ✔ Returns an interval ID (Timeout object in Node.js).
// ✔ clearInterval() stops the interval.
// ✔ Does not block the rest of the program.
