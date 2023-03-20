function attachEventsListeners() {
    const dayBtn = document.getElementById('daysBtn');
    const hourBtn = document.getElementById('hoursBtn');
    const minuteBtn = document.getElementById('minutesBtn');
    const secondBtn = document.getElementById('secondsBtn');

    dayBtn.addEventListener('click', convertDays);
    hourBtn.addEventListener('click', convertHours);
    minuteBtn.addEventListener('click', convertMinutes);
    secondBtn.addEventListener('click', convertSeconds);


    function convertDays() {
        let days = Number(document.getElementById('days').value);
        let hours = document.getElementById('hours');
        let minutes = document.getElementById('minutes');
        let seconds = document.getElementById('seconds');

        hours.value = days * 24;
        minutes.value = days * 1440;
        seconds.value = days * 86400;
    }

    function convertHours() {
        let days = document.getElementById('days');
        let hours = Number(document.getElementById('hours').value);
        let minutes = document.getElementById('minutes');
        let seconds = document.getElementById('seconds');

        days.value = hours / 24;
        minutes.value = hours * 60;
        seconds.value = hours * 60 * 60;
    }

    function convertMinutes() {
        let days = document.getElementById('days');
        let hours = document.getElementById('hours');
        let minutes = Number(document.getElementById('minutes').value);
        let seconds = document.getElementById('seconds');

        days.value = minutes / (60 * 24);
        hours.value = minutes / 60;
        seconds.value = minutes * 60;
    }

    function convertSeconds() {
        let days = document.getElementById('days');
        let hours = document.getElementById('hours');
        let minutes = document.getElementById('minutes');
        let seconds = Number(document.getElementById('seconds').value);

        days.value = seconds / (60 * 60 * 24);
        hours.value = seconds / (60 * 60);
        minutes.value = seconds / 60;
    }
}