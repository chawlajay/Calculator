const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn")
const prevBtn = document.querySelector(".prevBtn")

slides.forEach((slide,index)=>{
    slide.style.left = `${index*100}%`;
});

let counter = 0;
nextBtn.addEventListener('click',()=>{
    counter++;
    if(counter==slides.length)
    counter=0;

    carousel();
    updateButtons();
});
prevBtn.addEventListener('click',()=>{
    counter--;
    if(counter==-1)
    counter=slides.length-1;
    carousel();
    updateButtons()
});

function carousel(){
    slides.forEach((slide)=>{
        slide.style.transform = `translateX(-${counter*100}%)`;
    });
}

function updateButtons(){
    prevBtn.style.display = "block";
    nextBtn.style.display = "block";

    if(counter==0){
    prevBtn.style.display= "none";
    }
    else if(counter==slides.length-1)
    nextBtn.style.display= "none";
}
updateButtons();