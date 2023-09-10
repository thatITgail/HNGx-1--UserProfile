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


// Assign to respective selectors
const updateClock = () => {
  const date = new Date();
  const day = weekDays[date.getDay()];
  const mnth = date.getMonth();
  const yr = date.getFullYear();
  currentDay.textContent = day
  mnthYr.textContent = `${mnth}, ${yr}`;

  const utcHrs = date.getUTCHours();
  const utcMins = date.getUTCMinutes();
  const utcSecs = date.getUTCSeconds();
  const utcTime = `${utcHrs}:${utcMins}:${utcSecs}`;
  
  timeInMs.innerHTML = utcTime;
}
setInterval(updateClock, 1000)


