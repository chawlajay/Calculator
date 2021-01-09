document.addEventListener('DOMContentLoaded',()=>{
    const grid=document.querySelector('.grid')    
    let squares=Array.from(document.querySelectorAll('.grid div'))
    const scoreDisplay=document.querySelector('#score')
    const startBtn=document.querySelector('#start-button')    // we can use getElementById also
    const width=10
    let nextRandom = 0;
    let timerId
    let score =0
    const colors=[
        'yellow',
        'red',
        'purple',
        'green',
        'black'
    ]


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
            squares[currentPosition + index].style.backgroundColor = colors[random]
        })
    }

    // undraw the tetromino
    function undraw(){
        current.forEach(index => {
            squares[currentPosition + index].style.backgroundColor = ''
        })
    }

    // make the tetromino move down every second
    // timerId = setInterval(moveDown,1000)

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
        if(timerId)
        {
        undraw()
        currentPosition+=width
        draw()
        freeze()
        }
    }

    // freeze function to stop tetromino from getting out of grid and stop at bottom
    function freeze(){
        if(current.some(index => squares[currentPosition + index + width].classList.contains('taken')))
        {
            current.forEach(index => squares[currentPosition + index].classList.add('taken'))
            
            // start a new tetromino after freezing the current tetromino
            random = nextRandom
            nextRandom = Math.floor(Math.random()*theTetrominoes.length)
            current = theTetrominoes[random][currentRotation]
            currentPosition = 4
            draw()
            displayShape()
            addScore()
            gameOver()
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

    // show the next upcoming tetromino in the mini-grid
    const displaySquares = document.querySelectorAll('.mini-grid div')
    const displayWidth = 4
    const displayIndex = 0
    
    //The tetrominos without rotations
    const upNextTetrominoes = [
        [1, displayWidth+1, displayWidth*2 + 1, 2],    //lTetromino
        [0, displayWidth, displayWidth+1, displayWidth*2 + 1],  // zTetromino
        [1, displayWidth, displayWidth+1,displayWidth+2],  //tTetromino
        [0, 1, displayWidth, displayWidth+1],  // oTetromino
        [1, displayWidth+1, displayWidth*2 + 1, displayWidth*3 + 1]  //iTetromino
    ]


    // display the shape in the mini-grid display
    function displayShape(){
        // first remove any trace of a tetromino from the entire grid
        displaySquares.forEach(square => {
            square.style.backgroundColor = ''
        })

        upNextTetrominoes[nextRandom].forEach(index => {
            displaySquares[displayIndex + index].style.backgroundColor = colors[nextRandom]
        })
    }

    // adding functionality to the button
    startBtn.addEventListener('click', () => {
        if(timerId)
        {
            clearInterval(timerId)
            timerId = null
        }
        else 
        {
            if(scoreDisplay.innerHTML === 'GAME OVER.')
            {
                scoreDisplay.innerHTML = 0
            }
            draw()
            timerId=setInterval(moveDown,1000)
            //nextRandom = Math.floor(Math.random()*theTetrominoes.length)
            displayShape();
        }
    })

    // add score
    function addScore(){
        for(let i=0; i<199 ; i+=width)
        {
            const row = [i,i+1,i+2,i+3,i+4,i+5,i+6,i+7,i+8,i+9]
            
            if(row.every(index => squares[index].classList.contains('taken')))
            {
                score+=10;
                scoreDisplay.innerHTML=score
                row.forEach(index => {
                    squares[index].classList.remove('taken')
                    squares[index].style.backgroundColor= ''
                })
                
                const squaresRemoved = squares.splice(i,width)
                squares=squaresRemoved.concat(squares)
                squares.forEach(cell => grid.appendChild(cell))
                for(let j=0;j<10;j++)
                console.log(squares[j])
            }
        }
    }

    // game over function
    function gameOver(){
        if(current.some(index => squares[currentPosition+index].classList.contains('taken')))
        {
            scoreDisplay.innerHTML = 'GAME OVER.'
            for(let i=0;i<=199;i++)
            {
                squares[i].classList.remove('taken');
                squares[i].style.backgroundColor= ''
            }
            
            clearInterval(timerId)
            timerId=null
        }
    }

})