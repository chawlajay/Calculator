let randomNumber=0;
let buttonColors = ["red", "blue", "green", "yellow"];
let randomChosenColor = buttonColors[randomNumber];
let gamePattern = [], userClickedPattern = [];
function nextSequence(){
    randomNumber = Math.floor(Math.random()*4);
    randomChosenColor = buttonColors[randomNumber];
    animatePress(randomChosenColor);
    playSound(randomChosenColor);
}

function playSound(name){
    var soundFile = new Audio("sounds/"+name+".mp3");
    soundFile.play();
}

function animatePress(name){
    $("#"+name).fadeOut(50,function(){
        $(this).addClass("pressed");
    }).fadeIn(50,function(){
        $(this).removeClass("pressed");
    });
}

$(".btn").click(function(){
    var userChosenColor = event.target.id;
    userClickedPattern.push(userChosenColor);
    animatePress(userChosenColor);
    playSound(userChosenColor);
});

$(document).keyPress(function(){
    nextSequence();
    gamePattern.push(randomChosenColor);
});
