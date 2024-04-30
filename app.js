let sec = 0;
let min = 0;
let hour = 0;
let secInterval;
let minInterval;
let hourInterval;

let hours = document.querySelector("#hour");
let minute = document.querySelector("#minute");
let seconds = document.querySelector("#second");

function startBtn() {
  

   secInterval = setInterval(function () {
    sec += 1;
    if (sec > 9) {
      seconds.innerHTML = sec;
    } else {
      seconds.innerHTML = "0"+ sec;
    }
    if (sec == 59) {
      sec = 0;
    }
  }, 1000);


   minInterval = setInterval(function () {
    min += 1;
    if(min>9){
     minute.innerHTML = min; 
    }else{
      minute.innerHTML = "0" + min;
    }
    if (min == 59) {
      min = 0;
    }
  }, 60000);


hourInterval =  setInterval(function () {
    hour += 1;
    if (hour > 9) {
      hours.innerHTML = hour;
    } else {
      hours.innerHTML = "0" + hour;
    }
    if (hour == 59) {
      hour = 0;
    }
  }, 3600000);
  
}



function stopInterval() {
   clearInterval(secInterval);
   clearInterval(minInterval);
   clearInterval(hourInterval);
  
}

function reset() {
 hour=0;
 sec=0;
 min=0;

 hours.innerHTML= "00 ";
 minute.innerHTML= "00 ";
 seconds.innerHTML= "00";

 clearInterval(secInterval);
 clearInterval(minInterval);
 clearInterval(hourInterval);

}