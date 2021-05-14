let rock_icon=document.getElementById("r");
let paper_icon=document.getElementById("p");
let scissors_icon=document.getElementById("s");

let user_score = document.getElementById("user_score");
let computer_score = document.getElementById("computer_score");
let computer_choice;

let choices=["Rock","Paper","Scissor"];  // rock - 0, paper - 1, scissor -2
rock_icon.addEventListener('mousedown',()=>{
    console.log('rock mousedown clicked');
    rock_icon.style.transform ="scale(0.8)";

    computer_choice=Math.floor(Math.random()*3);
    console.log(computer_choice);
    if(computer_choice==0)        // rock - user & rock - comp
    {
        // game draw
        rock_icon.style.animationName="draw_game";
        rock_icon.style.animationDuration="5s";
    }
    else if(computer_choice==1)   // rock - user & paper - comp
    {
        // computer won, user lost
        rock_icon.style.animationName="lost_game";
        rock_icon.style.animationDuration="5s";

        computer_score.innerHTML = parseInt(computer_score.innerHTML) + 1;
    }
    else
    {
        // user won, computer lost
        rock_icon.style.animationName="won_game";
        rock_icon.style.animationDuration="5s";

        user_score.innerHTML = parseInt(user_score.innerHTML) + 1;
    }
});

rock_icon.addEventListener('mouseup',()=>{
    console.log('rock mouseup clicked');
    rock_icon.style.transform ="scale(1)";

    setTimeout(function(){
        rock_icon.style.animationName="";
        rock_icon.style.animationDuration="";
    },100);
});