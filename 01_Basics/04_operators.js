let num = 1;
num = -num;
console.log(num);

//Arithmetic operators
let a = 4;
let b = 4;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a % b); //returns remainder
console.log(a / b); //returns quotient

//concatenation
let str1 = "kritika";
let str2 = "sahota";
console.log(str1 + " " + str2);

//Exponent
// a**b raises a to the power b
console.log(a ** b);

//Assignment operators
let operator = 10;

operator += 5
console.log(operator);
operator -= 5;
console.log(operator);
operator *= 5;
console.log(operator);
operator /= 5;
console.log(operator);
operator %= 5;
console.log(operator);
operator **= 5;
console.log(operator);

// Comparison Operators

console.log(2 == 2);  // It only compares the value.
console.log(2==='2');  // it compares the value and data type as well.
console.log(2 != 2);
console.log(2 !== '2');
console.log(5 > 2);
console.log(10 < 5);
console.log(1 >= 1);
console.log(2 <= 2);
console.log( 'Z' > 'A' ); // true
console.log( 'Glow' > 'Glee' ); // true
console.log( 'Bee' > 'Be' ); // true

console.log( '2' > 1 ); // true, string '2' becomes a number 2
console.log( '01' == 1 ); // true, string '01' becomes a number 1

// bitwise operators 

let d = 5;
let g = 10;

let c = ~d; //~d = -(d + 1)
console.log(c);

//Increment and Decrement Operators

let x = 5;

// Post Increment -- Returns the current value first, then increases it by 1.
console.log(x++); // 5
console.log(x);   // 6

// Pre Increment -- Increases the value first, then returns the updated value.
console.log(++x); // 7
console.log(x);   // 7

// Post Decrement -- Returns the current value first, then decreases it by 1.
console.log(x--); // 7
console.log(x);   // 6

// Pre Decrement -- Decreases the value first, then returns the updated value.
console.log(--x); // 5
console.log(x);   // 5
