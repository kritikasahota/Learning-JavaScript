// ==========================================
// reduce() METHOD
// ==========================================
// The reduce() method reduces an array to a single value by applying a callback function to each element.

// Syntax:
// array.reduce((accumulator, currentValue) => {
//     return result;
// }, initialValue);


// ==========================================
// EXAMPLE 1: SUM OF ARRAY ELEMENTS
// ==========================================

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbers.reduce((acc, curr) => acc + curr);

console.log(sum); // 55


// ==========================================
// HOW reduce() WORKS
// ==========================================
//
// acc = accumulator
// curr = current value
//
// Step-by-step:
//
// acc = 1, curr = 2  → 3
// acc = 3, curr = 3  → 6
// acc = 6, curr = 4  → 10
// ...
// Final Result = 55


// ==========================================
// EXAMPLE 2: TOTAL PRICE OF CART
// ==========================================

const cart = [
    { id: 1, name: "Product1", price: 130 },
    { id: 2, name: "Product2", price: 150 },
    { id: 3, name: "Product3", price: 175 }
];

const totalPrice = cart.reduce(
    (acc, curr) => acc + curr.price,
    0
);

console.log(`The total price is: $${totalPrice}`);

// ==========================================
// EXAMPLE 3: FIND MAXIMUM NUMBER
// ==========================================

const arr = [10, 45, 20, 90, 35];

const max = arr.reduce((acc, curr) => {
    return curr > acc ? curr : acc;
});

console.log(max); // 90


// ==========================================
// SHORT NOTES
// ==========================================
// • reduce() converts an array into a single value.
// • Returns one final result.
// • Can be used for sum, product, max, min, etc.
// • Does not modify the original array.
//
// Parameters:
// acc  → Accumulator (stores result)
// curr → Current element
//
// Difference:
//
// forEach()
// → Performs an action.
// → Returns undefined.
//
// map()
// → Returns a new array.
//
// reduce()
// → Returns a single value.
//
// Common Uses:
// ✔ Sum of numbers
// ✔ Total cart price
// ✔ Find maximum/minimum value
// ✔ Count occurrences
// ✔ Group data