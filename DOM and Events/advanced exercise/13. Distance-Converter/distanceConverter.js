function attachEventsListeners() {
    const from = document.getElementById('inputUnits');
    const to = document.getElementById('outputUnits');

    const inputField = document.getElementById('inputDistance');
    console.log(inputField)
    const outputField = document.getElementById('outputDistance');

    const convertBtn = document.getElementById('convert');
    convertBtn.addEventListener('click', convertHandler);

    const ratesInMeters = {
        'km': 1000,
        'm': 1,
        'cm': 0.01,
        'mm': 0.001,
        'mi': 1609.34,
        'yrd': 0.9144,
        'ft': 0.3048,
        'in': 0.0254
    }

    function convertHandler() {
        const fromUnits = from.value;
        const toUnits = to.value;

        console.log(ratesInMeters[fromUnits]);
        console.log(ratesInMeters[toUnits]);

        let amount = Number(inputField.value);
        console.log(amount)

        let result = (amount * ratesInMeters[fromUnits]) / ratesInMeters[toUnits];
        outputField.value = result;
    }
}