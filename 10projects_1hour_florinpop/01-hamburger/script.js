const btn = document.getElementById('btn');
const nav = document.getElementById('nav');

btn.addEventListener('click',()=>{
    nav.classList.toggle("active");
    if(nav.classList.contains("active"))
    btn.innerHTML = "&#10006";
    else
    btn.innerHTML = "☰";
});