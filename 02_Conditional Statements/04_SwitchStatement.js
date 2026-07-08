// =====================================
// JavaScript switch Statement (Notes)
// =====================================

// The switch statement is used to execute one block of code from multiple choices.
//It compares the switch expression with each case value.

// Syntax:
// switch(expression) {
//     case value1:
//         // Code
//         break;
//
//     case value2:
//         // Code
//         break;
//
//     default:
//         // Executes if no case matches
// }


// =====================================
// Example: Grade Calculator
// =====================================

let grade = 80;

switch (true) {

    case (grade >= 80 && grade <= 100):
        console.log("Grade A");
        break;

    case (grade >= 70 && grade <= 79):
        console.log("Grade B");
        break;

    case (grade >= 60 && grade <= 69):
        console.log("Grade C");
        break;

    case (grade >= 50 && grade <= 59):
        console.log("Grade D");
        break;

    case (grade >= 0 && grade <= 49):
        console.log("Grade F");
        break;

    default:
        console.log("Invalid Grade");
}

