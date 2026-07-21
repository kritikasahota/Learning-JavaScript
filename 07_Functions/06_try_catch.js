// ==========================================
// TRY...CATCH IN JAVASCRIPT
// ==========================================

// try...catch is used to handle runtime errors without stopping the program.

// Syntax:
/*
try {
    // Risky code
}
catch(error) {
    // Handle the error
}
*/

// Example
try {
  console.log(a); // ReferenceError
} catch (error) {
  console.log("Error:", error.message);
}

console.log("Program continues...");

// ==========================================
// finally
// ==========================================

// finally always runs whether an error occurs or not.

try {
  console.log("Try block");
} catch (error) {
  console.log(error);
} finally {
  console.log("Finally block");
}

// ==========================================
// throw
// ==========================================

// throw is used to create custom errors.

try {
  let age = 16;

  if (age < 18) {
    throw new Error("Age must be 18+");
  }

  console.log("Access Granted");
} catch (error) {
  console.log(error.message);
}
