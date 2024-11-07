'use strict';

const name = prompt('Type your user name');
console.log('Hello, ' + name + '!');
document.querySelector('#target').innerHTML = 'Hello ' + name + '!';
