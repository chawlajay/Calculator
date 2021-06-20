let randomNumber=0;
let buttonColors = ["red", "blue", "green", "yellow"];
let randomChosenColor = buttonColors[randomNumber];
let gamePattern = [];
function newSequence(){
    randomNumber = Math.floor(Math.random()*4);
}

newSequence();
gamePattern.push(randomChosenColor);

