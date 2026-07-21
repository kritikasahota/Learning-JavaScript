//=========================
// POP OPERATION
//=========================
// pop() removes the last element from an arra and returns the removed element.
let fruits = ["Apple", "Orange", "Pear"];
console.log(fruits.pop());
console.log(fruits);

//==========================
// PUSH OPERATION
//==========================
// push() adds one or more elements to the end of an array and returns the new length.
fruits = ["Apple", "Orange"];
fruits.push("Pear");
console.log(fruits);

//========================
// SHIFT OPERATION
//========================
// shift() removes the first element from an array and returns the removed element.
fruits = ["Apple", "Orange", "Pear"];
console.log(fruits.shift());
console.log(fruits);

//=========================
// UNSHIFT OPERATION
//=========================
// unshift() adds one or more elements to the beginning of an array.
fruits = ["Orange", "Pear"];
fruits.unshift("Apple");
console.log(fruits);

//========================
// indexOf() METHOD
//========================
// indexOf() returns the index of the first occurrence of an element. Returns -1 if not found.
let colors = ["red", "yellow", "blue"];
console.log(colors.indexOf("yellow"));
console.log(colors.indexOf("green"));

//===================
// includes()
//===================
// includes() checks whether an element exists in the array and returns true or false.
console.log(colors.includes("red"));
console.log(colors.includes("green"));

//===================
// toString()
//===================
// toString() converts an array into a comma-separated string.
let arr3 = [1, 2, 3];
console.log(arr3);
console.log(String(arr3));

//=======================
// SLICE METHOD
//=======================
// slice(start, end) returns a portion of an array.
// It does NOT change the original array.
let marvelHeroes = ["thor", "spiderman", "ironman", "antman", "Dr.Strange"];
console.log(marvelHeroes.slice(1, 3));

//======================
// SPLICE METHOD
//======================
// splice() adds, removes, or replaces elements.
// It changes the original array.
let arr4 = [1, 2, 3, 4, 5, 6, 7];
arr4.splice(2, 2, 101, 102);
//arr4.splice(2,0,101); // Add
//arr4.splice(2,1);     // Delete
//arr4.splice(2,3,104); // Replace
console.log(arr4);

//======================
// CONCATENATION
//=======================
// concat() joins two or more arrays and returns a new array.
let arr5 = [1, 2];
console.log(arr5.concat([3, 4]));
console.log(arr5.concat([3, 4], [5, 6]));
console.log(arr5.concat([3, 4], 5, 6));

//================
// REVERSE
//================
// reverse() reverses the order of elements in the original array.
console.log(colors.reverse());

//==========================
// sort() METHOD
//==========================
// sort() sorts the elements of an array.
// By default, sorting is alphabetical.
// It changes the original array.

let fruits = ["Banana", "Apple", "Mango"];
fruits.sort();
console.log(fruits);

// Sorting Numbers (Wrong Way)
let numbers = [100, 25, 5, 10];
numbers.sort();
console.log(numbers);

// Ascending Order
numbers.sort((a, b) => a - b);
console.log(numbers);

// Descending Order
numbers.sort((a, b) => b - a);
console.log(numbers);

//=====================
// TASK 1
//=====================
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

companies.push("Amazon");
console.log(companies);

//======================
// MAP
//======================
// map() creates a new array by applying a function to every element of the original array.
let nums = [67, 52, 39];

nums.map((val) => {
  console.log(val);
});

let newArr = nums.map((val) => {
  return val * val;
});
console.log(newArr);

//================
// FILTER
//================
// filter() creates a new array containing only the elements that satisfy a condition.
let nums_ = [1, 2, 3, 4, 5, 6, 7];

let evenArr = nums_.filter((val) => {
  return val % 2 == 0;
});
console.log(evenArr);

//=====================
// REDUCE
//=====================
// reduce() reduces an array to a single value by applying a callback function.
let num_1 = [1, 2, 3, 4];

const output = num_1.reduce((res, curr) => {
  return res + curr;
});

console.log(output);

// ==========================================
// every() METHOD
// ==========================================

// every() checks whether ALL elements satisfy a given condition.
// It returns true or false.

// Syntax:
// array.every((element) => condition);

// ==========================================
// EXAMPLE 1: Check Positive Numbers
// ==========================================

let numbers = [2, 4, 6, 8];

let result = numbers.every((num) => {
  return num % 2 === 0;
});

console.log(result); // true

// ==========================================
// EXAMPLE 2: Condition Fails
// ==========================================

numbers = [2, 4, 5, 8];

result = numbers.every((num) => {
  return num % 2 === 0;
});

console.log(result); // false

// ==========================================
// SOME() METHOD
// ==========================================

// some() checks whether AT LEAST ONE element satisfies a given condition.
// It returns true or false.

// Syntax:
// array.some((element) => condition);

// ==========================================
// EXAMPLE 1: One Element Matches
// ==========================================

numbers = [1, 3, 5, 8];

result = numbers.some((num) => {
  return num % 2 === 0;
});

console.log(result); // true

// ==========================================
// EXAMPLE 2: No Element Matches
// ==========================================

numbers = [1, 3, 5, 7];

result = numbers.some((num) => {
  return num % 2 === 0;
});

console.log(result); // false
