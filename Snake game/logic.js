// Game Constants & variables
const inputDir = {x:0, y:0};
const foodSound = new Audio('Food.mp3');
const moveSound = new Audio('move.mp3');
const gameOverSound = new Audio('GameOver.mp3');

let speed = 4;
let score = 0;
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

function isCollide(sarr){
    return false;
}

function gameEngine(){
    //Part 1: Updating the snake array and food
      if(isCollide(snakeArr)){
        gameOverSound.play();
        inputDir = {x: 0, y: 0 };
        alert("Game over. Press any key to play again!");
        snakeArr = [{x: 13, Y: 15}];
        score = 0;
      }

      //If you have eaten the food ,increament  the score and regenarate the food
      if(snakeArr[0].y === food.y && snakeArr[0].x ===food.x){
        foodSound.play();
        snakeArr.unshift({x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y});
        let a = 2;
        let b = 16;
        food = {x: Math.round(a + (b-a)* Math.random()), y: Math.round(a + (b-a)* Math.random())}
      }

      // Moving the snake
      for (let i = snakeArr.length - 2; i>=0; i--){
        // const element = array[i];
        snakeArr[i+1] = {...snakeArr[i]};
      }
       
        snakeArr[0].x += inputDir.x;  
        snakeArr[0].y += inputDir.y;  

    
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
    moveSound.play();
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