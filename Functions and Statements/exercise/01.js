function checkForLoowestNumber(num1, num2, num3) {
    numArr = [num1, num2, num3]
    lowest = Infinity;
    for (const num of numArr) {
        if (num < lowest) {
            lowest = num;
        }
    }
    return lowest;
}


console.log(checkForLoowestNumber(100, 400, 432));