createBoard();

let mySnake = new Snake(24, 24);
let myApple = new Apple(25,25);
myApple.render()

document.addEventListener('keyup', function (event) {
    const keyName = event.key;

    if(mySnake.direction==Snake.SOUTH && keyName == "ArrowUp"){
      gameOver()
    }else if(mySnake.direction==Snake.NORTH && keyName=="ArrowDown"){
      gameOver()
    }else if(mySnake.direction==Snake.EAST && keyName=="ArrowLeft"){
      gameOver()
    }else if(mySnake.direction==Snake.WEST && keyName=="ArrowRight"){
      gameOver()
    }

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
    growSnake();

}

function growSnake(){
  if(checkCoord()==true){
    mySnake.grow()
     moveApple()
  }else{

  }
}
function checkCoord(){
  if(mySnake.headX== myApple.x && mySnake.headY==myApple.y){
    return true
  }else{
    return false
  }
}


// parseInt(Math.random() * 50)
function moveApple(){
  myApple.x=parseInt(Math.random()*50)
  myApple.y=parseInt(Math.random()*50)
}

// mySnake.grow()

let endGame = startGame(renderCycle, 100);

// function ageCalculator2(day, month, year){
//   if(month>12 || month<1 || day>31 || day<1){
//     return console.error('Invalid numbers');
//   }
//
//   if(month>10){
//     return year-1995
//   }else if(month==10 && day>=4){
//     return year-1995
//   }else if(month==10 && day<4){
//     return year-1996
//   }else{
//     return year - 1996
//   }
// }
