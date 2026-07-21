//Check if all numbers in our array are multiple of 10 or not.
let arr = [10, 20, 30, 40, 5];

let result = arr.every((val) => {
    return val % 10 === 0;
});

console.log(result);