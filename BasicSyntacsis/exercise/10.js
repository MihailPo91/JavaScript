function solve(number) {
    let current = Number(String(number)[0]);
    let areEqual = true;
    let totalSum = 0;
    for (let n of String(number)) {
        totalSum += Number(n);
        if (n != current) {
            areEqual = false;
        }
    }
    console.log(areEqual);
    console.log(totalSum);
}



solve(1234)