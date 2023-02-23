function solve(array) {
    return [...array]
    .sort((aName, bName) => aName.localeCompare(bName))
    .map((name, index) => `${index + 1}.${name}`)
    .join('\n');
}


solve(["John", "Bob", "Christina", "Ema"])