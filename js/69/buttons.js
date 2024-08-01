'use strict';
let counter = 2;
const myDiv = document.querySelector('#theDiv');
const theButton = document.querySelector('#bttn');
theButton.addEventListener('click', Listener);

function Listener(e) {
    const myNewButton = document.createElement('button');
    myNewButton.innerText = counter++;
    myNewButton.addEventListener('click', Listener);
    myDiv.appendChild(myNewButton);
}