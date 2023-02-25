function bitcoinMiner (goldEarnedArray) {
    const bitcoinPrice = 11949.16;
    const goldPricePerGram = 67.51;

    let bitcoins = 0;
    let money = 0;

    let firstPurchase = 0;

    for (let index = 1; index < goldEarnedArray.length+1; index++) {
        earnedPerDay = goldEarnedArray[index-1];
        if (index % 3 === 0) {
            money += (earnedPerDay - earnedPerDay * 0.3) * goldPricePerGram;
        } else {
            money += earnedPerDay * goldPricePerGram;
        }
        
        if (money >= bitcoinPrice) {

            if(firstPurchase === 0) {
                firstPurchase = index;
            }
            while (money >= bitcoinPrice) {
                money -= bitcoinPrice;
                bitcoins ++;
            }
        }
    }
    console.log(`Bought bitcoins: ${bitcoins}`)
    if (firstPurchase !== 0) {
        console.log(`Day of the first purchased bitcoin: ${firstPurchase}`)
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`)
}


bitcoinMiner([3124.15, 504.212, 2511.124])