'use strict';

let year = parseInt(prompt("Birth year: "));
let leapyear= document.querySelector('#leapyear');

if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0))
{
    leapyear.innerHTML = "Year is a leap year";
}
else
{
    leapyear.innerHTML = "Year is not a leap year";
}
