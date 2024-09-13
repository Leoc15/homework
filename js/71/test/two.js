//2
window.app = window.app || {};

window.app.counter = (function (clicker) {
  'use strict';
  let count = 0;

  clicker.increment = () =>
    count++
    ; // SL - why ; on own line? line above is missing it. Are you not using a linter?

  // SL - better would be for getCount to return the count. Let the caller log it if thats what they want to do
  clicker.getCount = () =>
    console.log(`the count is ${count}`)

  return clicker;
}(window.app.counter || {}));

// SL - nice!
// SL - not a problem but we dont really need the added complexity of passing in the object (clicker) and adding to it here. Only this file is going to be working on clicker could just return it and stick it on window.app as counter
