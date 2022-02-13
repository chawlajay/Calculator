const tabBtns = document.querySelectorAll(".tab-btn");
const contentBoxes = document.querySelectorAll(".content");

tabBtns.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        const currentId = e.currentTarget.dataset.id;
        removeActiveClass();
        btn.classList.add("active");
        const contentDiv = document.getElementById(currentId);
        contentDiv.classList.add("active");
    });
});

function removeActiveClass(){
    tabBtns.forEach((btn)=>{
        btn.classList.remove("active");
    });
    contentBoxes.forEach((box)=>{
        box.classList.remove("active");
    });
}