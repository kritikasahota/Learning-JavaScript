// ==========================================
// FOR LOOP
// ==========================================
// A for loop is used to repeat a block of code a fixed number of times.

// Syntax:
// for(initialization; condition; update) {
//     // code
// }

// Example 1: Print "HELLO" 6 times
for (let count = 0; count <= 5; count++) {
    console.log("HELLO");
}
console.log("Loop has ended.");


// ==========================================
// SUM OF N NUMBERS
// ==========================================
// Add numbers from 0 to n.

let sum = 0;
let n = 7;

for (let i = 0; i <= n; i++) {
    sum = sum + i;
    console.log("Sum =", sum);
}

// ==========================================
// PRINT NUMBERS 1 TO 5
// ==========================================

for (let a = 1; a <= 5; a++) {
    console.log(a);
}

// ==========================================
// TASK 1: PRINT EVEN NUMBERS UP TO 100
// ==========================================
// Even numbers are divisible by 2.

for (let a = 0; a <= 100; a++) {
    if (a % 2 == 0) {
        console.log(a);
    }
}


