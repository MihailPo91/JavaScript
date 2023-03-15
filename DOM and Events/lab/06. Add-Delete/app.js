function addItem() {
    const input = document.getElementById('newItemText');
    let li = document.createElement('li');
    if (input.value.length === 0) {
        return;
    }
    let a = document.createElement('a');
    a.textContent = '[Delete]';
    a.href = '#'
    a.addEventListener('click', () => { a.parentElement.remove() })
    li.textContent = input.value;
    document.getElementById('items').appendChild(li);
    li.appendChild(a);
    input.value = '';


}