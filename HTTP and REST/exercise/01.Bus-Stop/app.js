async function getInfo() {
    const resultBusStop = document.getElementById('stopName');
    const resultBusesInfo = document.getElementById('buses');

    Array.from(resultBusesInfo.children).forEach((row) => {
        row.remove();
    })

    try {
        const busStopID = document.getElementById('stopId').value;
        const BASE_URL = `http://localhost:3030/jsonstore/bus/businfo/${busStopID}`;

        const allBussesInfo = await fetch(BASE_URL, { method: 'GET' });
        const data = await allBussesInfo.json();

        let busStopName = data.name;
        resultBusStop.textContent = busStopName;

        for (const key in data.buses) {
            let li = document.createElement('li');
            li.textContent = `Bus ${key} arrives in ${data.buses[key]} minutes`;
            resultBusesInfo.appendChild(li);
        }
    } catch (err) {
        resultBusStop.textContent = 'Error';
    }

}