function solve(array) {
    sortedArray = array.sort();
    let counter = 0
    if (sortedArray) {
        for (let name of sortedArray) {
            counter++;
            console.log(`${counter}.${name}`)
        }
    }
}


solve(["John", "Bob", "Christina", "Ema"])