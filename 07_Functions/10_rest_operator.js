// ==========================================
// REST OPERATOR (...)
// ==========================================

// The rest operator (...) collects multiple values into a single array.
// It is mainly used in function parameters.

// Collects all arguments into the 'num' array.
function calculatePrice(...num) {
  return num;
}

console.log(calculatePrice(200, 400, 500));
// Output: [200, 400, 500]

// val1 gets the first argument.
// val2 gets the second argument.
// The remaining arguments are collected into 'num'.
function calculateCartPrice(val1, val2, ...num) {
  return num;
}

console.log(calculateCartPrice(200, 400, 500, 2000));
