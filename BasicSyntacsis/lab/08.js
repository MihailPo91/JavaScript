function solve (arg) {
    let result;
    if (typeof(arg) === 'number') {
        result = (arg**2) * Math.PI;
        console.log(result.toFixed(2))
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof (arg)}.`)
    }
}


solve(2)