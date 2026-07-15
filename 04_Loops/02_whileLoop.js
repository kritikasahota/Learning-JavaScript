// ==========================================
// WHILE LOOP
// ==========================================
// A while loop repeats a block of code as long as the condition is true.

// Syntax:
// while(condition) {
//     // code
//     update;
// }

// Example 1: Print numbers from 1 to 20

let k = 1;

while (k <= 20) {
    console.log(k);
    k++;        // Update the value
}


// ==========================================
// NESTED WHILE LOOP
// ==========================================
// A while loop inside another while loop is called a Nested While Loop.
// Outer loop runs first.
// Inner loop completes all its iterations
// for every iteration of the outer loop.

// Example: Print multiplication tables from 1 to 10

let i = 1;

while (i <= 10) {
    console.log("Table of " + i);

    let j = 1;

    while (j <= 10) {
        console.log(`${i} × ${j} = ${i * j}`);
        j++;
    }

    console.log("----------------");
    i++;
}


