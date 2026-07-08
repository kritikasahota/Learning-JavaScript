/*====================================================
            JAVASCRIPT VARIABLES (var, let, const)
======================================================*/

/*
Definition:
Variables are containers used to store data in JavaScript.

JavaScript provides 3 ways to declare variables:
1. var
2. let
3. const
*/

/*====================================================
                    1. const
======================================================*/

/*
Definition:
- const is used to declare a constant variable.
- Its value cannot be reassigned.
- Must be initialized during declaration.
- Block Scoped.

Syntax:
const variableName = value;
*/

const accountId = 144553;
// accountId = 14444; // not allowed
console.log(accountId);

/*====================================================
                     2. let
======================================================*/

/*
Definition:
- let is used for variables whose value can change.
- Can be reassigned.
- Cannot be redeclared in the same scope.
- Block Scoped.
- Recommended way to declare variables.
*/

let accountEmail = "kritika@google.com";
accountEmail = "ks@ks.com";
console.log(accountEmail);

/*====================================================
                     3. var
======================================================*/

/*
Definition:
- Old way of declaring variables.
- Can be reassigned.
- Can also be redeclared.
- Function Scoped (NOT Block Scoped).
- Avoid using var in modern JavaScript.
*/

var accountPassword = "1234";
console.log(accountPassword);
/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword]);
