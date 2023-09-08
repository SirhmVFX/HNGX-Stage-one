function displayUtcTime() {
  const curentUtcTime = new Date().getTime();
  return curentUtcTime;
}

const currentTimeElement = document.getElementById("current-time");

const currentUTCTimeMillis = displayUtcTime();
currentTimeElement.textContent = `Current UTC Time in Milliseconds: ${currentUTCTimeMillis}`;

function getCurrentDayOfWeek() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDayIndex = new Date().getDay();
  return daysOfWeek[currentDayIndex];
}

const currentDayElement = document.getElementById("current-day");
const currentDay = getCurrentDayOfWeek();
currentDayElement.textContent = `Current Day of the Week: ${currentDay}`;
