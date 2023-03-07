function jsonParser(string) {
    let myObject = JSON.parse(string);
    for (const key in myObject) {
        console.log(`${key}: ${myObject[key]}`)
    }
}


jsonParser('{"name": "George", "age": 40, "town": "Sofia"}');