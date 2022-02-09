const links = document.querySelector(".links");
const navToggle = document.querySelector(".nav-toggle");

navToggle.addEventListener('click', ()=>{
    links.classList.toggle("show-links");
    navToggle.classList.toggle("rotate-bars");
});