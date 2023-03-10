function employeeCreator(array) {
    let employees = [];

    for (let line of array) {
        let personalNumber = line.length;
        let employeeName = line;

        employees.push({ employeeName, personalNumber });
    }

    for (person of employees) {
        console.log(`Name: ${person.employeeName} -- Personal Number: ${person.personalNumber}`)
    }
}


employeeCreator([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
)