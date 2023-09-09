const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday", 
  "Saturday"
]
// Selectors
const currentDay = document.querySelector(
  "[data-testid ='currentDayOfTheWeek']")
const mnthYr = document.getElementById("mnth-yr");
const timeInMs = document.querySelector("[data-testid ='currentUTCTime']");

// Date constructor
const date = new Date();
let day = weekDays[date.getDay()];
let mnth = date.getMonth();
let yr = date.getFullYear();
let utcTime = date.getUTCMilliseconds();

// Assign to respective selectors
currentDay.textContent = day
mnthYr.textContent = `${mnth}, ${yr}`;
setInterval(() => {
  timeInMs.textContent = utcTime;
  utcTime++;
}, 1000)


