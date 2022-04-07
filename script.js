// const newYears = "1 jan 2022";
const daysEl=document.getElementById('days');
const hoursEl=document.getElementById('hours');
const minsEl =document.getElementById('mins');
const secondsEl=document.getElementById('seconds');


 function countdown() {
//     const newYearsDate = new Date(newYears);
//     const currentDate = new Date();

//     const seconds = (newYearsDate - currentDate) / 1000;

//     const days = Math.floor(seconds/ 3600 / 24);

//     console.log(newYearsDate - currentDate);
// }

// countdown();

// setInterval(countdown , 1000);

const dest = new Date("dec 31, 2022").getTime();
const now = new Date().getTime();
const diff = dest - now;

const days = Math.floor(diff / (1000*60*60*24));
const hours = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
const mins = Math.floor((diff % (1000*60*60)) / (1000*60));
const seconds = Math.floor((diff % (1000*60) ) / (1000));

daysEl.innerHTML = days;
hoursEl.innerHTML = formatTime(hours);
minsEl.innerHTML = formatTime(mins);
secondsEl.innerHTML = formatTime(seconds);
 }

 function formatTime(time) {
     return time < 10 ? `0${time}` : time;
 }


 countdown();

 setInterval(countdown, 1000);