//Write a JavaScript function that returns array elements larger than a number.
function largest(arr, number){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > number){
            console.log(arr[i]);
        }
    }
}

let arr = [1, 5, 2, 6, 7, 4];
console.log(largest(arr, 3));