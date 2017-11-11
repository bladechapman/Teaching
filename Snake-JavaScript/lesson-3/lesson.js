createBoard();

let mySnake = new Snake(24, 24);
let myApple = new Apple(25,25);
myApple.render()

function renderCycle() {
    clearBoard();
    mySnake.move();
    mySnake.render();
    myApple.render();
    growSnakeIfOverApple();
    if(reachBoundary()==true){
        endGame();
        gameOver();
    }
    if(hitBody()==true){
        endGame();
        gameOver();
    }
}

function reachBoundary(){
    if(mySnake.headX==0 || mySnake.headY==0 || mySnake.headX==50 || mySnake.headY==50){
        return true;
    }else{
        return false;
    }
}

// Arrays
// ======
//
// Create a new array:
// var secondWay = new Array();
// var firstWay = [];
//
// Getting values out of an array
// var myArray = [1, 2, 3];
// var secondElement = myArray[1];  // secondElement = 2
//
// Arrays can contain multiple types of values
// var weirdArray = [1, "a", false]
function hitBody(){
    var body = mySnake.body;
     headX=body[0][0]
     headY=body[0][1]

     for(i=1; i<body.length; i++){
        if(headX==body[i][0] && headY==body[i][1]){
            return true;
        }
     }
     return false;
}



// ************** PREVIOUS LESSONS **************

document.addEventListener('keydown', function (event) {
    const keyName = event.key;

    // End the game if the snake goes back on itself
    if (mySnake.direction === Snake.SOUTH && keyName === "ArrowUp") {
        endGame();
        gameOver();
    } else if (mySnake.direction === Snake.NORTH && keyName === "ArrowDown") {
        endGame();
        gameOver();
    } else if (mySnake.direction === Snake.EAST && keyName === "ArrowLeft") {
        endGame();
        gameOver();
    } else if (mySnake.direction === Snake.WEST && keyName === "ArrowRight") {
        endGame();
        gameOver();
    }

    // change the direction of the snake
    if (keyName === "ArrowUp") {
        mySnake.direction = Snake.NORTH;
    }
    else if (keyName === "ArrowDown") {
        mySnake.direction = Snake.SOUTH;
    }
    else if (keyName === "ArrowRight") {
        mySnake.direction = Snake.EAST;
    }
    else if (keyName === "ArrowLeft") {
        mySnake.direction = Snake.WEST;
    }
});

function growSnakeIfOverApple() {
    if (snakeHeadOverApple() === true) {
        mySnake.grow();
        moveApple();
    }
}

function snakeHeadOverApple() {
    if (mySnake.headX === myApple.x && mySnake.headY === myApple.y) {
        return true;
    }
    else {
        return false;
    }
}

function moveApple() {
  myApple.x = parseInt(Math.random() * 50);
  myApple.y = parseInt(Math.random() * 50);
}

let endGame = startGame(renderCycle, 100);

