function solveReverse(num, array) {
    const newArray = [];
    for (let i = 0; i < num; i++) {
        newArray.push(array[i])
    }
    result = ''
    for (let i = newArray.length - 1; i >= 0; i--) {
        result += String(newArray[i]) + ' '
    }
    console.log(result)
}

solve(3, [10, 20, 30, 40, 50])
