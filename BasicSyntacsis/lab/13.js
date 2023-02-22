function solve (array) {
    let evenSum = 0;
    let oddSum = 0;

    for (let index = 0; index < array.length; index++) {
       if (array[index] % 2 === 0) {
        evenSum += array[index];
       } else {
        oddSum += array[index];
       }
    }
    result = evenSum - oddSum
    console.log(result)
}


solve([2,4,6,8,10])