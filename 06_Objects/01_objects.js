// ==========================================
// OBJECTS IN JAVASCRIPT
// ==========================================
// An object is a collection of key-value pairs.
// Keys are called properties and values can be of any data type
// (string, number, boolean, array, function, another object, etc.).

// ==========================================
// SYMBOL
// ==========================================
// Symbol is a unique and immutable primitive value.
// It is often used as a unique object property key.

const mySym = Symbol("key 1");

// ==========================================
// 1st WAY OF OBJECT CREATION --> Object Literals
// ==========================================

const JsUser = {
  // Normal properties
  name: "kritika",
  age: 20,

  // Symbol property
  // Square brackets are required while using Symbol as a key.
  [mySym]: "key 1",

  // Multi-word property names must be written inside quotes.
  "like birds": true,
};

// Print the complete object
console.log(JsUser);

// Dot notation is used for normal property names.
console.log(JsUser.name);

// Bracket notation is required for Symbol keys.
console.log(JsUser[mySym]);

// ==========================================
// ADDING NEW PROPERTIES
// ==========================================

// Add a new property using dot notation.
JsUser.isAdmin = true;

// Add a multi-word property using bracket notation.
JsUser["like singing"] = false;

// Access multi-word property using brackets.
console.log(JsUser["like birds"]);

// ==========================================
// DELETING A PROPERTY
// ==========================================

// delete removes a property from an object.
delete JsUser.age;

// ==========================================
// UPDATING / ADDING PROPERTY
// ==========================================

// Add a new property.
JsUser.email = "kritika@google.com";

// ==========================================
// OBJECT.FREEZE()
// ==========================================
// Prevents any changes to the object.
// After freezing, properties cannot be added,
// removed, or modified.

// Object.freeze(JsUser);

// ==========================================
// ADDING METHODS (FUNCTIONS INSIDE OBJECT)
// ==========================================

// Functions stored inside an object are called methods.

JsUser.greet = function () {
  console.log("Hello JS User");
};

// Calling the method
console.log(JsUser.greet());

// ==========================================
// this KEYWORD
// ==========================================
// 'this' refers to the current object.

JsUser.greetTwo = function () {
  console.log(`Hello JS User, ${this.name}`);
};

console.log(JsUser.greetTwo());

// ==========================================
// 2nd WAY OF OBJECT CREATION --> Object Constructor
// ==========================================

// Create an empty object.
const user = {};

// Add properties one by one.
user.id = "123abc";
user.name = "kritika";
user.isLoggedIn = false;

console.log(user);

// ==========================================
// OBJECT METHODS
// ==========================================

// Object.keys()
// Returns an array containing all keys.
console.log(Object.keys(user));

// Object.values()
// Returns an array containing all values.
console.log(Object.values(user));

// Object.entries()
// Returns an array of [key, value] pairs.
console.log(Object.entries(user));

// hasOwnProperty()
// Checks whether a property exists in the object.
console.log(user.hasOwnProperty("isLoggedIn"));

// ==========================================
// NESTED OBJECTS
// ==========================================
// Objects can contain other objects.

const regularUser = {
  email: "some@gmail.com",

  fullname: {
    userfullname: {
      firstname: "kritika",
      lastname: "sahota",
    },
  },
};

// Accessing nested object properties.
console.log(regularUser.fullname.userfullname.firstname);
console.log(regularUser.fullname.userfullname.lastname);

// ==========================================
// COMBINING (MERGING) OBJECTS
// ==========================================

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

// ==========================================
// USING SPREAD OPERATOR (...)
// ==========================================
// Copies properties from both objects into a new object.

const obj3 = {
  ...obj1,
  ...obj2,
};

console.log(obj3);

// ==========================================
// USING Object.assign()
// ==========================================
// Syntax:
// Object.assign(target, source1, source2, ...)

const obj4 = Object.assign({}, obj1, obj2);

console.log(obj4);

// ==========================================
// ARRAY OF OBJECTS
// ==========================================
// An array can store multiple objects.

const users = [
  {
    id: 1,
    email: "k@gmail.com",
  },
  {
    id: 2,
    email: "t@gmail.com",
  },
  {
    id: 3,
    email: "h@gmail.com",
  },
  {
    id: 4,
    email: "s@gmail.com",
  },
];

// Accessing an object inside an array.
console.log(users[2].email);

// ==========================================
// OBJECT DESTRUCTURING
// ==========================================
// Destructuring extracts object properties
// into individual variables.

// Example object
const person = {
  name: "Kritika",
  age: 20,
  profesion: "Student",
  girlfriend: false,
  sport: "Badminton",
};

// Destructuring
const { name, age, profesion, girlfriend, sport } = person;

// Accessing variables directly
console.log("Name:", name);
console.log("Age:", age);
console.log("Profession:", profesion);
console.log("Girlfriend:", girlfriend);
console.log("Sport:", sport);

// ==========================================
// WHY USE DESTRUCTURING?
// ==========================================
// Without destructuring, we need to access
// each property using the object name repeatedly.

console.log(person.name);
console.log(person.age);
console.log(person.profesion);
console.log(person.girlfriend);
console.log(person.sport);


