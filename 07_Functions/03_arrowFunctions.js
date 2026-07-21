//Arrow functions
const add = (a, b) => {
  // This is explicit return because we are specifying return keyword.
  return a + b;
};
console.log(add(1, 2));

const subtract = (a, b) => a - b; // This is implicit return because we are not specifying return keyword.
console.log(subtract(10, 5));

// If we want to return the objects we need to add round brackets before curly braces.
const obj = () => ({
  name: 'john',
  age: 22,
  class: 'bca',
  semester: 5,
});
console.log(obj());

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach((n) => console.log(n));

// ==========================================
// 'this' WITH ARROW FUNCTIONS
// ==========================================

// Arrow functions DO NOT have their own 'this'.
// They inherit 'this' from their surrounding (lexical) scope.


// ==========================================
// EXAMPLE 1: Normal Function
// ==========================================

const user1 = {
    username: "Hitesh",

    welcomeMessage: function () {
        console.log(this.username);
    }
};

user1.welcomeMessage();

// ==========================================
// EXAMPLE 2: Arrow Function as Object Method
// ==========================================

const user2 = {
    username: "Hitesh",

    welcomeMessage: () => {
        console.log(this.username);
    }
};

user2.welcomeMessage();

// Output:
// undefined

// Reason:
// Arrow functions don't have their own 'this'.
// Here, 'this' refers to the surrounding scope,
// not the user2 object.


// ==========================================
// EXAMPLE 3: 'this' in Global Scope
// ==========================================

console.log(this);

// Browser -> Window object
// Node.js -> {}


// ==========================================
// EXAMPLE 4: 'this' Inside an Arrow Function
// ==========================================

const show = () => {
    console.log(this);
};

show();

// Browser -> Window object
// Node.js -> {}


// ==========================================
// KEY POINTS
// ==========================================

// ✔ Normal functions have their own 'this'.
// ✔ Arrow functions do NOT have their own 'this'.
// ✔ Arrow functions inherit 'this' from the surrounding scope.
// ✔ Avoid using arrow functions as object methods when you need 'this'.