const colorBtn = document.querySelector(".colorBtn");
const bodyBg = document.querySelector("body");

const colors = ['yellow','red','blue','green','black','#3b459e','#98feda','#123456','powderblue'];

colorBtn.addEventListener('click',changeColor);

function changeColor(){
    let randomNumber = Math.floor(Math.random()*colors.length);
    bodyBg.style.backgroundColor =colors[randomNumber];
}

/* hex color change code */
const hexNumbers = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const hexColorBtn = document.querySelector('.hexColorBtn');
const hexColor = document.querySelector('.hexColor');

hexColorBtn.addEventListener('click',getHexColor);

function getHexColor(){
    let hexCol = '#';

    for(let i=0;i<6;i++)
    {
        let randomNumber = Math.floor(Math.random()*hexNumbers.length);
        hexCol+=hexNumbers[randomNumber];
    }
    bodyBg.style.backgroundColor =hexCol;
    hexColor.innerHTML = hexCol;
}

