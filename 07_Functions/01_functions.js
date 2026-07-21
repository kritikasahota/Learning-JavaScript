function sayMyName() {
  console.log("k");
  console.log("R");
  console.log("I");
  console.log("T");
  console.log("I");
  console.log("k");
  console.log("A");
}
sayMyName();

function sum(a, b) {
  let sum = a + b;
  console.log("Sum : ", sum);
}
sum(3, 4);

function loginUserMessage(username) {
  if (username === undefined) {
    console.log("please enter a username");
  }
  console.log(`${username} has logged in`);
}
loginUserMessage("Kritika");

// ==========================================
// DEFAULT PARAMETERS
// ==========================================

// Default parameters provide default values if no argument (or undefined) is passed.

// Syntax:
// function functionName(parameter = defaultValue) { }

// Example
function greet(name = "Guest") {
  console.log(`Hello, ${name}`);
}

greet("Hitesh"); // Hello, Hitesh
greet(); // Hello, Guest

// ==========================================
// Passing objects as parameters
// ==========================================
const user = {
  name: "kritika",
  price: 220,
};
function handleObject(anyobject) {
  console.log(`username is ${anyobject.name} and price is ${anyobject.price}`);
}
handleObject(user);
handleObject({
  name: "tajinder",
  price: 200,
});

// ==========================================
// Passing arrays as parameters
// ==========================================
const array = [1, 2, 3, 4];
function returnSecondValue(getArray) {
  return getArray[1];
}
console.log(returnSecondValue(array));
console.log(returnSecondValue([200, 400, 500, 1000]));
