// game loop will repeat itself again and again at some time interval

var lastRenderTime=0;
const SNAKE_SPEED = 2;
function main(currentTime){
    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime)/1000;  // into seconds
    
    if(secondsSinceLastRender < 1/SNAKE_SPEED)
    return;

    lastRenderTime = currentTime;
    //console.log(secondsSinceLastRender);
    // console.log(currentTime);
}

window.requestAnimationFrame(main);