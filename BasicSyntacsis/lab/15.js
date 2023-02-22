function solve(text, word) {
    function repeat (number) {
        output = '';
        for (let i = 1; i <= number; i++) {
            output += '*';
        }
        return output;
    }

    let censored = text.replace(word, repeat(word.length))

    while (censored.includes(word)) {
        censored = censored.replace(word, repeat(word.length));
    }
    console.log(censored);
}




solve('Find the hidden word', 'hidden')