//Write a program to check if 2 numbers have the same lastdigit.
let num1 = 32;
let num2 = 47852;

if(num1 % 10 === num2 % 10){
    console.log("yes, they have same last digit");
} else{
    console.log("No, they don't have same last digit");
}