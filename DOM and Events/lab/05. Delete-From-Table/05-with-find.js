function deleteByEmail() {
    const listEmails = Array.from(document.querySelectorAll('td:nth-child(even)'));
    const result = document.getElementById('result');
    const input = document.getElementsByTagName('input')[0];

    let foundElement = listEmails.find((td) => td.textContent === input.value)

    if(foundElement) {
        foundElement.parentElement.remove();
        result.textContent = 'Deleted.';
    } else {
        result.textContent = 'Not found.';
    }
}