const toggleBtn = document.getElementById("bars");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener('click',()=>{
    sidebar.classList.toggle("show-sidebar");
});

toggleBtn.addEventListener('mouseenter',()=>{
    toggleBtn.style.animationPlayState = "paused";
});

toggleBtn.addEventListener('mouseleave',()=>{
    toggleBtn.style.animationPlayState = "running";
});

closeBtn.addEventListener('click',()=>{
    sidebar.classList.toggle("show-sidebar");
});
