// Game Constants & variables
let direction = {x:0, y:0};
let foodSound = new Audio('Food.mp3');
let moveSound = new Audio('move.mp3');
let gameOverSound = new Audio('GameOver.mp3');

let speed = 2;
let lastPaintTime = 0;
let snakeArr = [
    {x:13, y:15}
]
food= {x: 6, y: 7};
//Game Function
function main(ctime){
    window.requestAnimationFrame(main);
    // console.log(ctime)
    if((ctime - lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
}

function gameEngine(){
    //Part 1: Updating the snake array and food
    
    //part 2: Dispaly the snake and food
    //Dispaly snake
    board.innerHTML = "";
    snakeArr.forEach((e, index)=>{
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowsStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        if(index === 0){
            snakeElement.classList.add('head');
        }
        else{
            snakeElement.classList.add('snake');
        }
        board.appendChild(snakeElement);
    });

    //Dispaly the  food
    foodElement = document.createElement('div');
    foodElement.style.gridRowsStart = food.y;
    foodElement.style.gridColumnStart = food.x;
        snakeElement.classList.add('food')
        board.appendChild(foodElement);
   
}







//main logic start here 
window.requestAnimationFrame(main);
window.addEventListener('keydown', e=>{
    inputDir = {x: 0, y: 0}   //Start the game
    switch (e.key){
        case "ArrowUp":
            console.log("ArrowUp")
            inputDir.x = 0;
            inputDir.y = -1;
            break;

            case "ArrowDown":
                console.log("ArrowDown")
                inputDir.x = 0;
                inputDir.y = 1 ;
                break;

            case "ArrowLeft":
                console.log("ArrowLeft")
                inputDir.x = -1;
                inputDir.y = 0;
                break;
            case "ArrowRight":
                console.log("ArrowRight")
                inputDir.x = 1;
                inputDir.y = 0;
                break;

            default:
                break;        
       
    }
});