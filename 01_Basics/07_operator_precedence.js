"use strict";

/*====================================================
        JAVASCRIPT OPERATOR PRECEDENCE
======================================================*/

/*
Definition:
Operator Precedence determines the order in which operators are evaluated in an expression.
Operators with higher precedence are evaluated first.
If operators have the same precedence, JavaScript follows Associativity (left-to-right or right-to-left).
*/

/*====================================================
                BASIC EXAMPLES
======================================================*/

// Multiplication has higher precedence than Addition
console.log(2 + 3 * 4);      // 14

// Parentheses have the highest precedence
console.log((2 + 3) * 4);    // 20

// Division before Addition
console.log(20 + 10 / 2);    // 25

// Modulus before Addition
console.log(10 + 9 % 4);     // 11

/*====================================================
            LEFT TO RIGHT ASSOCIATIVITY
======================================================*/

/*
Operators with the same precedence are evaluated from Left to Right.
*/

console.log(20 / 5 * 2);     // 8
// (20 / 5) = 4
// 4 * 2 = 8

console.log(10 - 3 + 2);     // 9
// (10 - 3) = 7
// 7 + 2 = 9

/*====================================================
            RIGHT TO LEFT ASSOCIATIVITY
======================================================*/

/*
Assignment (=) is evaluated from Right to Left.
*/

let a, b, c;

a = b = c = 10;

console.log(a); // 10
console.log(b); // 10
console.log(c); // 10

/*====================================================
            COMPLEX EXPRESSIONS
======================================================*/

console.log(5 + 2 * 3 - 1);      // 10
// 2 * 3 = 6
// 5 + 6 = 11
// 11 - 1 = 10

console.log((5 + 2) * (3 - 1));  // 14

console.log(10 + 4 / 2 ** 2);    // 11
// 2 ** 2 = 4
// 4 / 4 = 1
// 10 + 1 = 11

/*====================================================
        COMMON PRECEDENCE ORDER
(Highest → Lowest)
======================================================*/

/*
1. ()           Parentheses

2. ++  --       Pre Increment / Decrement

3. **           Exponentiation

4. *  /  %      Multiplication, Division, Modulus

5. +  -         Addition, Subtraction

6. < <= > >=    Relational

7. == != === !== Equality

8. &&           Logical AND

9. ||           Logical OR

10. ?:          Ternary Operator

11. =           Assignment
*/

