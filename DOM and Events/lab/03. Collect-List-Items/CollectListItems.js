function extractText() {
    const liCollection = document.getElementsByTagName('li');
    let result = '';

    for (const li of liCollection) {
        result += li.textContent + '\n'
    }

    document.getElementById('result').textContent = result;
}
