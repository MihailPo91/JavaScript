function addressBookCreator(array) {
    let addressBook = {};

    for (const line of array) {
        let [name, address] = line.split(':')
        addressBook[name] = address;
    }

    let sortedNames = Object.keys(addressBook)
        .sort((nameA, nameB) => nameA.localeCompare(nameB));

    // console.log(...sortedNames); to see what's in that array 

    for (const name of sortedNames) {
        console.log(`${name} -> ${addressBook[name]}`)
    }
}


addressBookCreator(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
);