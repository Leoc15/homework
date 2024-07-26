'use strict';

const dayOfWeek = (function () {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    function getDay(index) {
        return days[index - 1];
    }

    return {
        getDay,
        getDayIndex(Day) {
            const index = days.findIndex(d => d === Day);
            return index + 1;
        }
    };
}());

console.log(dayOfWeek.getDay(4));
console.log(dayOfWeek.getDayIndex('Wednesday'));