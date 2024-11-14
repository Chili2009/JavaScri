let list = ['First item', 'Second item', 'Third item'];

let element = document.getElementById('target');

let ul = document.createElement('ul');
ul.classList.add('my-list');

for (let i = 0; i < list.length; i++) {
    let list_item = document.createElement('li');
    list_item.innerText = list[i];

    if (i === 1) {
        list_item.classList.add('my-item');
    }

    ul.appendChild(list_item);
}

element.appendChild(ul);
