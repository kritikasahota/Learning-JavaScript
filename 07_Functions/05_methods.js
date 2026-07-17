// ==========================================
// METHODS IN JAVASCRIPT
// ==========================================
// A method is a function stored as a property of an object.
// Methods are used to perform actions related to that object.

// Syntax:
// const objectName = {
//     methodName: function(parameters) {
//         // code
//     }
// };

const calculator = {

    // Method to add two numbers.
    add: function(a, b) {
        return a + b;
    },

    // Method to subtract two numbers.
    sub: function(a, b) {
        return a - b;
    },

    // Method to multiply two numbers.
    mul: function(a, b) {
        return a * b;
    }
};


console.log(calculator.add(10, 5)); 
console.log(calculator.sub(10, 5)); 
console.log(calculator.mul(10, 5)); 