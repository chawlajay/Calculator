// file which takes all inputs
import { playPause } from './script.js';

let inputDirection = { x:1 , y:0 };
let lastInputDirection = { x:0, y:0 };
let arrowKeyUpButton = document.querySelector(".arrow_up");
let arrowKeyDownButton = document.querySelector(".arrow_down");
let arrowKeyLeftButton = document.querySelector(".arrow_left");
let arrowKeyRightButton = document.querySelector(".arrow_right");

arrowKeyUpButton.addEventListener('click', ()=>{
    if(lastInputDirection.y==0 && playPause==true)
    inputDirection = { x:0, y:-1};
});

arrowKeyDownButton.addEventListener('click', ()=>{
    if(lastInputDirection.y==0 && playPause==true)
    inputDirection = { x:0, y:1};
});

arrowKeyLeftButton.addEventListener('click', ()=>{
    if(lastInputDirection.x==0 && playPause==true)
    inputDirection = { x:-1, y:0};
});

arrowKeyRightButton.addEventListener('click', ()=>{
    if(lastInputDirection.x==0 && playPause==true)
    inputDirection = { x:1, y:0};
});

window.addEventListener('keydown', e=>{
    switch(e.key){
        case 'ArrowUp':
            if(lastInputDirection.y!==0 || playPause==false) break;
            inputDirection = { x:0, y:-1};
            break;
        case 'ArrowDown':
            if(lastInputDirection.y!==0 || playPause==false) break;
            inputDirection = { x:0, y:1};
            break;
        case 'ArrowLeft':
            if(lastInputDirection.x!==0 || playPause==false) break;
            inputDirection = { x:-1, y:0};
            break;
        case 'ArrowRight':
            if(lastInputDirection.x!==0 || playPause==false) break;
            inputDirection = { x:1, y:0};
            break;
    }
});



export function getInputDirection(){
    lastInputDirection = inputDirection;
    return inputDirection;
}

