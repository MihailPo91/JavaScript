function generateReport() {
    const checkedHeaderCells = Array.from(document.querySelectorAll('input:checked'));
    let properties = [];
    for (const input of checkedHeaderCells) {
        properties.push(input.parentElement.textContent.trim().toLowerCase());
    }

    const rows = Array.from(document.getElementsByTagName('tr')).splice(1);
    const result = document.getElementById('output');


    let output = [];

    rows.forEach((row) => {
        let newObject = {};
        let rowChildren = Array.from(row.children);
        for (const prop of properties) {
            if (prop === 'employee') {
                newObject['employee'] = rowChildren[0].textContent;
            } else if (prop === 'department') {
                newObject['department'] = rowChildren[1].textContent;
            } else if (prop === 'status') {
                newObject['status'] = rowChildren[2].textContent;
            } else if (prop === 'date hired') {
                newObject['date_hired'] = rowChildren[3].textContent;
            } else if (prop === 'benefits') {
                newObject['benefits'] = rowChildren[4].textContent;
            } else if (prop === 'compensation') {
                newObject['compensation'] = rowChildren[5].textContent;
            } else if (prop === 'rating') {
                newObject['rating'] = rowChildren[6].textContent;
            }
        }
        output.push(newObject);
    });
    // output.forEach((object) => result.value += JSON.stringify(object));
    result.value = JSON.stringify(output);
}