'use strict';
const sumStr = prompt('enter first integer: ')
const sum = parseInt(sumStr);

const productStr = prompt('enter second integer: ')
const product = parseInt(productStr);

const averageStr = prompt('enter third integer: ')
const average = parseInt(averageStr);

const summa = sum + product + average;
const tulo = sum * product * average;
const keskiarvo = summa/3;

document.querySelector('#target1').innerHTML = 'the sum: ' + summa ;
document.querySelector('#target2').innerHTML = 'the product: ' + tulo;
document.querySelector('#target3').innerHTML = 'in average: ' + keskiarvo;