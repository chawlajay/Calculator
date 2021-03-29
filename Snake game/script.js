// game loop will repeat itself again and again at some time interval

import { update as updateSnake, draw as drawSnake, SNAKE_SPEED , getSnakeHead, snakeIntersection } from './snake.js';
import { update as updateFood, draw as drawFood} from './food.js';
import { outsideGrid } from './grid.js';

var lastRenderTime=0;
let gameOver = false;
export let playPause = false;

let requestId=0;
const gameBoard = document.querySelector('#game-board'); 
function main(currentTime){
    playPause = true;
    if(gameOver){
        if(confirm('You Lost. Press OK to restart.')){
            window.location='/';  // refresh page
        }
        return;
    }

    requestId=window.requestAnimationFrame(main);
    console.log(requestId);
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

document.getElementById('play_pause').addEventListener('click', ()=> {
    if(playPause==true)
    window.cancelAnimationFrame(requestId),playPause = false;
    else
    requestId = window.requestAnimationFrame(main),playPause = true;
});