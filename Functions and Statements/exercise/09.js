function loadingBar(number) {
    if (number === 100) {
        console.log('100% Complete!')
        return;
    }
    let output = `${number}% [${"%".repeat((number / 10))}${".".repeat(10 - number/10)}]`
    console.log(output);
    console.log('Still loading...');
}


loadingBar(10);