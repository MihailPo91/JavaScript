function calculator (numOne, numTwo, operator) {
    
    const sum = (a, b) => a + b;
    const subtract = (a, b) => a - b;
    const divide = (a, b) => a / b;
    const multiply = (a, b) => a * b;

    switch(operator) {
        case 'multiply': return multiply(numOne, numTwo);
        case 'divide': return divide(numOne, numTwo);
        case 'add': return sum(numOne, numTwo);
        case 'subtract': return subtract(numOne, numTwo);
    }  
}

console.log(calculator(2, 3, 'multiply'));