// Print "good string" if it's first character is 'a' and string length >= 3

let string = "apple";

if((string.at(0) === 'a' || string.at(0)=== 'A') && string.length >= 3){
    console.log(`${string} is a good string.`);
}else{
    console.log("not a good string.");
}