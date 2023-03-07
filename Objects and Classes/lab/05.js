function objectToJSON(name, lastName, hairColor) {
    myObject = {
        name, lastName, hairColor
    };
    let output = JSON.stringify(myObject);
    console.log(output);
}


objectToJSON('George', 'Jones', 'Brown');