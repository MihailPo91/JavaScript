function pyramid(baseNum, step) {
    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;

    let heightStep = 1;

    while (baseNum > 0) {
        if (heightStep % 5 === 0) {
            lapisLazuli += (baseNum * 4 - 4) * step;
        } else {
            marble += (baseNum * 4 - 4) * step;
        }
        stone += ((baseNum * baseNum) - (baseNum * 4 - 4)) * step;

        baseNum -= 2;
        heightStep += 1;
    }

    if (baseNum === 0) {
        baseNum = 2;
        if (heightStep % 5 === 0) {
            lapisLazuli -= (baseNum * baseNum) * step;
        } else {
            marble -= (baseNum * baseNum) * step;
        }
        gold += (baseNum * baseNum) * step;
    } else {
        stone -= (baseNum * baseNum) * step;
        gold += (baseNum * baseNum) * step;
    }


    console.log(`Stone required: ${Math.ceil(stone)}`)
    console.log(`Marble required: ${Math.ceil(marble)}`)
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`)
    console.log(`Gold required: ${Math.ceil(gold)}`)
    console.log(`Final pyramid height: ${Math.floor((heightStep - 1) * step)}`)
}


pyramid(23, 0.5)