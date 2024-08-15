//2 b

window.app = window.app || {};

window.app.Counters2 = (function (clicker) {
    'use strict';

    let counterCount = 0;
    function createCounter() {
        let count = 0;
        counterCount++;
        console.log(`the number of counters is ${counterCount}`);
        return {
            increment: () =>
                count++
            ,
            getCount: () =>
                console.log(`the count is ${count}`)
        }
    }

    clicker.createCounter = createCounter;
    return clicker;
}(window.app.Counters2 || {}));

// const aCounter = app.Counters2.createCounter();
// aCounter.increment();
// aCounter.getCount();
// const cntr = app.Counters2.createCounter();
