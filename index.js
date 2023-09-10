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
const timeInMs = document.querySelector("[data-testid ='currentUTCTime']");


// Assign to respective selectors
const updateClock = () => {
  const date = new Date();
  const day = weekDays[date.getDay()];
  
  currentDay.textContent = day

  const utcHrs = date.getUTCHours();
  const utcMins = date.getUTCMinutes();
  const utcSecs = date.getUTCSeconds();
  const utcTime = `${utcHrs}:${utcMins}:${utcSecs}`;
  
  timeInMs.innerHTML = utcTime;
}
setInterval(updateClock, 1000)


