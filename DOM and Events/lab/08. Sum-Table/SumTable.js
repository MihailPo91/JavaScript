function sumTable() {
    const prices = Array.from(document.querySelectorAll('td:nth-child(even)'))
    console.log(prices)
    let sum = 0;
    for (let i = 0; i < prices.length - 1; i++) {
        sum += Number(prices[i].textContent);
    }
    document.getElementById('sum').textContent = sum.toFixed(2);
}