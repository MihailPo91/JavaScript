function solve(array, step) {
    const outputArray = []
    for (let index = 0; index < array.length; index += step) {
        outputArray.push(array[index]);
    }
    return outputArray;
}

solve(['5',
    '20',
    '31',
    '4',
    '20'],
    2
)
