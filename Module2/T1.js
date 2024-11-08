'use strict';
let numbers = []

for (let i = 0; i < 5; i++)
{
    numbers[i] = parseInt(prompt('Anna ' +
        (i + 1) + '. luku: '));
}

for (let i = 0; i < 5; i++) {
    console.log(numbers[4 - i]);
}