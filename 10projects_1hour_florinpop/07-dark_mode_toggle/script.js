const toggle = document.getElementById("toggle");

toggle.addEventListener("click",(e)=>{
    console.log(e.target);
    document.body.classList.toggle("dark");
});