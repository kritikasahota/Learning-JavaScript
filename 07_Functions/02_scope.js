// ==========================================
// SCOPE IN JAVASCRIPT
// ==========================================

// let and const create block-scoped variables.

let x = 10;
const y = 20;

console.log(x, y); // 10 20

// ==========================================
// BLOCK SCOPE
// ==========================================
// Variables declared inside {} are accessible only within that block.

if (true) {
  let a = 10;
  const b = 20;

  console.log(a); // 10
  console.log(b); // 20
}

// console.log(a); // Error: a is not defined
// console.log(b); // Error: b is not defined

// ==========================================
// GLOBAL SCOPE
// ==========================================
// Variables declared outside any block or function are accessible everywhere.

let c = 300;

if (true) {
  console.log(c); // 300
}

// ==========================================
// SAME VARIABLE NAME, DIFFERENT SCOPES
// ==========================================
// The inner variable shadows (hides) the outer variable inside the block.

let d = 300;

if (true) {
  let d = 10;
  console.log(d); // 10 (Block variable)
}

console.log(d); // 300 (Global variable)

// ==========================================
// NESTED BLOCKS (INNER SCOPE)
// ==========================================
// An inner block can access variables from its outer block.

let e = 300;

if (true) {
  let e = 10;

  if (true) {
    console.log(e); // 10
  }
}

console.log(e); // 300

// ==========================================
// LEXICAL SCOPING
// ==========================================
// Lexical Scoping means an inner function can access variables of its outer function.
// The outer function CANNOT access variables declared inside the inner function.

function one() {
  const username = "kritika";

  function two() {
    const website = "youtube";

    // Inner function can access variables of its parent function.
    console.log(username); // kritika
    console.log(website); // youtube
  }

  two();

  // console.log(website);
  // Error: website is not defined
}

one();

// Another Lexical Scoping Example

function parent() {
  let a = 10;

  function child() {
    let b = 20;

    // Child function can access both parent and its own variables.
    console.log(a); // 10
    console.log(b); // 20
  }

  child();

  // console.log(b);
  // Error: b is not defined
}

parent();

// ==========================================
// HOISTING
// ==========================================
// Function declarations are hoisted so they can be called before they are defined.

console.log(addone(5)); // 6

function addone(num) {
  return num + 1;
}

// ==========================================
// FUNCTION EXPRESSIONS
// ==========================================
// Function expressions are NOT hoisted.
// Calling them before declaration causes an error.

// addTwo(5); // ReferenceError

const addTwo = function (num) {
  return num + 2;
};

console.log(addTwo(5)); // 7
