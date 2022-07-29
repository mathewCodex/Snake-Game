//importing javascript..
import {
  update as updateSnake,
  draw as drawSnake,
  SNAKE_SPEED,
  score_Time,
  getSnakeHead,
  snakeIntersection,
} from "./snake.js";
import { update as updateFood, draw as drawFood } from "./food.js";
import { outsideGrid } from "./grid.js";
//For this game the first thing to be done is setup a game loop that makes it repeat over and over again..
//calling our gameBoard..
const gameBoard = document.getElementById("game-board");
//to figure how long it was since the last time that we render..
let lastRenderTime = 0;
//
let lastRenderScore = 0;
let gameOver = false;

//this gameboard shows our snake element...
//////
// const SNAKE_SPEED = 1;
function main(currentTime) {
  if (gameOver) {
    if (confirm("you lost, Press Ok to restart")) {
      window.location = "";
    }
    return;
  }
  window.requestAnimationFrame(main);
  const secondSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondSinceLastRender < 1 / SNAKE_SPEED) return;

  // const highScore = (currentScore - lastRenderScore) / 1000;
  // if (highScore < 1 / score_Time) return;
  // console.log("Render");
  lastRenderTime = currentTime;

  // lastRenderScore = currentScore;
  // document.querySelector(".highScore").innerHTML = lastRenderTime;
  //games are broken into two different steps ..
  //1,An Update loop which update all of the logic for our game..
  update();
  //2.Draw loop which draws everything on the screen based on the update loop
  draw();
}
window.requestAnimationFrame(main);
// ////////////////////////////
window.addEventListener("keydown", (e) => {
  function score(currentScore) {
    e.key;

    window.requestAnimationFrame(score);
    // const secondSinceLastRender = (currentTime - lastRenderTime) / 1000;
    // if (secondSinceLastRender < 1 / SNAKE_SPEED) return;

    const highScore = (currentScore - lastRenderScore) / 1000;
    if (highScore < 1 / score_Time) return;
    console.log("Render");

    lastRenderScore = currentScore;
    document.querySelector(".highScore").innerHTML = parseInt(
      Math.ceil(lastRenderScore)
    );
    return;
    //games are broken into two different steps ..
    //1,An Update loop which update all of the logic for our game..
    update();

    //2.Draw loop which draws everything on the screen based on the update loop
    draw();
  }
  window.requestAnimationFrame(score);
});

function update() {
  updateSnake();
  updateFood(gameBoard);
  checkDeath();
}

function draw() {
  //To remove the previous pieces behind our snake...we set it to nothing..00
  gameBoard.innerHTML = "";
  //passing in our gameboard...
  drawSnake(gameBoard);
  drawFood(gameBoard);
}

function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}
