'use strict';
//1
const strngArry = ['one', 'two', 'three']
const upperStngArry = [];

for (let i = 0; i < strngArry.length; i++) {
    let capitalizeArray = strngArry[i].toUpperCase();
    upperStngArry.push(capitalizeArray)
}
console.log(strngArry)
console.log(upperStngArry);

// SL - ok, but you dont have a map function, you do a mapping but there is no general purpose, reusable map function we can call with a callback... Also example asked for was to double (not that it matters, but still...)
// Also no IIFE, everything in here is top level...
