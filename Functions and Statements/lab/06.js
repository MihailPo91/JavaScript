function solve(...params) {
    let minuses = 0;
    for (const i of params) {
        if (i < 0) {
            minuses++;
        }
    }
    if (minuses % 2 === 0) {
        console.log('Positive');
    } else {
        console.log('Negative');
    }
}

solve(45, 8, -1);


