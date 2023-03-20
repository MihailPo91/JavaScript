function solve() {
    const convertBtn = document.getElementsByTagName('button')[0];
    convertBtn.addEventListener('click', convert);

    document.getElementsByTagName('option')[1].remove();
    let newOptBin = document.createElement('option');
    newOptBin.value = 'binary';
    newOptBin.textContent = 'Binary';
    let newOptHex = document.createElement('option');
    newOptHex.value = 'hexadecimal';
    newOptHex.textContent = 'Hexadecimal';
    document.getElementById('selectMenuTo').appendChild(newOptBin);
    document.getElementById('selectMenuTo').appendChild(newOptHex);


    function convert() {
        const input = document.getElementsByTagName('input')[0].value;
        const typeConvertion = document.getElementById('selectMenuTo');
        const result = document.getElementsByTagName('input')[1];
        let output = '';

        if (typeConvertion.value === 'binary') {
            output = Number(input).toString(2);
        } else if (typeConvertion.value === 'hexadecimal') {
            output = Number(input).toString(16).toUpperCase();
        }
        result.value = output;
    }
}