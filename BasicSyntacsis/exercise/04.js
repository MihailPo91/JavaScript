function solve(num1, num2) {
    const newArray = []
    totalSum = 0
    for (let index = num1; index <= num2; index++) {
        newArray.push(index);
        totalSum += index;
    }
    console.log(newArray.join(' '));
    console.log(`Sum: ${totalSum}`);
}


solve(5, 10)