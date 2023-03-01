function calculator (numOne, numTwo, operator) {
    let output = 0;
    switch(operator) {
        case 'multiply': {console.log(numOne * numTwo)}; break;
        case 'divide':  {console.log(numOne / numTwo)}; break;
        case 'add':  {console.log(numOne + numTwo)}; break;
        case 'subtract':  {console.log(numOne - numTwo)};
    }  
}

calculator(2, 3, 'multiply');