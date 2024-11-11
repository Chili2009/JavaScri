let kohde = document.querySelector('#kohde');

function throwDice() {
    return Math.floor(Math.random() * 6) + 1;
}

let output_list = '<ul>';

while (true) {
    let numberDice = throwDice();
    output_list += `<li>${numberDice}</li>`;
    console.log(numberDice);
    if (numberDice === 6) {
        break;
    }
}

output_list += '</ul>';

if (kohde) {
    kohde.innerHTML = output_list;
}
