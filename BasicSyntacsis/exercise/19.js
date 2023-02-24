function solve (targetWord, text) {
    const textArr = text.split(' ');
    isFound = false;

    for (const word of textArr) {
        if (word.toLowerCase() === targetWord) {
            console.log(targetWord);
            return;
        }
    }
    console.log(`${targetWord} not found!`)   
}


solve('javascript',
'JavaScript is the best programming language'
)