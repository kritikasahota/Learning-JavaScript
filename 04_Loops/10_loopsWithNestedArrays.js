// ==========================================
// NESTED ARRAYS & NESTED LOOPS IN JAVASCRIPT
// ==========================================

// A nested array (2D array) is an array that contains one or more arrays inside it.

// Example:
let arr = [
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90],
];

console.log("Original Nested Array:");
console.log(arr);

// ==========================================
// Syntax
// ==========================================

/*
for(let i = 0; i < arr.length; i++){

    for(let j = 0; j < arr[i].length; j++){

        console.log(arr[i][j]);

    }

}

Outer Loop  -> Traverses rows.
Inner Loop  -> Traverses columns/elements.

arr.length      -> Number of rows
arr[i].length   -> Number of columns in current row
arr[i][j]       -> Access individual element
*/

// ==========================================
// Example 1 : Print All Elements
// ==========================================

console.log("\nExample 1 : Print All Elements");

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}

// ==========================================
// Example 2 : Print Row by Row
// ==========================================

console.log("\nExample 2 : Print Row by Row");

for (let i = 0; i < arr.length; i++) {
  console.log("Row", i + 1);

  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}

// ==========================================
// Example 3 : Print Matrix
// ==========================================

console.log("\nExample 3 : Matrix");

for (let i = 0; i < arr.length; i++) {
  let row = "";

  for (let j = 0; j < arr[i].length; j++) {
    row += arr[i][j] + " ";
  }

  console.log(row);
}

// ==========================================
// Example 4 : Find Sum
// ==========================================

console.log("\nExample 4 : Sum");

let sum = 0;

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    sum += arr[i][j];
  }
}

console.log("Sum =", sum);

// ==========================================
// Example 5 : Count Even Numbers
// ==========================================

console.log("\nExample 5 : Count Even Numbers");

let count = 0;

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    if (arr[i][j] % 2 === 0) {
      count++;
    }
  }
}

console.log("Even Numbers =", count);

// ==========================================
// Example 7 : Search an Element
// ==========================================

console.log("\nExample 7 : Search Element");

let key = 50;
let found = false;

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    if (arr[i][j] === key) {
      console.log(key + " Found at Row " + i + ", Column " + j);

      found = true;
    }
  }
}

if (!found) {
  console.log("Element Not Found");
}

// ==========================================
// Example 8 : Largest Element
// ==========================================

console.log("\nExample 8 : Largest Element");

let largest = arr[0][0];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    if (arr[i][j] > largest) {
      largest = arr[i][j];
    }
  }
}

console.log("Largest =", largest);
