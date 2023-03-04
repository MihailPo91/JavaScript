function isPerfectNumber(n) {
    let divisors = [];
    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            divisors.push(i);
        }
    }
    if (divisors.reduce((a, b) => a + b, 0) === n) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}


isPerfectNumber(121232);