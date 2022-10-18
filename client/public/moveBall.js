const moveBall = () => {
  //style of ball:
  let ball = document.createElement("div");
  ball.style.height = "80px";
  ball.style.width = "80px";
  ball.style.backgrouond = "white";
  ball.style.borderRadius = "50%";
  ball.style.position = "absolute";
  ball.style.top = "0px";
  //attach ball to the body
  let marbleDiv = document.querySelector(".marbleDiv")
  // console.log(marbleDiv);
  marbleDiv.appendChild(ball);

  //variable to use in moveball
  let windowX = window.innerWidth;
  let windowY = window.innerHeight;
  let increment = 5;
  let x = 2;
  let y = 2;

  //function to movel the ball

  //current ball position:
  let positionX = ball.offsetLeft;
  let positionY = ball.offsetTop;

  //change directions if outside boundaries
  if (positionX + ball.offsetWidth > windowX || positionX < 0) {
    x *= -1;
  }
  if (positionY + ball.offsetWidth > windowY || positionY < 0) {
    y *= -1;
  }

  //increment x and y
  ball.style.left = positionX + (increment * x) + "px";
  ball.style.top = positionY + (increment * y) + "px";

  //delay between running the functiin
  setTimeout(moveBall, 20);

}