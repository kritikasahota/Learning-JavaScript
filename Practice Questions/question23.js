//Write a JavaScript function to extract unique characters from a string.
let unique = function(str){
    let ans = "";
    for(let i = 0; i < str.length; i++){
        for(let j = i + 1; j < str.length; j++){
            if(!ans.includes(str[i])){
                ans += str[i];
            }
        }
    }
    return ans;
}

let str = 'abcdabcdefgggh';
console.log(unique(str));