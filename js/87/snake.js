(async function () {
  'use strict';


  const crashSound = document.querySelector('#crash');
  const crunchSound = document.querySelector('#crunch');

  const SNAKE_SIZE = 64;

  const theCanvas = document.querySelector('#theCanvas');
  const context = theCanvas.getContext('2d');

  function resizeCanvas() {
    theCanvas.width = (window.innerWidth - 2) - ((window.innerWidth - 2) % SNAKE_SIZE);
    theCanvas.height = (window.innerHeight - 2) - ((window.innerHeight - 2) % SNAKE_SIZE);
  }

  window.addEventListener('resize', resizeCanvas);

  resizeCanvas();
  let speed = 200;
  let score = 0;
  let gameOver = false;
  let direction = 'ArrowRight';

  class Snake {
    constructor() {
      // this.x = ;
      // this.y = 0;

      this.parts = [{ x: -SNAKE_SIZE, y: 0 }];
    }


    move() {
      const head = this.parts[0];
      let tempX = head.x;
      let tempY = head.y;

      switch (direction) {
        case 'ArrowRight':
          tempX += SNAKE_SIZE;
          break;
        case 'ArrowLeft':
          tempX -= SNAKE_SIZE;
          break;
        case 'ArrowUp':
          tempY -= SNAKE_SIZE;
          break;
        case 'ArrowDown':
          tempY += SNAKE_SIZE;
          break;
      }

      if (tempX < 0 || tempX > theCanvas.width - SNAKE_SIZE || tempY < 0 || tempY > theCanvas.height - SNAKE_SIZE) {
        console.log('game over');
        gameOver = true;
      } else {
        this.parts.unshift({ x: tempX, y: tempY });
        if (tempX !== apple.x || tempY !== apple.y) {
          this.parts.pop();
        }

        // head.x = tempX;
        // head.y = tempY;
      }

      this.parts.forEach((part) => {
        context.drawImage(snakeHead, part.x, part.y);
      });
    }
  }

  class Apple {
    constructor() {
      this.move();
    }

    move() {
      this.x = this.getRandomNumber(theCanvas.width - SNAKE_SIZE);
      this.y = this.getRandomNumber(theCanvas.height - SNAKE_SIZE);
    }

    draw() {
      context.drawImage(appleImg, this.x, this.y);
    }

    getRandomNumber(max) {
      let n = Math.floor((Math.random() * max) + 1);
      n -= n % SNAKE_SIZE;
      return n;
    }
  }
  // function addBodyPart() {

  //   head = snake[0];

  //   snake.push({ x: head.x, y: head.y });

  //   console.log('body part added')
  // }

  function gameLoop() {
    context.clearRect(0, 0, theCanvas.width, theCanvas.height);
    snake.move();
    const head = snake.parts[0];
    if (head.x === apple.x && head.y === apple.y) {
      crunchSound.currentTime = 0;
      crunchSound.play();
      score++;
      speed -= speed * .05;
      console.log(speed);
      apple.move();

    }

    apple.draw();

    context.font = 'bold 32px Arial';
    context.fillStyle = 'red';

    const scoreText = `score: ${score}`;
    const tm = context.measureText(scoreText);

    context.fillText(scoreText, theCanvas.width - tm.width - 16, tm.actualBoundingBoxAscent + tm.actualBoundingBoxDescent + 16);

    if (!gameOver) {
      setTimeout(gameLoop, speed);
    } else {
      context.font = 'bold 64px Arial';
      context.fillStyle = 'blue';

      const text = 'GAME OVER!!!';
      const tm = context.measureText(text);

      context.fillText(text, (theCanvas.width / 2) - (tm.width / 2), (theCanvas.height / 2) + ((tm.actualBoundingBoxAscent + tm.actualBoundingBoxDescent) / 2));

      crashSound.play();
    }
  }

  document.addEventListener('keydown', e => {
    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowLeft':
      case 'ArrowUp':
      case 'ArrowDown':
        direction = e.key;
    }
  });

  const snakeP = loadImage('images/snakeHead.png');
  const appleP = loadImage('images/apple.png');
  const tail = loadImage('images/Green.png')

  const [snakeHead, appleImg, tailImg] = await Promise.all([snakeP, appleP, tail]);
  const snake = new Snake();
  const apple = new Apple();
  setTimeout(gameLoop, speed);

  function loadImage(src) {
    return new Promise((resolve, reject) => {
      const img = document.createElement('img');
      img.src = src;
      img.onload = () => {
        resolve(img);
      };
      img.onerror = e => reject(e);
      return img;
    });
  }
}());
