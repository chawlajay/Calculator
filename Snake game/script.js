// game loop will repeat itself again and again at some time interval

import { update as updateSnake, draw as drawSnake, SNAKE_SPEED } from './snake.js';
import { update as updateFood, draw as drawFood} from './food.js';
var lastRenderTime=0;
const gameBoard = document.querySelector('#game-board'); 
function main(currentTime){
    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime)/1000;  // into seconds
    
    if(secondsSinceLastRender < 1/SNAKE_SPEED)
    return;

    lastRenderTime = currentTime;
    //console.log("Render");
    //console.log(secondsSinceLastRender);
    // console.log(currentTime);

    update();
    draw();
}

window.requestAnimationFrame(main);

function update(){
updateSnake();
updateFood();
}

function draw(){
    gameBoard.innerHTML='';
drawSnake(gameBoard);
drawFood(gameBoard);
}