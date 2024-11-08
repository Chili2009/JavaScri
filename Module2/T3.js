'use strict';

let dogs = []

for (let i = 0; i < 6; i++)
{
    dogs[i] = prompt('Anna ' + (i+1) + '. koiran nimi: ');
}

let dogs_sort = dogs.sort();
let dogs_reverse = dogs_sort.reverse()

let html = '<ul>';
for (let i = 0; i < 6; i++){
    html += '<li>'
    html += dogs_reverse[i]
    html += '</li>'
}
html += '</ul>';
console.log(dogs_reverse)
let kohde = document.querySelector('#kohde')
kohde.innerHTML = html