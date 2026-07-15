// ==========================================
// FOR...OF LOOP
// ==========================================
// The for...of loop is used to iterate over iterable objects like Arrays, Strings, Maps, and Sets.

// Syntax:
// for (const variable of iterable) {
//     // code
// }

// ==========================================
// EXAMPLE 1: LOOP THROUGH AN ARRAY
// ==========================================

const items = [11, 22, 33, 44, 55, 66];

for (const item of items) {
  console.log(item);
}

// ==========================================
// EXAMPLE 2: LOOP THROUGH AN ARRAY OF OBJECTS
// ==========================================

const users = [
  { name: "John Doe" },
  { name: "Peter Parker" },
  { name: "Tony Stark" },
];

for (const user of users) {
  console.log(user.name);
}

// ==========================================
// EXAMPLE 3: LOOP THROUGH A STRING
// ==========================================

const str = "I am a programmer";

for (const letter of str) {
  console.log(letter);
}

// ==========================================
//  NESTED FOR OF LOOP
// ==========================================
console.log("Print All Elements");

for (let row of arr) {
  for (let value of row) {
    console.log(value);
  }
}

// ==========================================
// SHORT NOTES
// ==========================================
// • for...of is used to iterate over iterable objects.
// • It returns the values (not indexes).
// • Works with Arrays, Strings, Maps, and Sets.
// • No need to use an index variable.
//
// Difference:
//
// for loop
// → Uses index.
// → Best when index is needed.
//
// for...of loop
// → Gives values directly.
// → Simpler for reading array or string elements.
//
// Common Uses:
// ✔ Print array elements
// ✔ Access object properties in an array
// ✔ Read characters of a string
// ✔ Iterate through Maps and Sets
