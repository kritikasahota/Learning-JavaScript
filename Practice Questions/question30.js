//Write an arrow function named isEven() that takes a single number as argument and returns if it is even or not.
const isEven = (n) => {
    if(n % 2 == 0){
        return "even";
    }else{
        return "odd";
    }
}

console.log(isEven(5));
console.log(isEven(12));