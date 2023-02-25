function wordExtractor (string) {
    const words = string.match(/\b\w+\b/g);
    let result = [];
    for (const word of words) {
        result.push(word.toUpperCase());
    }
    return result.join(', ');
}


console.log(wordExtractor('nested, i.e. hold other functions'));