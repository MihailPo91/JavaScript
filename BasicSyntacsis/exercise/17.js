function solve(words, text) {
    let wordsArray = words.split(', ');
    let textArray = text.split(' ')

    for (let word of textArray) {
        if (word.includes('*')) {
            for (element of wordsArray) {
                if (element.length === word.length) {
                    text = text.replace(word, element);
                }
            }
        }
    }

    function replaceWithStar(word) {
        let result = '';
        for (let ch of word) {
            result += '*';
        }
        return result;
    }

    return text;
}


console.log(solve('great, learning',
'softuni is ***** place for ******** new programming languages'

))