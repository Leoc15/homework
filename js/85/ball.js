(function () {
  'use strict';

  const colorPicker = document.querySelector('#color');
  const theCanvas = document.querySelector('#theCanvas');
  const context = theCanvas.getContext('2d');
  const balls = [];
  function resizeCanvas() {
    theCanvas.width = window.innerWidth;
    theCanvas.height = window.innerHeight;
  }

  window.addEventListener('resize', resizeCanvas);

  resizeCanvas();

  const RADIUS = 150;
  // let x = RADIUS;
  // let y = RADIUS;
  // let dx = 1;
  // let dy = 2.5;


  document.querySelector('#start').addEventListener('click', () => {
    const selectedColor = colorPicker.value;
    balls.push({
      RADIUS: document.querySelector('#rad').value,
      selectedColor,
      x: RADIUS,
      y: RADIUS,
      dx: 1,
      dy: 2.5
    });
  });


  setInterval(() => {
    context.clearRect(0, 0, theCanvas.width, theCanvas.height);

    balls.forEach(ball => {
      context.beginPath();
      context.fillStyle = ball.selectedColor;

      ball.x += ball.dx;
      ball.y += ball.dy;


      if (ball.x >= theCanvas.width - ball.RADIUS || ball.x <= ball.RADIUS) {
        ball.dx = -ball.dx;
      }

      if (ball.y >= theCanvas.height - ball.RADIUS || ball.y <= ball.RADIUS) {
        ball.dy = -ball.dy;
      }

      context.arc(ball.x, ball.y, ball.RADIUS, 0, Math.PI * 2);
      context.fill();
    });

  }, 1);

}());