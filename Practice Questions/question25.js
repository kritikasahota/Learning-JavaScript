//Write a JavaScript function to count the number of vowels in a String argument.
function vowel(str){
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'){
            count += 1;
        }
    }
    return count;
}

console.log(vowel("kritika"));