// ==========================================
// ARRAYS IN JAVASCRIPT
// ==========================================
// An array is used to store multiple values in a single variable.
// Arrays are mutable, which means their elements can be changed after creation.

// ==========================================
// CREATING ARRAYS
// ==========================================

// Using Array constructor
let arr = new Array();

// Using array literal (Recommended)
let arr1 = [];


// ==========================================
// DECLARING AN ARRAY
// ==========================================

let fruit = ["Apple", "Orange", "Plum"];
console.log(fruit);

// ==========================================
// ACCESSING ARRAY ELEMENTS
// ==========================================
// Array indexing starts from 0.

console.log(fruit[0]); // Apple
console.log(fruit[1]); // Orange
console.log(fruit[2]); // Plum


// ==========================================
// MODIFYING ARRAY ELEMENTS
// ==========================================
// Arrays are mutable.

fruit[2] = "Pear";   // Replace an element
console.log(fruit);

// ==========================================
// ADDING A NEW ELEMENT
// ==========================================

fruit[3] = "Lemon";
console.log(fruit);

// ==========================================
// FINDING ARRAY LENGTH
// ==========================================

console.log(fruit.length);

// ==========================================
// ACCESSING SPECIFIC ELEMENTS
// ==========================================

// Access element at index 2
console.log(fruit[2]);

// Access last element
console.log(fruit[fruit.length - 1]);

// Modern way to access last element
console.log(fruit.at(-1));


// ==========================================
// MULTIDIMENSIONAL ARRAY
// ==========================================
// An array inside another array.

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Access row 1, column 2
console.log(matrix[0][1]); // 2
