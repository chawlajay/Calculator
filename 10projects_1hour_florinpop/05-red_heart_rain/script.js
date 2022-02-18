const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const rightArrowBtn = document.getElementById("rightArrowBtn");
const colorBtn = document.getElementById("colorBtn");
const spinBtn = document.getElementById("spinBtn");
const beatingBtn = document.getElementById("beatingBtn");
const selectMenu = document.querySelector("select");
const container = document.querySelector(".container");
let color="red";

rightArrowBtn.addEventListener("click",()=>{
    container.classList.toggle("hidden");
});

colorBtn.addEventListener('click',function(){
    let new_color = "#";
    for(let i=0;i<6;i++)
    new_color += hex[Math.floor(Math.random()*hex.length)];

    color = new_color;
});

function createHeart(){
    const heart = document.createElement("div");
    const heartIcon = document.createElement("i");

    heartIcon.classList.add("fas","fa-heart");
    heart.appendChild(heartIcon);

    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random()*2 + 3 + "s";
    heart.style.color = color;

    document.body.appendChild(heart);
    
    setTimeout(()=>{
        heart.remove();
    },5000);
}

setInterval(createHeart,500);