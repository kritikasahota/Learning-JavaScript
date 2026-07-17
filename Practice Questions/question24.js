//Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output

function longest(arr) {
    let longer = 0;
    for(let i = 1; i < arr.length; i++){
        let ansLen = arr[longer].length;
        let currentLen = arr[i].length;
            if(currentLen > ansLen){
                longer = i;
            }
    }
    return arr[longer];
}

let country = ["Australia", "Germany", "UnitedStatesofAmerica"];
console.log(longest(country));