function solve (text, word) {
    let occures = 0

    while (text.includes(word)) {
        text = text.replace(word, '*')
        occures += 1
    }

    console.log(occures)
}

solve('This is a word and it also is a sentence', 'is')


function solveCorrect (text, searchedWOrd) {
    let words = text.split(' ')
    let counter = 0

    for (let word of words) {
        if (word === searchedWOrd) {
            counter += 1
        }
    }

    console.log(counter)
}

solveCorrect('This is a word and it also is a sentence', 'is')