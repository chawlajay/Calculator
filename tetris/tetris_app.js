document.addEventListener('DOMContentLoaded',()=>{
    const grid=document.querySelector('.grid')    
    let squares=Array.from(document.querySelectorAll('.grid div'))
    const ScoreDisplay=document.querySelector('#score')
    const StartBtn=document.querySelector('#start-button')    // we can use getElementById also
    const width=10

    // the tetrominoes
    const ltetromino = [
        [1,width+1,2*width+1,2],
        [width,width+1,width+2,2*width+2],
        [1,width+1,2*width+1,2*width],
        [width,2*width,2*width+1,2*width+2]
    ]
    
    const ztetromino = [
        [0,width,width+1,2*width+1],
        [width+1,width+2,2*width,2*width+1],
        [0,width,width+1,2*width+1],
        [width+1,width+2,2*width,2*width+1]
    ]

    const ttetromino = [
        [1,width,width+1,width+2],
        [1,width+1,width+2,2*width+1],
        [width,width+1,width+2,2*width+1],
        [1,width,width+1,2*width+1]
    ]
    
    const otetromino = [
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1]
    ]
    
    const itetromino = [
        [1,width+1,2*width+1,3*width+1],
        [width,width+1,width+2,width+3],
        [1,width+1,2*width+1,3*width+1],
        [width,width+1,width+2,width+3],
    ]
    
    const theTetrominoes = [ltetromino,ztetromino,ttetromino,otetromino,itetromino]

    let currentPosition=4
    let currentRotation=0

    // randomly selecting a Tetromino and its first rotation
    let random = Math.floor(Math.random()*theTetrominoes.length)
    let current = theTetrominoes[random][currentRotation];

    
    // draw the tetromino
    function draw(){
        current.forEach(index => {
            squares[currentPosition + index].classList.add('tetromino')
        })
    }

    // undraw the tetromino
    function undraw(){
        current.forEach(index => {
            squares[currentPosition + index].classList.remove('tetromino')
        })
    }

    // make the tetromino move down every second
    timerId = setInterval(moveDown,1000)

    // assign functions to keyCodes   - e is for event
    function control(e){
        if(e.keyCode === 37){       // left arrow key
        moveLeft()
        }
        else if(e.keyCode === 38){  // up arrow key
        rotate()
        }
        else if(e.keyCode === 39){  // right arrow key
        moveRight()            
        }
        else if(e.keyCode === 40){  // down arrow key
        moveDown() 
        moveDown()   
        }
    }

    document.addEventListener('keyup',control)

    // move down function
    function moveDown(){
        undraw()
        currentPosition+=width
        draw()
        freeze()
    }

    // freeze function to stop tetromino from getting out of grid and stop at bottom
    function freeze(){
        if(current.some(index => squares[currentPosition + index + width].classList.contains('taken')))
        {
            current.forEach(index => squares[currentPosition + index].classList.add('taken'))
            // start a new tetromino after freezing the current tetromino
            random = Math.floor(Math.random()*theTetrominoes.length)
            current = theTetrominoes[random][currentRotation]
            currentPosition = 4
            draw()
        }
    }

    // move the tetromino left, unless is at edge or there is a blockage
    function moveLeft(){
        undraw()
        const isAtLeftEdge = current.some(index => (currentPosition + index)%width === 0)
        
        if(!isAtLeftEdge)
        {
            currentPosition-=1
        }

        if(current.some(index => squares[currentPosition+index].classList.contains('taken')))
        {
            currentPosition+=1;
        }
        draw()
    }

    // move the tetromino right, unless is at edge or there is a blockage
    function moveRight(){
        undraw()
        const isAtRightEdge = current.some(index => (currentPosition + index)%width === width-1)
        
        if(!isAtRightEdge)
        {
            currentPosition+=1
        }

        if(current.some(index => squares[currentPosition+index].classList.contains('taken')))
        {
            currentPosition-=1;
        }
        draw()
    }

    function rotate(){
        undraw()
        currentRotation+=1;
        currentRotation%=4;
        current = theTetrominoes[random][currentRotation]
        draw()
    }


})