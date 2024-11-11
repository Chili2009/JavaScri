'use script';
let kohde = document.querySelector('#kohde');

let list = [];

while (true) {
    let number = parseInt(prompt('Input number: '));
    if (isNaN(number)) {
        alert('Please input a valid number.');
        continue;
    }
    if (list.includes(number)) {
        window.alert('Number already in list');
        console.log(list.sort(function(a, b){ return a - b; }));
        break;
    } else {
        list.push(number);
    }
}

list.sort(function(a, b) { return a - b; });

if (kohde) {
    kohde.innerHTML = 'Sorted List: ' + list.join(', ');
}
