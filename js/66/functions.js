'use strict'
const array1 = ['A', 'b', 'c', 'D', 'e', 'F', 'g', 'H'];
const array2 = ['A', 'B', 'C']
const array3 = ['a', 'b', 'c']
function isupper(ch) {
    return ch.toUpperCase() === ch;
}

function ourevery(anArray, filterFunction) {
    for (let i = 0; i < anArray.length; i++) {
        if (!filterFunction(anArray[i])) {
            return false;
        }
    }
    return true;
}

let uppers = ourevery(array1, isupper);
console.log(uppers);
uppers = ourevery(array2, isupper);
console.log(uppers);
uppers = ourevery(array3, isupper);
console.log(uppers);

console.log(array1.every(isupper));
console.log(array2.every(isupper));
console.log(array3.every(isupper));

function oursome(anArray, filterFunction) {
    for (let i = 0; i < anArray.length; i++) {
        if (filterFunction(anArray[i])) {
            return true;
        }
    }
    return false;
}
uppers = oursome(array1, isupper);
console.log(uppers);
uppers = oursome(array2, isupper);
console.log(uppers);
uppers = oursome(array3, isupper);
console.log(uppers);

console.log(array1.some(isupper));
console.log(array2.some(isupper));
console.log(array3.some(isupper));


function ouronlyif(array, test, activity) {
    for (let i = 0; i < array.length; i++) {
        if (test(array[i])) {
            activity(array[i])
        }
    }
}

let someof = ouronlyif(array1, isupper, console.log);

array1.filter(isupper).forEach(console.log);