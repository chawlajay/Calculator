const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let size = 20,x=100,y=40;
setSizeCanvas(50);

canvas.addEventListener('mousedown', (e)=>{
    // console.log(e);
    drawCircle(e.layerX,e.layerY);
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

function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    let yChange=1,xChange=1;

    if(yChange==1 && y==canvas.height-100)
    yChange=-1;

    if(xChange==1 && x==canvas.width-100)
    xChange=-1;

    if(yChange==-1 && y==10)
    yChange=1;

    if(xChange==-1 && x==10)
    xChange=1;

    x+=xChange;
    y+=yChange;
    // drawCircle(x,y);

    requestAnimationFrame(draw);
}
// draw();