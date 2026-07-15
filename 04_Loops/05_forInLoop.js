// ==========================================
// FOR...IN LOOP
// ==========================================
// The for...in loop is used to iterate over the keys (properties) of an object.
// It can also be used with arrays, but for arrays
// for...of is usually preferred.

// Syntax:
// for (const key in object) {
//     // code
// }


// ==========================================
// EXAMPLE 1: LOOP THROUGH AN OBJECT
// ==========================================

const obj = {
    fruit1: "Apple",
    fruit2: "Banana",
    fruit3: "Orange",
    fruit4: "Litchi",
    fruit5: "Melon",
};

for (const key in obj) {
    console.log(key, obj[key]);
}


// ==========================================
// EXAMPLE 2: LOOP THROUGH AN ARRAY
// ==========================================
// for...in returns the indexes of the array.

const colorArr = ["red", "green", "blue", "yellow", "purple"];

for (const index in colorArr) {
    console.log(index, colorArr[index]);
}


// ==========================================
// forEach() METHOD
// ==========================================
// forEach() executes a function once for every element in an array.

// Syntax:
// array.forEach(function(element) {
//     // code
// });


// ==========================================
// EXAMPLE 1: forEach() WITH SIMPLE ARRAYS
// ==========================================

const socials = ["Instagram", "Facebook", "LinkedIn", "Twitter"];

socials.forEach((item) => {
    console.log(item);
});

const cars = ["Mercedes", "Rolls Royce", "BMW"];

cars.forEach((car) => console.log(car));


// ==========================================
// EXAMPLE 2: forEach() WITH ARRAY OF OBJECTS
// ==========================================

const socialObj = [
    { name: "Instagram", url: "https://instagram.com" },
    { name: "Facebook", url: "https://facebook.com" },
    { name: "LinkedIn", url: "https://linkedin.com" },
    { name: "Twitter", url: "https://twitter.com" },
];

socialObj.forEach((item) => {
    console.log(item.name, item.url);
});


// ==========================================
// EXAMPLE 3: PASSING A FUNCTION
// ==========================================

const carObj = [
    { name: "Mercedes GLS", model: 2019 },
    { name: "BMW", model: 2020 },
    { name: "Volkswagen", model: 2021 },
    { name: "Rolls Royce", model: 2023 },
];

function getElements(item) {
    console.log(item);
}

socialObj.forEach(getElements);
carObj.forEach(getElements);


// ==========================================
// SHORT NOTES
// ==========================================

// for...in Loop
// • Used for Objects.
// • Returns keys (property names).
// • Can be used with arrays but returns indexes.

// forEach() Method
// • Used only with arrays.
// • Executes a callback function for every element.
// • Does not return a new array.
// • Cannot use break or continue.

// Difference:
//
// for...in
// → Used for objects.
// → Returns keys/indexes.
//
// for...of
// → Used for iterable objects.
// → Returns values.
//
// forEach()
// → Used only for arrays.
// → Executes a callback for each element.
//
// Common Uses:
// ✔ Read object properties
// ✔ Access array elements
// ✔ Display data from an array of objects
// ✔ Perform operations on every array element