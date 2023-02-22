function solve(string, startIndex, count) {
    let result = '';
    for (let i = startIndex; i <= count + startIndex -1; i++) {
        result += string[i];
    }
    console.log(result);
}

solve('SkipWordBla', 4, 7)