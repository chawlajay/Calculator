// game loop will repeat itself again and again at some time interval

import { update as updateSnake, draw as drawSnake, SNAKE_SPEED , getSnakeHead, snakeIntersection } from './snake.js';
import { update as updateFood, draw as drawFood} from './food.js';
import { outsideGrid } from './grid.js';

var lastRenderTime=0;
let gameOver = false;
const gameBoard = document.querySelector('#game-board'); 
function main(currentTime){

    if(gameOver){
        if(confirm('You Lost. Press OK to restart.')){
            window.location='/';  // refresh page
        }
        return;
    }

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
checkDeath();
}

function draw(){
gameBoard.innerHTML='';
drawSnake(gameBoard);
drawFood(gameBoard);
}

function checkDeath(){
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}