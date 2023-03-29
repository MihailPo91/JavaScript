function solve(inputArray) {
    pieceNumber = inputArray[0];
    musicPieces = {};

    currentPieces = inputArray.splice(1, pieceNumber);

    for (const piece of currentPieces) {
        let [name, composer, key] = piece.split('|');
        musicPieces[name] = { composer, key };
    }

    for (let i = 1; i < inputArray.length; i++) {
        let tokens = inputArray[i].split('|');
        if (tokens[0] === 'Stop') {
            break;
        }

        if (tokens[0] === 'Add') {
            let name = tokens[1];
            let composer = tokens[2];
            let key = tokens[3];
            if (!(name in musicPieces)) {
                musicPieces[name] = { composer, key };
                console.log(`${name} by ${composer} in ${key} added to the collection!`)
            } else {
                console.log(`${name} is already in the collection!`)
            }
        } else if (tokens[0] === 'Remove') {
            let name = tokens[1];
            if (name in musicPieces) {
                delete musicPieces[name];
                console.log(`Successfully removed ${name}!`)
            } else {
                console.log(`Invalid operation! ${name} does not exist in the collection.`)
            }
        } else if (tokens[0] === 'ChangeKey') {
            let name = tokens[1];
            let newKey = tokens[2];
            if (name in musicPieces) {
                musicPieces[name].key = newKey;
                console.log(`Changed the key of ${name} to ${newKey}!`)
            } else {
                console.log(`Invalid operation! ${name} does not exist in the collection.`)
            }
        }
    }
    for (const piece in musicPieces) {
        console.log(`${piece} -> Composer: ${musicPieces[piece].composer}, Key: ${musicPieces[piece].key}`)
    }
}


solve([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]
);
console.log('');
solve([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
]
);