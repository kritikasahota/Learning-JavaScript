//change string to number
let amount = "100";
console.log(amount, typeof amount);
amount = Number(amount);
console.log(amount, typeof amount);

//change number to string
let number = 22;
console.log(number, typeof number);
number = String(number);
console.log(number, typeof number);

//change number to boolean
let num = 1;
console.log(num, typeof num);
num = Boolean(num);
console.log(num, typeof num);

// Change decimal to a float 
let decimal = '99.5';
console.log(decimal, typeof decimal);
decimal = parseFloat(decimal);
console.log(decimal, typeof float);

// NaN conditions (not a number)
let string = 'hello';
let and = parseInt(string);
console.log(and);
console.log(Math.sqrt(-1));
console.log(1 + NaN);
console.log(undefined + undefined);
console.log('foo' / 2);