const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let size = 10;
setSizeCanvas();
canvas.addEventListener('mousedown', ()=>{

});

function setSizeCanvas(){
    const vwWidth   = window.innerWidth;
    const vwHeight  = window.innerHeight;
    percent = 100;
    canvas.width  = Math.round(vwWidth  * percent / 100);  // integer pixels
    canvas.height = Math.round(vwHeight * percent / 100);
}

function drawCircle(x,y){
    ctx.beginPath();
    // ctx.arc(x,y,size,0,2*Math.PI);
    ctx.fillStyle="orange";
    ctx.arc(100, 100, 50, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
}

drawCircle(50,50);