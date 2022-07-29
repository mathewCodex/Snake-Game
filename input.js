//by default we dont the snake to move..that why our inputdirection is set to 0 ,
let inputDirection = { x: 0, y: 0 };

let lastInputDirection = { x: 0, y: 0 };
//Setting up a code to odify our input direction...so that we can use our keyboard
window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      if (lastInputDirection.y !== 0) break;
      inputDirection = { x: 0, y: -1 };
      break;
    case "ArrowDown":
      if (lastInputDirection.y !== 0) break;
      inputDirection = { x: 0, y: 1 };
      break;
    case "ArrowLeft":
      if (lastInputDirection.x !== 0) break;
      inputDirection = { x: -1, y: 0 };
      break;
    case "ArrowRight":
      if (lastInputDirection.x !== 0) break;
      inputDirection = { x: 1, y: 0 };
      break;
  }
});

//exportin our function...
export function getInputDirection() {
  //set our input direction based on the last time we got our input..

  lastInputDirection = inputDirection;
  return inputDirection;
}
// document.querySelector(".highScore").innerHTML = lastRenderScore;
