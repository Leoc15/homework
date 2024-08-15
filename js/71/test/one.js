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

