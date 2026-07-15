// ==========================================
// map() METHOD
// ==========================================
// The map() method creates a new array by applying a function to every element of the original array.

// Syntax:
// array.map((element) => {
//     return modifiedValue;
// });


// ==========================================
// EXAMPLE 1: DOUBLE EACH NUMBER
// ==========================================

const arr = [11, 22, 33, 44, 55, 66, 77, 88, 99];

const doubleNumbers = arr.map((item) => {
    return item * 2;
});

console.log(doubleNumbers);


// ==========================================
// EXAMPLE 2: SQUARE EACH NUMBER
// ==========================================

const squareNumbers = arr.map((item) => {
    return item * item;
});

console.log(squareNumbers);


// ==========================================
// EXAMPLE 3: USING ARROW FUNCTION (SHORT)
// ==========================================

const tripleNumbers = arr.map(item => item * 3);

console.log(tripleNumbers);


// ==========================================
// SHORT NOTES
// ==========================================
// • map() creates a new array.
// • It does not modify the original array.
// • Runs the callback function for every element.
// • The new array has the same length as the original.
//
// Difference:
//
// forEach()
// → Performs an action.
// → Returns undefined.
//
// map()
// → Returns a new modified array.
// → Used when you need transformed data.
//
// Common Uses:
// ✔ Double numbers
// ✔ Square numbers
// ✔ Convert values
// ✔ Extract object properties
// ✔ Format data for display