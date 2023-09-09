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
const currentDay = document.getElementById("currDay");
const mnthYr = document.getElementById("mnth-yr");
const timeInMs = document.getElementById("time")
// Date constructor
const date = new Date();
let day = weekDays[date.getDay()];
let mnth = date.getMonth();
let yr = date.getFullYear();
let utcTime = date.getUTCMilliseconds();
// Assign to respective selectors
currentDay.textContent = day
mnthYr.textContent = `${mnth},${yr}`;
timeInMs.textContent = utcTime;


