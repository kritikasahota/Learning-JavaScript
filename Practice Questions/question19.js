//Function to print multiplication table of a number
function table(num){
    for(let i = 0; i <= 10; i++){
       let mul = num * i;
       console.log(`${num} x ${i} = ${mul}`);
    }
}

table(5);