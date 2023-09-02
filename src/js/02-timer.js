import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    const currentDate = new Date();

    if (selectedDate <= currentDate) {
      
      window.alert("Please choose a date in the future");
      document.querySelector("button[data-start]").disabled = true;
    } else {
     
      document.querySelector("button[data-start]").disabled = false;
    }
  },
};

flatpickr("#datetime-picker", options);

function convertMs(ms) {
 
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;


  const days = Math.floor(ms / day);
 
  const hours = Math.floor((ms % day) / hour);

  const minutes = Math.floor(((ms % day) % hour) / minute);
 
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}


function addZero(value) {
  
  return value.toString().padStart(2, "0");
}

let countdownInterval;

document.querySelector("button[data-start]").addEventListener("click", () => {
  const selectedDate = new Date(document.querySelector("#datetime-picker").value);
  const currentDate = new Date();

  if (selectedDate <= currentDate) {
    window.alert("Please choose a date in the future");
    return;
  }

  clearInterval(countdownInterval); 

  countdownInterval = setInterval(() => {
    const timeLeft = selectedDate - new Date();
    if (timeLeft <= 0) {
      clearInterval(countdownInterval);
      document.querySelector("button[data-start]").disabled = true;
      return;
    }

    const { days, hours, minutes, seconds } = convertMs(timeLeft);

    document.querySelector("[data-days]").textContent = addZero(days);
    document.querySelector("[data-hours]").textContent = addZero(hours);
    document.querySelector("[data-minutes]").textContent = addZero(minutes);
    document.querySelector("[data-seconds]").textContent = addZero(seconds);
  }, 1000);
});
