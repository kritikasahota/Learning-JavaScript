//Function that return sum of numbers from 1 to n

function sum(n){
    let add = 0;
    for(let i = 1; i <= n; i++){
        add = add + i;
    }

    return add;
}

console.log(sum(5));