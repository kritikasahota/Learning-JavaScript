// ==========================================
// alert()
// ==========================================
// alert() displays a pop-up message.
// It is used to show information or warnings.
// The user must click "OK" to continue.

alert("Welcome to JavaScript!");

// Example
alert("Your form has been submitted successfully.");


// ==========================================
// prompt()
// ==========================================
// prompt() displays an input box.
// It allows the user to enter data.
// It returns the entered value as a STRING.
// If the user clicks "Cancel", it returns null.

let name = prompt("Enter your name:");
console.log(name);


// ------------------------------------------
// Example 1: Greeting the User
// ------------------------------------------

let userName = prompt("What is your name?");
alert("Welcome " + userName + "!");


// ------------------------------------------
// Example 2: Taking Age as Input
// ------------------------------------------

let age = prompt("Enter your age:");
console.log("Your age is " + age);

// Note:
// Even if you enter 20, prompt() returns "20" (a string).


// ------------------------------------------
// Example 3: Converting String to Number
// ------------------------------------------

let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));

let sum = num1 + num2;

alert("Sum = " + sum);


// ------------------------------------------
// Example 4: Multiplication
// ------------------------------------------

let a = Number(prompt("Enter first number:"));
let b = Number(prompt("Enter second number:"));

alert("Product = " + (a * b));


// ------------------------------------------
// Example 5: Checking Cancel
// ------------------------------------------

let city = prompt("Enter your city:");

if (city === null) {
    alert("You clicked Cancel.");
} else {
    alert("You live in " + city);
}


