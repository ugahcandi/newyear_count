let yearEl = document.querySelector(".year");
let dayEl = document.getElementById("day");
let hourEl = document.getElementById("hour");
let minuteEl = document.getElementById("minute");
let secondsEl = document.getElementById("seconds");
let NewYearTime = new Date("january 1, 2024 01:00:50").getTime()
//getTime() gets exact time required

updateCountDown()
function updateCountDown(){
    //get the exact time now in seconds  (using getTime()) and the time on new year day 2024 and take the difference
    const now = new Date().getTime() 
    const gap = NewYearTime - now;
    
    const second = 1000
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;  
    const d = Math.floor(gap/day);
    const h = Math.floor((gap % day)/ hour);
    const m = Math.floor((gap % hour)/ minute)
    const s = Math.floor((gap % minute)/ second)

    dayEl.innerHTML = d;
    hourEl.innerHTML = h;
    minuteEl.innerHTML = m;
    secondsEl.innerHTML = s;

    if (h > 2){
        hourEl.style='content: hoursss';
        hourEl.style='background-Color: red';
        // console.log("yeah")
    }

    if (s < 52){
        secondsEl.style='content: second';
        secondsEl.style='background-Color: red';
        // console.log("yeah")
    }


    setTimeout(updateCountDown, 1000)
}

