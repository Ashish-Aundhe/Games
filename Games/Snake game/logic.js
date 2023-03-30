// Game Constants & variables
let direction = {x:0, y:0};

let speed = 2;
let lastPaintTime = 0;
let snakeArr = [
    {x:13, y:15}
]

//Game Function
function main(ctime){
    window.requestAnimationFrame(main);
    console.log(ctime)
    if((ctime - lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
}

function gameEngine(){
    //Part 1: Updating the snake array and food
    
    //part 2: Dispaly the snake and food
    board.innerHTML = "";
    snakeArr.forEach((e, index)=>{
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowsStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        snakeElement.classList.add('food')
        board.appendChild(snakeElement);
    })
}