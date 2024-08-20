/* Новые элементы должны добавляться в список по нажатию на Enter */
/* Если кликнуть на элемент списка, он зачеркивается */
/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */
/* Очищать input после добавления нового элемента в список */
/* Пустые элементы не должны добавляться */

const inputElement = document.querySelector('#input');
const itemsElement = document.querySelector('#items');

inputElement.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {

        const newItem = inputElement.value;
        const itemElement = document.createElement('div');
        itemElement.classList.add('item');

        itemElement.addEventListener('click', function() {
            itemElement.classList.toggle('done');
        })

        itemElement.textContent = newItem;
        if (newItem !== '') {
            itemsElement.append(itemElement);
        }

        inputElement.value = '';
    }
})