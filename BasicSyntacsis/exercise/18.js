function solve (text) {
    const wordsArray = text.split(' ');

    for (let word of wordsArray) {
        if (word.startsWith('#') && word.length > 1 && checkIfAllLetters(word)) {
            let newWord = '';
            for (let l of word) {
                if (l !== '#') {
                    newWord += l
                }
            }
            console.log(newWord);
        }
    }

    function checkIfAllLetters (word) {
        for (const ch of word) {
            if (ch === '#') {
                continue;
            }
            if (ch.toLowerCase() !== ch.toUpperCase()) {
                continue;
            } else {
                return false;
            }
        }
        return true;
    }
}


solve ('The symbol # is known #variously in English-speaking #regions as the #number sign')