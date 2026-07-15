// ==========================================
// break STATEMENT
// ==========================================
// The break statement immediately stops the loop when a specified condition is met.

// Syntax:
// break;

for (let i = 1; i <= 20; i++) {

    if (i === 15) {
        console.log("Breaking...");
        break;      // Exit the loop
    }

    console.log(i);
}


// ==========================================
// continue STATEMENT
// ==========================================
// The continue statement skips the current iteration and moves to the next iteration.

// Syntax:
// continue;

for (let i = 0; i <= 20; i++) {

    if (i === 15) {
        console.log("Continuing...");
        continue;   // Skip only this iteration
    }

    console.log(i);
}

// ==========================================
// SHORT NOTES
// ==========================================
// break
// • Stops the loop immediately.
// • Control moves to the first statement
//   after the loop.
// • Used when the required result is found.

// continue
// • Skips the current iteration only.
// • The loop continues with the next iteration.
// • Used to ignore specific values or conditions.


