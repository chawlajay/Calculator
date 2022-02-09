const questionEl = document.querySelectorAll(".question");

for(let i=0;i<questionEl.length;i++){
    let plusBtn = questionEl[i].querySelector(".question-btn");
    plusBtn.addEventListener('click',()=>{
        if(!questionEl[i].classList.contains("show-text"))
        {
            removeShowText();
            questionEl[i].classList.add("show-text");
        }
        else
        removeShowText();
    });
}


function removeShowText(){
    for(let i=0;i<questionEl.length;i++){
        questionEl[i].classList.remove("show-text");
    }
}