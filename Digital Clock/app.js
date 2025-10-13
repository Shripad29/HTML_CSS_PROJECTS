const time = document.getElementById("time");
const timeformat = document.getElementById("timeformat");

document.addEventListener("DOMContentLoaded", () => {
  setInterval(showTime, 1000);
});

const showTime = () => {
  let date = new Date();
  let hr = date.getHours();
  let mins = date.getMinutes();
  let sec = date.getSeconds();

  // Determine AM or PM
  let ampm = hr >= 12 ? "PM" : "AM";

  // Convert 24-hour time to 12-hour time
  hr = hr % 12;
  hr = hr ? hr : 12; // if hour is 0, make it 12

  hr = hr < 10 ? `0${hr}` : hr;
  mins = mins < 10 ? `0${mins}` : mins;
  sec = sec < 10 ? `0${sec}` : sec;

  time.innerHTML = `${hr} : ${mins} : ${sec}`;
  timeformat.innerHTML = ampm;

//   timeformat.innerHTML = hr > 12 ? "PM" : "AM";
  // console.log("hr, min, sec", hr, min, sec);
};
