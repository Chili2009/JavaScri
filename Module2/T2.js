'use strict';
let nof_p = parseInt(prompt('Anna osallistujien lukumäärä :'));
let participants = [];

for (let i = 0; i < nof_p; i++)
{
    participants[i] = prompt('Anna ' + (i + 1) + '. nimi: ');
}

participants.sort()

let html = '<ol>';
for (let i = 0; i < nof_p; i++)
{
    html += '<li>';
    html += participants[i];
    html += '</li>';
}
html += '</ol>';

let kohde = document.querySelector('#kohde');
kohde.innerHTML = html