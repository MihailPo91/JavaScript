function dictionaryManager(inputArray) {
    const dictionary = inputArray.reduce((acc, jsonStr) => {
        const obj = JSON.parse(jsonStr);
        return { ...acc, ...obj };
    }, {});

    const sortedDictionary = Object.fromEntries(
        Object.entries(dictionary).sort(([key1], [key2]) => key1.localeCompare(key2))
    );

    for (const key in sortedDictionary) {
        console.log(`Term: ${key} => Definition: ${dictionary[key]}`)
    }
}


dictionaryManager([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]
);