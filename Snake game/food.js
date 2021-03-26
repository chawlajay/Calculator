let food = { x:0, y:0 };

export function update(){
    // console.log('update snake');
        
    }
    
    export function draw(gameBoard){
    // console.log('draw snake');
   
        const foodElement = document.createElement('div');
        foodElement.style.gridRowStart = food.y; 
        foodElement.style.gridColumnStart = food.x;
        foodElement.classList.add('food');
        gameBoard.appendChild(foodElement);
    }