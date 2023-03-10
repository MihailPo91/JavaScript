function wordCounter(inputArray) {
    let targetWords = inputArray[0].split(' ');
    let words = {};
    for (const word of targetWords) {
        words[word] = 0;
    }

    for (let i = 1; i < inputArray.length; i++) {
        let current = inputArray[i];
        if (words.hasOwnProperty(current)) {
            words[current]++;
        }
    }

    let sortedWords = Object.fromEntries(Object.entries(words).sort(([, a], [, b]) => b - a));

    for (const key in sortedWords) {
        console.log(`${key} - ${sortedWords[key]}`)
    }
}

wordCounter([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
);

wordCounter([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
);