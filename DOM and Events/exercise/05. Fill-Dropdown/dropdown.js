function addItem() {
    const newText = document.getElementById('newItemText');
    const newValue = document.getElementById('newItemValue');

    let newOption = document.createElement('option');
    newOption.textContent = newText.value;
    newOption.value = newValue.value;

    const selectMenu = document.getElementById('menu');
    selectMenu.appendChild(newOption);

    newText.value = '';
    newValue.value = '';

}