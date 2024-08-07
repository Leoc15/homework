(function () {
    'use strict';
    let interval;

    function getRandomRGBColor() {
        const r = Math.floor(Math.random() * 256); 
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`; 
    }
    document.querySelector('button').addEventListener('click', e => {
        e.preventDefault();

if (!interval){

        interval = setInterval(() => {
            document.body.style.backgroundColor = getRandomRGBColor();
        }, 1000);
    }
        document.querySelector('div').addEventListener('click', e => {
            e.preventDefault();
            document.body.style.backgroundColor = 'white';
            clearInterval(interval);
            interval=null
        });
    });
}());
