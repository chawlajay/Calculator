const questionEl = document.querySelectorAll(".question");

for(let i=0;i<questionEl.length;i++){
    let plusBtn = questionEl[i].querySelector(".question-btn");
    plusBtn.addEventListener('click',()=>{
    questionEl[i].classList.toggle("show-text");
    });
}
