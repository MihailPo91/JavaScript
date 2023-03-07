function personCreator (firstName, lastName, age) {
    let person = {
        firstName: firstName,
        lastName: lastName,
        age: age,
    }
    return person;
}

personCreator("Peter",

"Pan",

"20");


function personCreatorShort (firstName, lastName, age) {
    let person = {firstName, lastName, age}
    return person;
}