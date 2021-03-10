const colorBtn = document.querySelector(".colorBtn");
const bodyBg = document.querySelector("body");

const colors = ['yellow','red','blue','green','black','#3b459e','#98feda','#123456','powderblue'];

colorBtn.addEventListener('click',changeColor);

function changeColor(){
    let randomNumber = Math.floor(Math.random()*colors.length);
    bodyBg.style.backgroundColor =colors[randomNumber];
}