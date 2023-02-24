function solve(numArray) {
    let newArray = [];
    numArray.sort(function (a, b) {
        return a - b;
    });
    let counter = 1;
    let rotateValue = numArray.length

    for (let i = 1; i <= rotateValue; i++) {
        if (counter % 2 === 1) {
            let current = numArray.shift();
            newArray.push(current);
            counter++
        } else {
            let current = numArray.pop();
            newArray.push(current);
            counter++
        }
    }

    return newArray;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));