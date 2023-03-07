function phoneBookCreator(array) {
    let phoneBook = {};

    for (const line of array) {
        let [name, phoneNumber] = line.split(' ')
        phoneBook[name] = phoneNumber;
    }

    for (const key in phoneBook) {
        console.log(`${key} -> ${phoneBook[key]}`)
    }
}


phoneBookCreator(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
);