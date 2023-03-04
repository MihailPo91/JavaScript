function oddEvenSum(number) {
    toIterate = String(number);

    let evenSum = 0;
    let oddSum = 0;

    for (const ch of toIterate) {
        if (Number(ch) % 2 == 0) {
            evenSum += Number(ch);
        } else {
            oddSum += Number(ch);
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddEvenSum(3495892137259234);