//2 c
'use strict';

// SL - ok, not sure these two functions add much but not a problem...
function counter() {
  const counter1 = 10;
  for (let i = 0; i < counter1; i++) {
    app.counter.increment(i);
  };
}


// Why are we logging while incrmenting? Your supposed to get the final count at then end
function counters2(number, newcounter) {
  // SL - why <=? Did you forget about 0?
  for (let i = 0; i <= number; i++) {

    console.log(newcounter.increment(i));
  }
}

counter();
// SL - this supposed to be at end - after incrementing ll counters (to show that it didnt get changed by them)
// app.counter.getCount();

const aCounter = app.Counters2.createCounter();
counters2(5, aCounter);

const aScndCounter = app.Counters2.createCounter();
counters2(10, aScndCounter);

// SL - As asked for, adding it now at end - and sure enough your counters are off by one!
app.counter.getCount();
aCounter.getCount();
aScndCounter.getCount();


// SL - nice!
// SL - Grade - 94
