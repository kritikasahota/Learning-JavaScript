"use strict"; // Treat all JavaScript code as modern (strict) mode

/*=========================================
        JAVASCRIPT DATA TYPES
=========================================*/

// Number → Stores integer & decimal values
const n = 1234;
console.log(n);

// BigInt → Stores very large integers
const bigInt = 1234567899876n;
console.log(bigInt);

// String → Stores text
let str = "hello";
console.log(str);

// Boolean → true or false
let booleanValue = true;
let booleanValue_2 = false;
console.log(booleanValue, booleanValue_2);

// Null → Intentional empty value
let age = null;
console.log(age);

// Undefined → Variable declared but not assigned
let age2;
console.log(age2);

// Object → Collection of key-value pairs
let myObj = {
    name: "hitesh",
    age: 22,
};
console.log(myObj);

// Symbol → Creates unique identifiers
const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId); // false (every Symbol is unique)

/*=========================================
          typeof Operator 
   Returns the data type of a value.
=========================================*/

console.log(typeof n);             // number
console.log(typeof bigInt);        // bigint
console.log(typeof str);           // string
console.log(typeof booleanValue);  // boolean
console.log(typeof age);           // object (JavaScript bug)
console.log(typeof age2);          // undefined
console.log(typeof myObj);         // object
console.log(typeof id);            // symbol
