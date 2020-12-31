document.addEventListener('DOMContentLoaded',()=>{
    const grid=document.querySelector('.grid')    
    let squares=Array.from(document.querySelectorAll('.grid div'))
    const ScoreDisplay=document.querySelector('#score')
    const StartBtn=document.querySelector('#start-button')    // we can use getElementById also
    const width=10

    // the tetriminoes
    const lTetrimino = [
        [1,width+1,2*width+1,2],
        [width,width+1,width+2,2*width+2],
        [1,width+1,2*width+1,2*width],
        [width,2*width,2*width+1,2*width+2]
    ]
    
    const zTetrimino = [
        [0,width,width+1,2*width+1],
        [width+1,width+2,2*width,2*width+1],
        [0,width,width+1,2*width+1],
        [width+1,width+2,2*width,2*width+1]
    ]

    const tTetrimino = [
        [1,width,width+1,width+2],
        [1,width+1,width+2,2*width+1],
        [width,width+1,width+2,2*width+1],
        [1,width,width+1,2*width+1]
    ]
    
    const oTetrimino = [
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1]
    ]
    
    const iTetrimino = [
        [1,width+1,2*width+1,3*width+1],
        [width,width+1,width+2,width+3],
        [1,width+1,2*width+1,3*width+1],
        [width,width+1,width+2,width+3],
    ]
    


})