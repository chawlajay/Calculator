let rock_icon=document.getElementById("r");
let paper_icon=document.getElementById("p");
let scissor_icon=document.getElementById("s");

let user_score = document.getElementById("user_score");
let computer_score = document.getElementById("computer_score");
let computer_choice,user_choice;

let choices=["Rock","Paper","Scissor"];  // rock - 0, paper - 1, scissor -2
let result = document.querySelector(".result p");

rock_icon.addEventListener('mousedown',()=>{
    user_choice=0;
    rock_icon.style.transform ="scale(0.8)";

    computer_choice=Math.floor(Math.random()*3);
    console.log(computer_choice);
    if(computer_choice==0)        // rock - user & rock - comp
    {
        // game draw
        rock_icon.style.animationName="draw_game";
        rock_icon.style.animationDuration="5s";

        result.innerHTML = choices[user_choice] + "(user) is equal to " + choices[computer_choice] + "(comp). Game Draw!";
    }
    else if(computer_choice==1)   // rock - user & paper - comp
    {
        // computer won, user lost
        rock_icon.style.animationName="lost_game";
        rock_icon.style.animationDuration="5s";

        computer_score.innerHTML = parseInt(computer_score.innerHTML) + 1;
        result.innerHTML = choices[computer_choice] + "(comp) covers " + choices[user_choice] + "(user). You Lost.";
    }
    else
    {
        // user won, computer lost
        rock_icon.style.animationName="won_game";
        rock_icon.style.animationDuration="5s";

        user_score.innerHTML = parseInt(user_score.innerHTML) + 1;
        result.innerHTML = choices[user_choice] + "(user) destroys " + choices[computer_choice] + "(comp). You Win.";
    }
});

rock_icon.addEventListener('mouseup',()=>{
    rock_icon.style.transform ="scale(1)";

    setTimeout(function(){
        rock_icon.style.animationName="";
        rock_icon.style.animationDuration="";
    },500);
});

paper_icon.addEventListener('mousedown',()=>{
    user_choice=1;
    paper_icon.style.transform ="scale(0.8)";

    computer_choice=Math.floor(Math.random()*3);
    console.log(computer_choice);
    if(computer_choice==0)        // paper - user & rock - comp
    {  
        // user won, computer lost
        paper_icon.style.animationName="won_game";
        paper_icon.style.animationDuration="5s";

        user_score.innerHTML = parseInt(user_score.innerHTML) + 1;
        result.innerHTML = choices[user_choice] + "(user) covers " + choices[computer_choice] + "(comp). You Win.";
    }
    else if(computer_choice==1)   // paper - user & paper - comp
    {
        // game draw
        paper_icon.style.animationName="draw_game";
        paper_icon.style.animationDuration="5s";

        result.innerHTML = choices[user_choice] + "(user) is equal to " + choices[computer_choice] + "(comp). Game Draw!";
        
    }
    else   // paper - user & scissor - comp
    {
        // computer won, user lost
        paper_icon.style.animationName="lost_game";
        paper_icon.style.animationDuration="5s";

        computer_score.innerHTML = parseInt(computer_score.innerHTML) + 1;
        result.innerHTML = choices[computer_choice] + "(comp) cuts the " + choices[user_choice] + "(user). You Lost.";
    }
});

paper_icon.addEventListener('mouseup',()=>{
    paper_icon.style.transform ="scale(1)";

    setTimeout(function(){
        paper_icon.style.animationName="";
        paper_icon.style.animationDuration="";
    },500);
});

scissor_icon.addEventListener('mousedown',()=>{
    user_choice=2;
    scissor_icon.style.transform ="scale(0.8)";

    computer_choice=Math.floor(Math.random()*3);
    console.log(computer_choice);
    if(computer_choice==0)        // scissor - user & rock - comp
    {  
        // computer won, user lost
        scissor_icon.style.animationName="lost_game";
        scissor_icon.style.animationDuration="5s";

        computer_score.innerHTML = parseInt(computer_score.innerHTML) + 1;
        result.innerHTML = choices[computer_choice] + "(comp) destroys " + choices[user_choice] + "(user). You Lost.";
    }
    else if(computer_choice==1)   // scissor - user & paper - comp
    {
        // computer lost, user won
        scissor_icon.style.animationName="won_game";
        scissor_icon.style.animationDuration="5s";

        user_score.innerHTML = parseInt(user_score.innerHTML) + 1;
        result.innerHTML = choices[user_choice] + "(user) cuts the " + choices[computer_choice] + "(comp). You Win.";
        
    }
    else   // scissor - user & scissor - comp
    {
        // game draw
        scissor_icon.style.animationName="draw_game";
        scissor_icon.style.animationDuration="5s";

        result.innerHTML = choices[user_choice] + "(user) is equal to " + choices[computer_choice] + "(comp). Game Draw!";
    }
});

scissor_icon.addEventListener('mouseup',()=>{
    scissor_icon.style.transform ="scale(1)";

    setTimeout(function(){
        scissor_icon.style.animationName="";
        scissor_icon.style.animationDuration="";
    },500);
});