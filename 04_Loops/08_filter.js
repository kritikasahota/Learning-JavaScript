// ==========================================
// filter() METHOD
// ==========================================
// The filter() method creates a new array containing only the elements that satisfy a given condition.

// Syntax:
// array.filter((element) => {
//     return condition;
// });


// ==========================================
// EXAMPLE 1: FILTER EVEN NUMBERS
// ==========================================

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = arr.filter((item) => {
    return item % 2 == 0;
});

console.log("Array of Even Numbers:", evenNumbers);

// ==========================================
// EXAMPLE 2: FILTER ODD NUMBERS
// ==========================================

const oddNumbers = arr.filter((item) => item % 2 != 0);

console.log("Array of Odd Numbers:", oddNumbers);

// ==========================================
// EXAMPLE 3: FILTER NUMBERS GREATER THAN 5
// ==========================================

const greaterThanFive = arr.filter((item) => item > 5);

console.log(greaterThanFive);


// ==========================================
// SHORT NOTES
// ==========================================
// • filter() creates a new array.
// • It returns only the elements that satisfy
//   the given condition.
// • It does not modify the original array.
// • If no element matches, it returns an empty array.
//
// Difference:
//
// forEach()
// → Performs an action.
// → Returns undefined.
//
// map()
// → Returns a new array with modified values.
//
// filter()
// → Returns a new array containing only
//   the matching elements.
//
// reduce()
// → Returns a single value.
//
// Common Uses:
// ✔ Find even or odd numbers
// ✔ Filter positive/negative values
// ✔ Search data
// ✔ Remove unwanted elements
// ✔ Filter objects based on conditions