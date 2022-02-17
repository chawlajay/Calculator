const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const popupContainer = document.querySelector(".popup-container");

openBtn.addEventListener("click",()=>{
    popupContainer.classList.remove("hide-element");
});

closeBtn.addEventListener("click",()=>{
    popupContainer.classList.add("hide-element");
});