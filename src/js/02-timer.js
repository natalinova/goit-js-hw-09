// const flatpickr = require("flatpickr");
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const buttonStart = document.querySelector('button[data-start]');
const countOfDays = document.querySelector('[data-days]');
const countOfHours = document.querySelector('[data-hours]')
const countOfMinutes = document.querySelector('[data-minutes]');
const countOfSeconds = document.querySelector('[data-seconds]');
// let dateInFuture = null
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0]);
      if ((selectedDates[0] - Date.now()) < 0) {
          alert('Змініть дату, таймер не зможе спрацювати!');
          buttonStart.setAttribute('disabled', 'true')
         
      }
      else {
          buttonStart.removeAttribute('disabled')
      }
   
 
  },
};
const initCalendar = flatpickr("#datetime-picker", options);


buttonStart.addEventListener('click', timeCount);
function timeCount() {
    setInterval(() => {
        const dateInFuture = initCalendar.selectedDates[0];
         
        const delta = dateInFuture - Date.now();
        if (delta <= 0) {
            return
        }
        const objectData = convertMs(delta);
        console.log(objectData)
        changeDate(objectData);
        

    }, 1000)
    
}


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
function changeDate(dates) {
    countOfDays.textContent = addLeadingZero(dates.days);
    countOfHours.textContent = addLeadingZero(dates.hours);
    countOfMinutes.textContent = addLeadingZero(dates.minutes);
    countOfSeconds.textContent = addLeadingZero(dates.seconds)
    
    
}
function addLeadingZero(value) {
return String(value).padStart(2,'0')
}