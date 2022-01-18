const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const sizeEl = document.getElementById("size");

let size = 10,x=100,y=40;
let isPressed = false;
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
    let randomColor = "#";
    for(let i=0;i<6;i++)
    randomColor += randomHexChar[Math.floor(Math.random()*randomHexChar.length)];
    ctx.fillStyle=randomColor;
    ctx.fill();
    ctx.stroke();
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
    size=5;

    updateSize();
});

function updateSize(){
    sizeEl.innerText = size;
}