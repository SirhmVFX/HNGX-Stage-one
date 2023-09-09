function fetchAndDisplayUTCTime() {
    const timeElement = document.querySelector('.time');
    const utcTime = new Date().toUTCString();
    timeElement.textContent = `UTC Time: ${utcTime}`;
}

function fetchAndDisplayDayOfWeek() {
    const dayOfWeekElement = document.querySelector('.dayOfTheWeek');
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDayOfWeek = new Date().getDay();
    const dayName = daysOfWeek[currentDayOfWeek];
    dayOfWeekElement.textContent = `Day of the Week: ${dayName}`;
}

function updateDateTime() {
    fetchAndDisplayUTCTime();
    fetchAndDisplayDayOfWeek();
}

updateDateTime();

setInterval(updateDateTime, 1000);
