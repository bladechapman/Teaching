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
}


// ************** PREVIOUS LESSONS **************

document.addEventListener('keydown', function (event) {
    const keyName = event.key;

    // End the game if the snake goes back on itself
    if (mySnake.direction === Snake.SOUTH && keyName === "ArrowUp") {
        gameOver();
    } else if (mySnake.direction === Snake.NORTH && keyName === "ArrowDown") {
        gameOver();
    } else if (mySnake.direction === Snake.EAST && keyName === "ArrowLeft") {
        gameOver();
    } else if (mySnake.direction === Snake.WEST && keyName === "ArrowRight") {
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

function renderCycle() {
    clearBoard();
    mySnake.move();
    mySnake.render();
    myApple.render();
    growSnakeIfOverApple();
}

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

function renderCycle() {
    clearBoard();
    mySnake.move();
    mySnake.render();
    myApple.render();
    growSnakeIfOverApple();
}


function moveApple() {
  myApple.x = parseInt(Math.random() * 50);
  myApple.y = parseInt(Math.random() * 50);
}

let endGame = startGame(renderCycle, 100);

