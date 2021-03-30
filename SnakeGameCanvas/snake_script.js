
$(document).ready(function (){
const drawCanvas = $('#drawCanvas')[0];
// we get the canvas “2d context", which means that it will be drawn into a 2D space.
const context = drawCanvas.getContext('2d');
const width = $('#drawCanvas').width();
const height = $('#drawCanvas').height();

var cell_width = 15;
var defaultRun;  
var snake_food;  
var userscore;
var mySnakeArray;

function start(){
    defaultRun = "right";
    createSnake();
    createFood();
    userscore=0;

    if(typeof game_loop!="undefined")
    clearInterval(game_loop);

    game_loop = setInterval(paintSnake,100);
}

start();

function createSnake(){
    var snakeSize=5;
    mySnakeArray=[];
    for(let i=0;i<snakeSize;i++)
    {
        mySnakeArray.push({ x:0, y:20 });
    }
}

function createFood(){
    snake_food = {
        x: Math.round(Math.random()*(width - cell_width)/cell_width),
        y: Math.round(Math.random()*(height - cell_width)/cell_width)
    }
}

function paintSnake(){
    context.fillStyle = "#c0f0aa";
    context.fillRect(0,0,width,height);
    context.strokeStyle = "0000ff";
    context.strokeRect(0,0,width,height);

}
})