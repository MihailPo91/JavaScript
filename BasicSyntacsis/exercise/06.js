function solve (number) {
    let result = 0;
    for (let n of String(number)) {
        result += Number(n);
    }
    console.log(result)
}

solve(245678)