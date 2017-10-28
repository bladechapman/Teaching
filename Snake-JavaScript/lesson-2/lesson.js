createBoard();

let mySnake = new Snake(24, 24);

document.addEventListener('keyup', (event) => {
    const keyName = event.key;
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
}

let endGame = startGame(renderCycle, 1000);
