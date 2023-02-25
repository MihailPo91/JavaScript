function spiceExtraction(yield) {
    let days = 0;
    const workersConsume = 26;
    let extracted = 0;
    while (true) {
        if (yield < 100) {
            break;
        }
        extracted += yield;
        extracted -= workersConsume;
        if (extracted < 0) {
            extracted = 0;
        }
        yield -= 10;
        days++;
    }
    extracted -= workersConsume;
    if (extracted < 0) {
        extracted = 0;
    }
    console.log(days);
    console.log(extracted);
}


spiceExtraction(1550);