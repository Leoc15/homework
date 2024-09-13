//2 b

window.app = window.app || {};

// SL - capital Counters2 is unusual...
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
            // SL - better would be for getCount to return the count. Let the caller log it if thats what they want to do
            getCount: () =>
                console.log(`the count is ${count}`)
        } // SL - missing ; linter?
    }

    clicker.createCounter = createCounter;
    return clicker;
}(window.app.Counters2 || {}));

// const aCounter = app.Counters2.createCounter();
// aCounter.increment();
// aCounter.getCount();
// const cntr = app.Counters2.createCounter();

// SL - nice!
// SL - not a problem but we dont really need the added complexity of passing in the object (clicker) and adding to it here. Only this file is going to be working on clicker could just return it and stick it on window.app as Counters2
