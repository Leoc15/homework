//2 c
'use strict';
function counter() {
    const counter1 = 10;
    for (let i = 0; i < counter1; i++) {
        app.counter.increment(i);
    };
}


function counters2(number, newcounter) {
    for (let i = 0; i <= number; i++) {

        console.log(newcounter.increment(i));
    }
}

counter();
app.counter.getCount();

const aCounter = app.Counters2.createCounter();
counters2(5, aCounter);

const aScndCounter = app.Counters2.createCounter();
counters2(10, aScndCounter);
