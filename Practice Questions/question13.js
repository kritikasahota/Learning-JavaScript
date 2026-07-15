let favMovie = "3 idiots";

let guess = prompt("Guess my fav movie: ");

while((guess != favMovie) && (guess != 'quit')){
    guess = prompt("wrong guess. Please try again");
}

if(guess == favMovie){
    console.log("congrats!");
}else{
    console.log("You quit");
}