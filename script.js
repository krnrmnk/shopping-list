/* Новые элементы должны добавляться в список по нажатию на Enter */
const inputElement = document.querySelector('#input');
const itemsElement = document.querySelector('#items');

inputElement.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        const newItem = inputElement.value;
    }
    /* Если кликнуть на элемент списка, он зачеркивается */
    /* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

    itemElement.addEventListener('click', function() {
        const clickedItem = event;
        if (clickedItem.classList.contains('done')) {
            clickedItem.classList.remove('done');
        } else {
            clickedItem.classList.add('done');
        }
    });

    /* Очищать input после добавления нового элемента в список */
    if (newItem !== '') {
        const itemElement = document.createElement('div');
        itemElement.textContent = newItem;
    }

    /* Пустые элементы не должны добавляться */
    itemsElement.append(itemElement);
    inputElement.value = '';
})