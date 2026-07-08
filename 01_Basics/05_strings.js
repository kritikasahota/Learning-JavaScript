let name = "Kritika";
let age = 20;
console.log(`My name is ${name} and age is ${age}`);

let str = "kritika sahota";

console.log(str.length);// Finding string length.
console.log(str[1]); // Accesing  a particular character.
console.log(str[str.length-1]); //Accesing last character.
console.log(str.toUpperCase()); // To capitalize each character.
console.log(str.toLowerCase()); // To convert capital letters to small.
console.log(str.at(9)); // To get value of character at individual place.
console.log(str.indexOf("i")); //Gives first appearance of character in string.
console.log(str.includes("kritika"));
console.log(str.slice(0, 5)); //Returns the part of the string from start to (but not including end).
console.log(str.slice(-4, -1)); // start at the 4th position from the right, end at the 1st from the right.
console.log(str.substring(5, 11)); //Returns the part of the string between start and end (not including end).
console.log(str.substr(2,4)); //Returns the part of the string from start, with the given length.
console.log(str.trim()); //removes (“trims”) spaces from the beginning and end of the string.
console.log(str.replace("kritika", "kriti"));//Used to replace a word with another world.

/*=========================================
      STRINGS ARE IMMUTABLE IN JS
===========================================*/

// Immutable = Cannot be changed after creation

let str1 = "Hello";

console.log("Original String:", str1);

// Trying to change a character
str1[0] = "Y";

console.log("After changing first character:", str);
// Output: Hello (No change)

// String methods return a NEW string
let upper = str1.toUpperCase();

console.log("Original String:", str1); // Hello
console.log("New String:", upper);    // HELLO

// Reassigning is allowed
str1 = "Yellow";

console.log("Reassigned String:", str1); // Yellow



