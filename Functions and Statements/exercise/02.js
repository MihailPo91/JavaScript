function operations (numOne, numTwo, numThree) {
    function sum(num1, num2) {
        return num1 + num2;
    }
    function subtract(num1, num2) {
        return num1 - num2;
    }
    bla = sum(numOne, numTwo);
    result = subtract(bla, numThree);
    return result;
}


console.log(operations(1, 17, 30));


function whyEvenTho (numOne, numTwo, numThree) {
    return (numOne + numTwo) - numThree;
}

console.log(whyEvenTho(1, 17, 30));