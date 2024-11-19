const button = document.querySelector('button')
button.onclick = calculate

function calculate() {
    let operation = document.getElementById('operation').value
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value

    if (operation === 'add') {
       let summa = parseInt(num1) + parseInt(num2)
        document.getElementById('result').innerText = summa
    }

    else if (operation === 'sub') {
       let summa = parseInt(num1) - parseInt(num2)
        document.getElementById('result').innerText = summa
    }

    else if (operation === 'multi') {
        let summa = parseInt(num1) * parseInt(num2)
        document.getElementById('result').innerText = summa
    }

    else if (operation === 'div') {
        let summa = parseInt(num1) / parseInt(num2)
        document.getElementById('result').innerText = summa
    }
}