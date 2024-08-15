//2
window.app = window.app || {};

window.app.counter = (function (clicker) {
  'use strict';
  let count = 0;

  clicker.increment = () =>
    count++
    ;

  clicker.getCount = () =>
    console.log(`the count is ${count}`)

  return clicker;
}(window.app.counter || {}));


