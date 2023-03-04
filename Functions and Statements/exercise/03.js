function asciiInRange (firstElement, secondElement) {
    let output = [];
    let firstNum = firstElement.charCodeAt(0);
    let secondNum = secondElement.charCodeAt(0);
    if (firstNum < secondNum) {
        for (let i = firstNum+1; i < secondNum; i++) {
            output.push(String.fromCharCode(i))
        }
    } else {
        for (let i = firstNum-1; i > secondNum; i--) {
            output.unshift(String.fromCharCode(i))
        }
    }
    console.log(output.join(' '));
}

asciiInRange('C', '#');