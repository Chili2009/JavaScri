'use strict';
let list = [];
let number;

while (true) {
    number = parseInt(prompt("Enter a number or enter 0 to stop the program."));

    if (number === 0) {
        break;
    }

    list.push(number);
}

let sortedNumbers = list.sort(function(a, b) {
    return b - a;
});

console.log(sortedNumbers);
