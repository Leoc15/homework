'use strict';
let ans = prompt('what tepreture would you like to convert from fareheit to celcius?');
converttocels(ans);

ans=prompt('what tepreture would you like to convert from celcius to farenheit?');
converttofar(ans);

function converttocels(degree) {
   let myans=((degree - 32) * 5) / 9;
    alert(+ (degree) + ' farenheit is ' + (myans) + ' celcius');
}

function converttofar(degree) {
    let myans=((degree / 5) * 9) + 32;
    alert(+ (degree) + ' celcius is ' + (myans) + ' farenheit');
}