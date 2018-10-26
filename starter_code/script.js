const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let birdIncrement = 300;
const obstacleArr = [];

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };
};

function startGame() {
  window.addEventListener("keydown", move, false);
  setInterval(update, 500);
}

// let loop = setInterval(update, 2000);

function update() {
  ctx.clearRect(0, 0, 1200, 600);
  BackGround();
  const bird = new Bird();
  bird.position();
  const obstacle = new Obstacles();
  obstacle.create();

  // Obstacle.DrawObstacles();
}

function BackGround() {
  const backImg = new Image();
  backImg.src = "images/bg.png";
  backImg.onload = function() {
    ctx.drawImage(backImg, 0, 0, 1200, 600);
  };
}

function Obstacles() {
  this.create = function() {
    let rNum = Math.floor(Math.random() * (450 - 50 + 1));
    let rHeight = 600 - rNum;
    const obstacleBottom = new Image();
    obstacleBottom.src = "images/obstacle_bottom.png";
    obstacleBottom.onload = function() {
      ctx.drawImage(obstacleBottom, 1000, rHeight, 100, rNum);
    };
    let maxHeight = 600 - (rNum - 150);

    const obstacleTop = new Image();
    obstacleTop.src = "images/obstacle_top.png";
    obstacleTop.onload = function() {
      ctx.drawImage(obstacleTop, 1000, 0, 100, maxHeight);
    };
  };
}

function Bird() {
  // this.speedX;
  // this.speedY;
  // this.gravity;
  // this.gravitySpeed;

  this.position = function() {
    // console.log(`1 ${  birdIncrement}`);
    birdIncrement += 5;
    console.log(`2 ${birdIncrement}`);
    const birdimg = new Image();
    birdimg.src = "images/flappy.png";
    birdimg.onload = function() {
      this.y = 300;
      ctx.drawImage(birdimg, 400, birdIncrement, 50, 50);
    };
  };

  // this.update = function (x, y) {
  //   this.x += speedX;
  //   this.y += speedY;
  // };
}

let move = function(arg) {
  if (arg.keyCode === 32) {
    birdIncrement -= 50;
  }
};
