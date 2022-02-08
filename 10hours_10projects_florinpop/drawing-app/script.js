const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const sizeEl = document.getElementById("size");
const chooseColor = document.getElementById("color");
const randomColorBtn = document.getElementById("random-color");
const toolBox = document.getElementById("toolbox");
const clearEl = document.getElementById("clear");

let size = 2,x=100,y=40;
let isPressed = false,randomColor = true,fixColor = "#000";
let colorArray = ["#e34231","#1c7974"];

setSizeCanvas(70);
// drawLine(100,100,200,200);
canvas.addEventListener('mousemove', (e)=>{
    // console.log(e);
    if(isPressed){
    drawCircle(e.layerX,e.layerY);
    drawLine(x,y,e.layerX,e.layerY);
    x=e.layerX;
    y=e.layerY;
    }
});

canvas.addEventListener('mousedown', (e)=>{
    isPressed = true;
    x=e.layerX;
    y=e.layerY;
});

canvas.addEventListener('mouseup', (e)=>{
    isPressed = false;
    x=undefined;
    y=undefined;
});

function setSizeCanvas(percent){
    const vwWidth   = window.innerWidth;
    const vwHeight  = window.innerHeight;
    canvas.width  = Math.round(vwWidth  * percent / 100);  // integer pixels
    canvas.height = Math.round(vwHeight * percent / 100);
    toolBox.style.width = (Math.round(2+vwWidth  * percent / 100) + "px");  // integer pixels
    console.log(Math.round(vwWidth  * percent / 100));
}

function drawLine(x1,y1,x2,y2){
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.strokeStyle = fixColor;
    ctx.lineWidth = size;
    ctx.stroke();
    // ctx.stroke()
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
    fixColor=randomColorValue;
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
    if(size>=10)
    size += 5;
    else
    size +=1;

    if(size > 50)
    size=50;

    updateSize();
});

decreaseBtn.addEventListener('click', ()=>{
    if(size>10)
    size -= 5;
    else
    size -=1;

    if(size < 2)
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

clearEl.addEventListener('click',()=>{
ctx.clearRect(0,0,canvas.width,canvas.height);
});