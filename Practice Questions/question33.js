//Create a function to find minimum number in an array.
function getMinimum(arr){
    let min = arr.reduce((min, el) => {
        if(min < el){
            return min;
        }else{
            return el;
        }
    });
    return min;
}

let arr = [10, 20, 30, 40, 5];
console.log(getMinimum(arr));