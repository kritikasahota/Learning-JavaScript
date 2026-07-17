// ==========================================
// HIGHER-ORDER FUNCTIONS
// ==========================================
// A Higher-Order Function is a function that:
// 1. Accepts another function as an argument, OR
// 2. Returns another function.

// ==========================================
// EXAMPLE 1: FUNCTION AS AN ARGUMENT
// ==========================================
// multipleGreet() is a Higher-Order Function because it accepts another function ('func') as a parameter.

function multipleGreet(func, count) {
  // Calls the passed function 'count' times.
  for (let i = 1; i <= count; i++) {
    func();
  }
}

// Function expression stored in a variable.
let greet = function () {
  console.log("Hello");
};

// Pass the function as an argument.
// multipleGreet() executes greet() 5 times.
multipleGreet(greet, 5);

// ==========================================
// EXAMPLE 2: FUNCTION RETURNING ANOTHER FUNCTION
// ==========================================
// oddEvenTest() is also a Higher-Order Function because
// it returns a new function based on the user's request.

function oddEvenTest(request) {
  if (request == "odd") {
    // Returns a function that checks if a number is odd.
    return function (n) {
      console.log(!(n % 2 == 0));
    };
  } else if (request == "even") {
    // Returns a function that checks if a number is even.
    return function (n) {
      console.log(n % 2 == 0);
    };
  } else {
    console.log("Wrong request");
  }
}

// Request for an odd number checker.
let request = "odd";

// Store the returned function.
let checkNumber = oddEvenTest(request);

// Call the returned function.
checkNumber(7); // true
checkNumber(10); // false
