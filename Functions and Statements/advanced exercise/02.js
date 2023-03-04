function numberModifier(number) {

    function average(num) {
        let digitsCount = String(number).length;
        let numArr = String(number).split("");
        let totalSum = 0;
        for (const num of numArr) {
            totalSum += Number(num);
        }
        let averageNum = totalSum / digitsCount;
        return averageNum;
    }

    averageNum = average(number)

    if (average(number) > 5) {
        console.log(number);
        return;
    } else {
        while (averageNum <= 5) {
            myArr = String(number).split("");
            myArr.push('9');
            number = Number(myArr.join(''))
            averageNum = average(number);
        }
        console.log(number);
        return;
    }
}


numberModifier(101);
numberModifier(5835);