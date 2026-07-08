// ===============================
// JavaScript if Statement (Notes)
// ===============================

// The if statement is used to execute a block of code only when a specified condition is true.

// Syntax:
// if (condition) {
//     // code to execute
// }

// Example 1: Check Voting Eligibility

let age = 25;

if (age >= 18) {
    console.log("You can vote");
}


// ===============================
// Example 2: Theme Color Selection
// ===============================

let mode = "dark";
let color;

// If mode is dark, assign black color.
if (mode === "dark") {
    color = "black";
}

// If mode is light, assign white color.
if (mode === "light") {
    color = "white";
}

// Display the selected color.
console.log(color);

// Output:
// black

// Explanation:
// mode = "dark"
//
// First if:
// mode === "dark" → true
// color becomes "black"
//
// Second if:
// mode === "light" → false
// This block is skipped.
//
// Final Output:
// black
