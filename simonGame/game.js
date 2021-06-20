let randomNumber=0;
let buttonColors = ["red", "blue", "green", "yellow"];
let randomChosenColor = buttonColors[randomNumber];
let gamePattern = [], userClickedPattern = [];
let level = 0, flag=1, totalUserClicks=0;

function resetGame(){
    level=0;
    gamePattern = [];
    userClickedPattern = [];
    totalUserClicks = 0;
    $("h1").text("Game Over, Press Any Key to Restart");
    flag = 1;
}

function nextSequence(){
    level++;
    $("h1").text("Level "+level);
    $("#moves-left").text("Moves left : "+level);
    setTimeout(1000,function(){
        $("h1").fadeOut(200).fadeIn(200).text("Level "+level);
    });    
    randomNumber = Math.floor(Math.random()*4);
    randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    animatePress(randomChosenColor);
    playSound(randomChosenColor);
}

function playSound(name){
    var soundFile = new Audio("sounds/"+name+".mp3");
    soundFile.play();
}

function animatePress(name){
    $("#"+name).fadeOut(100,function(){
        $(this).addClass("pressed");
    }).fadeIn(100,function(){
        $(this).removeClass("pressed");
    });
}

function wrongAnswer(){
    playSound("wrong");
    $("body").fadeOut(100,function(){
        $(this).addClass("game-over");
    }).fadeIn(100,function(){
        $(this).removeClass("game-over");
    });
}

function checkAnswer(currentUserClickCount)
{
    let gameOver=false;
    for(let i=0;i<currentUserClickCount;i++)
    {
        if(gamePattern[i]!=userClickedPattern[i])
        {
            gameOver=true;
            break;
        }
    }

    if(gameOver==false)
    {
        totalUserClicks=0;
        userClickedPattern = [];
        setTimeout(nextSequence,1000);
    }
    else
    {
        wrongAnswer();
        resetGame();
    }
}

$(".btn").click(function(){
    totalUserClicks++;
    $("#moves-left").text("Moves left : "+(level-totalUserClicks));
    
    var userChosenColor = event.target.id;
    userClickedPattern.push(userChosenColor);
    animatePress(userChosenColor);
    playSound(userChosenColor);

    if(totalUserClicks == level)
    checkAnswer(totalUserClicks);
});

$(document).keypress(function(){
    if(flag==1)
    {
    nextSequence();
    flag=0;
    }
});

