const btn = document.getElementById("btn");
const color = document.getElementById("color");

btn.addEventListener("click",()=>{
    let text = randomBg();
    document.body.style.backgroundColor = text;
    color.innerText=text;
});

function randomBg(){
    return `hsl(${Math.floor(Math.random()*360)},100%,50%)`;
}