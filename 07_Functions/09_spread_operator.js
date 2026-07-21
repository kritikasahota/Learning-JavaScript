// ==========================================
// SPREAD OPERATOR WITH ARRAY LITERALS
// ==========================================

// Spread (...) expands the elements of an array.

// Example 1: Copy an Array
let arr1 = [1, 2, 3];

let arr2 = [...arr1];

console.log(arr2); // [1, 2, 3]

// Example 2: Merge Arrays
let nums1 = [1, 2];
let nums2 = [3, 4];

let merged = [...nums1, ...nums2];

console.log(merged); // [1, 2, 3, 4]

// Example 3: Add Elements
let numbers = [2, 3];

let newNumbers = [1, ...numbers, 4];

console.log(newNumbers); // [1, 2, 3, 4]

// ==========================================
// SPREAD OPERATOR WITH OBJECT LITERALS
// ==========================================

// Spread (...) copies or merges object properties.

// Example 1: Copy an Object
let user = {
  name: "Hitesh",
  age: 25,
};

let copyUser = {
  ...user,
};

console.log(copyUser);

// Example 2: Merge Objects
let obj1 = {
  a: 1,
  b: 2,
};

let obj2 = {
  c: 3,
  d: 4,
};

let mergedObj = {
  ...obj1,
  ...obj2,
};

console.log(mergedObj);

// Example 3: Add a New Property
let student = {
  name: "Kritika",
  course: "B.Tech",
};

let updatedStudent = {
  ...student,
  semester: 5,
};

console.log(updatedStudent);
