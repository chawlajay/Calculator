
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

    var pop_x = mySnakeArray[0].x;
    var pop_y = mySnakeArray[0].y;

    if(defaultRun == "right") pop_x++;
    else if(defaultRun == "left") pop_x--;
    else if(defaultRun == "down") pop_y++;
    else if(defaultRun == "up") pop_y--;

    if(pop_x == -1 || pop_y == -1 || pop_x == width/cell_width || pop_y == height/cell_width || checkCollision(pop_x,pop_y,mySnakeArray))
    {
        start();
        return;
    }

    if(pop_x == snake_food.x && pop_y == snake_food.y)
    {
        var snake_tail = { x:pop_x, y:pop_y };
        userscore++;
        createFood();
    }
    else 
    {
        var snake_tail = mySnakeArray.pop();
        snake_tail.x = pop_x; snake_tail.y = pop_y;
    }

    mySnakeArray.unshift(snake_tail);

    for(let i=0;i<mySnakeArray.length;i++)
    {
        let k=mySnakeArray[i];
        paintCell(k.x,k.y);
    }

    paintCell(snake_food.x,snake_food.y);
    document.querySelector("#score span").innerHTML=userscore;
}

function paintCell(x,y)
{
    context.fillStyle="orange";
    context.fillRect(x*cell_width,y*cell_width,cell_width,cell_width);
    context.strokeStyle = "red";
    context.strokeRect(x*cell_width,y*cell_width,cell_width,cell_width);
}

function checkCollision(x,y,array){
    return array.some((currentValue)=>{
        if(currentValue.x == x && currentValue.y == y){
            return true;
        }
        else
        return false;
    });
}

$(document).keydown(function(e){
var keyInput = e.which;
if(keyInput == "40" && defaultRun!="up") defaultRun="down";
else if(keyInput == "39" && defaultRun!="left") defaultRun="right";
else if(keyInput == "38" && defaultRun!="down") defaultRun="up";
else if(keyInput == "37" && defaultRun!="right") defaultRun="left";
});

})