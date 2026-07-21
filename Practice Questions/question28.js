//Write a function that prints "Hello World" 5 times at intervals of 2s each.
let count = 0;
const print = setInterval(() => {
  console.log("Hello world");
  count++;

  if (count === 5) {
    clearInterval(print);
  }
}, 2000);
