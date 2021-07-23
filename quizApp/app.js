/* eslint-disable no-unused-vars */

let url = "https://opentdb.com/api.php?amount=10&category=18&type=multiple";
let questions_arr, count_of_questions=0,right_answers=0,wrong_answers=0,total_seconds,setting_interval;

const demo_button = document.getElementById("demo");
const next_button = document.getElementById("next");
const question_field = document.getElementById("question");
const question_number = document.getElementById("question_number");
const right_answer_text = document.getElementById("correct-answers");
const wrong_answer_text = document.getElementById("incorrect-answers");
const quiz_container = document.getElementsByClassName("quiz-container");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const quiz_details = document.querySelector(".quiz-details");

fetch(url)
.then(response => response.json())
.then(data => questions_arr=data.results)
.then( ()=> {
    demo_button.innerHTML = "Start the Quiz";
});

function add_zero(sec){
    return (sec<10) ? `0${sec}` : sec;
}

function time_started(){
    if(total_seconds == 0)
    {
        clearInterval(setting_interval);
        minutes.innerHTML = "Time";
        seconds.innerHTML = "Up";
        next_button.innerHTML = "Quiz Over";
        next_button.removeEventListener("click",change_question);
    }
    else
    {
    minutes.innerHTML = add_zero(Math.floor(total_seconds / 60));
    seconds.innerHTML = add_zero(total_seconds % 60);
    }
    total_seconds--;
    console.log(total_seconds);
}


function change_question(){
    if(count_of_questions == 0)
    {
        total_seconds = questions_arr.length * 10;
        setting_interval = setInterval(time_started,1000);
        next_button.innerHTML = "Submit Answer";
    }
    if(count_of_questions<questions_arr.length)
    {
        var ques;
        ques=questions_arr[count_of_questions].question;
        question_field.innerHTML = ques;

        var num = Math.floor(Math.random()*4) + 1, j=0;
        for(let i=1;i<5;i++)
        {
            var option_number = document.getElementById("option"+i), li_text="";
            li_text = "<input type='radio' name='option' value='";
            if(num==i)
            {
                li_text += `${questions_arr[count_of_questions].correct_answer}'>`;
                li_text += questions_arr[count_of_questions].correct_answer;
            }
            else
            {
                li_text += `${questions_arr[count_of_questions].incorrect_answers[j]}'>`;
                li_text += questions_arr[count_of_questions].incorrect_answers[j];
                j++;
            }
            option_number.innerHTML = li_text;
        }
        count_of_questions++;
        question_number.innerHTML = `Question ${count_of_questions} (${questions_arr.length - count_of_questions} Remaining)`;
    }
    else
    {
        next_button.innerHTML = "Quiz Over";
        next_button.removeEventListener("click",change_question);
        clearInterval(setting_interval);
    }
    right_answer_text.innerHTML = `${right_answers} correct`;
    wrong_answer_text.innerHTML = `${wrong_answers} wrong`; 
}

$('li').on("click",(event)=>{
// console.log("li clicked");
if(event.target.nodeName == "INPUT")
{
let inpu_ele = event.target;

    if(inpu_ele.getAttribute("value") == questions_arr[count_of_questions-1].correct_answer)
    {
        console.log("RIght onsor");
        right_answers++;
    }
    else
    {
        console.log("WronG onsor");
        wrong_answers++;
    }
    
}

});

next_button.addEventListener('click',change_question);
demo_button.addEventListener('click', ()=>{
    demo_button.style.display = "none";
    quiz_details.style.display = "block";
    change_question();
})
