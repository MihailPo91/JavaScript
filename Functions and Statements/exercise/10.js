function calculateFactorialDivision(num1, num2) {
    let factorial1 = 1;
    let factorial2 = 1;

    for (let i = 2; i <= num1; i++) {
        factorial1 *= i;
    }

    for (let i = 2; i <= num2; i++) {
        factorial2 *= i;
    }

    let divisionResult = factorial1 / factorial2;
    console.log(divisionResult.toFixed(2));
}


calculateFactorialDivision(6, 2);