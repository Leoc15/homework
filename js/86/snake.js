(function () {
    'use strict';

    const SNAKE_SIZE = 64;

    const theCanvas = document.querySelector('#theCanvas');
    const context = theCanvas.getContext('2d');

    function resizeCanvas() {
        theCanvas.width = window.innerWidth - (window.innerWidth % SNAKE_SIZE);
        theCanvas.height = window.innerHeight - (window.innerHeight % SNAKE_SIZE);
    }

    window.addEventListener('resize', resizeCanvas);

    resizeCanvas();

    let direction = 'ArrowRight';

    let x = -SNAKE_SIZE;
    let y = 0;

    function getRandomNumber(min, max) {
        let r = Math.floor(Math.random() * ((max - min) + 1)) + min;
        return r - (r % SNAKE_SIZE);
    }


    const theapple = {};
    const apple = document.createElement('img');
    apple.src = 'images/apple.png';
    apple.onload = () => {
        let xa = getRandomNumber(0, theCanvas.width - 1)
        let ya = getRandomNumber(0, theCanvas.height - 1)
        theapple.x = xa;
        theapple.y = ya;
        console.log(theapple.x, theapple.y);

    }

    const snakeHead = document.createElement('img');
    snakeHead.src = 'images/snakeHead.png';
    snakeHead.onload = () => {

        const myInterval = setInterval(() => {
            console.log(direction);
            context.clearRect(0, 0, theCanvas.width, theCanvas.height);

            switch (direction) {
                case 'ArrowRight':
                    x += SNAKE_SIZE;
                    break;
                case 'ArrowLeft':
                    x -= SNAKE_SIZE;
                    break;
                case 'ArrowUp':
                    y -= SNAKE_SIZE;
                    break;
                case 'ArrowDown':
                    y += SNAKE_SIZE;
                    break;
            }


            if (x < 0 || x > theCanvas.width - SNAKE_SIZE || y < 0 || y > theCanvas.height - SNAKE_SIZE) {
                clearInterval(myInterval);
                console.log('ggs');
            } else {
                if (theapple.x == x && theapple.y == y) {
                    theapple.x = getRandomNumber(0, theCanvas.width - 1)
                    theapple.y = getRandomNumber(0, theCanvas.height - 1)
                    console.log('apple!!!')
                }
                context.drawImage(apple, theapple.x, theapple.y)
                context.drawImage(snakeHead, x, y);
            }

        }, 500);
    };

    document.addEventListener('keydown', e => {
        switch (e.key) {
            case 'ArrowRight':
            case 'ArrowLeft':
            case 'ArrowUp':
            case 'ArrowDown':
                direction = e.key;
        }
    });
}());