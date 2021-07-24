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
    //console.log(total_seconds);
}

function change_question(){

    if(count_of_questions == 0)
    {
        total_seconds = questions_arr.length * 60;
        setting_interval = setInterval(time_started,1000);
        next_button.innerHTML = "Submit Answer";
    }
    else
    check_answer();

    if(count_of_questions<questions_arr.length)
    {
        var ques;
        ques=questions_arr[count_of_questions].question;
        question_field.innerHTML = ques;

        var num = Math.floor(Math.random()*4) + 1, j=0;
        for(let i=1;i<5;i++)
        {
            var option_number = document.getElementById("option"+i), li_text="";
            var alpha;
            switch(i){
                case 1: alpha="A.";
                break;
                case 2: alpha="B.";
                break;
                case 3: alpha="C.";
                break;
                case 4: alpha="D.";
                break;
            }
            li_text = `<p>${alpha} `;
            
            if(num==i)
            {
                li_text += `${questions_arr[count_of_questions].correct_answer}</p>`;
            }
            else
            {
                li_text += `${questions_arr[count_of_questions].incorrect_answers[j]}</p>`;
                j++;
            }
            option_number.innerHTML = li_text;
        }
        count_of_questions++;
        question_number.innerHTML = `<b>Question ${count_of_questions}</b> (${questions_arr.length - count_of_questions} Remaining)`;
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

function get_selected_option(ele)
{
    if(ele.childNodes[0].classList.contains("optionBackgroundColor"))
    {
        return 1;
    }
    return 0;
}

function check_answer(){
    let options_selected = document.querySelector(".options-list").childNodes;
    // console.log(options_selected);
    let inpu_ele;
    for(let i=1;i<8;i+=2)
    {
        inpu_ele = get_selected_option(options_selected[i]);
        if(inpu_ele == 1)
        {
            inpu_ele = options_selected[i].childNodes[0];
            break;
        }
    }
    let op_value = inpu_ele.innerHTML; 
    op_value = op_value.substring(3,op_value.length+1);
    if(op_value == questions_arr[count_of_questions-1].correct_answer)
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

function remove_from_p_list_id(id_p)
{
    let option_p = document.getElementById(id_p).childNodes[0];
    option_p.classList.remove("optionBackgroundColor");
}

function remove_all_BgColor(){
    //console.log(document.getElementById("option1").childNodes[0]);
    for(let i=1;i<5;i++)
    {
    remove_from_p_list_id("option"+i);
    }
}

$('li').on("click",(event)=>{
// console.log("li clicked");
if(event.target.nodeName == "P")
{
    remove_all_BgColor();
let inpu_ele = event.target;
inpu_ele.classList.add("optionBackgroundColor");
}

});

next_button.addEventListener('click',change_question);
demo_button.addEventListener('click', ()=>{
    demo_button.style.display = "none";
    quiz_details.style.display = "block";
    change_question();
})
