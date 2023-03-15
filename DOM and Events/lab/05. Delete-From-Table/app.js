function deleteByEmail() {
    const list = Array.from(document.querySelectorAll('#customers tbody > tr > td'));
    const result = document.getElementById('result');
    const input = document.getElementsByTagName('input')[0];

    for (const item of list) {
       
        if(item.textContent === input.value) {
            item.parentElement.remove();
            result.textContent = 'Deleted.';
            break;
        } else {
            result.textContent = 'Not found.';
        }
    }
}