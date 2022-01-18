const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const sizeEl = document.getElementById("size");
const chooseColor = document.getElementById("color");
const randomColorBtn = document.getElementById("random-color");

let size = 10,x=100,y=40;
let isPressed = false,randomColor = true,fixColor = "#000";
let colorArray = ["#e34231","#1c7974"];
setSizeCanvas(70);

canvas.addEventListener('mousemove', (e)=>{
    // console.log(e);
    if(isPressed)
    drawCircle(e.layerX,e.layerY);
});

canvas.addEventListener('mousedown', (e)=>{
    isPressed = true;
});

canvas.addEventListener('mouseup', (e)=>{
    isPressed = false;
});

function setSizeCanvas(percent){
    const vwWidth   = window.innerWidth;
    const vwHeight  = window.innerHeight;
    canvas.width  = Math.round(vwWidth  * percent / 100);  // integer pixels
    canvas.height = Math.round(vwHeight * percent / 100);
}

function drawCircle(x,y){
    ctx.beginPath();
    ctx.arc(x,y,size,0,2*Math.PI);
    let randomHexChar = ['1','2','3','4','5','6','7','8','9','A','B','C','D','E'];
    let randomColorValue = "#";
    for(let i=0;i<6;i++)
    randomColorValue += randomHexChar[Math.floor(Math.random()*randomHexChar.length)];

    colorArray.push(randomColorValue);
    colorArray = colorArray.slice(1);

    if(randomColor){
    let bgValue = "linear-gradient(120deg, ";
    colorArray.forEach(color => {
        bgValue += color;
        bgValue += ",";
    });
     bgValue = bgValue.slice(0,-1);
     bgValue += ')';
    randomColorBtn.style.background = bgValue;
    // console.log(bgValue);
    ctx.fillStyle=randomColorValue;
    }
    else
    ctx.fillStyle = fixColor;

    ctx.fill();
    ctx.stroke();
}

function updateSize(){
    sizeEl.innerText = size;
}

increaseBtn.addEventListener('click', ()=>{
    size += 5;
    if(size > 50)
    size=50;

    updateSize();
});

decreaseBtn.addEventListener('click', ()=>{
    size -= 5;
    if(size < 5)
    size=1;

    updateSize();
});

chooseColor.addEventListener('change',()=>{
console.log(chooseColor.value);
fixColor = chooseColor.value;
randomColor = false;
});

randomColorBtn.addEventListener('click', ()=>{
randomColor=true;
});
