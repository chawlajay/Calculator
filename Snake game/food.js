import { onSnake , expandSnake } from './snake.js';

let food = { x:10, y:1 };
const EXPANSION_RATE = 1;
export function update(){
    // console.log('update snake');
    if(onSnake(food)){
        expandSnake(EXPANSION_RATE);
        food = {x:20, y:10};  // for now only
    }
    }
    
export function draw(gameBoard){
    // console.log('draw snake');
   
        const foodElement = document.createElement('div');
        foodElement.style.gridRowStart = food.y; 
        foodElement.style.gridColumnStart = food.x;
        foodElement.classList.add('food');
        gameBoard.appendChild(foodElement);
    }