//Write a JavaScript function to generate a random number within a range(start, end).
function randomNumber(start, end){
    let random = Math.floor(Math.random() * (end-start+1)) + start;
    console.log(random);
}

randomNumber(5, 10);