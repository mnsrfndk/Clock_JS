let clockDOM = document.querySelector('#clock');

/*
    Since we are going to use 12 hours AM-PM system,
    toLocaleTimeString() method won't do.
    That's why we get seconds, minutes and hours
    seperately and display them using template literals.
*/
function clock() {
const date = new Date();
let seconds = date.getSeconds();
let minutes = date.getMinutes();
let hours = date.getHours();
let hoursDisplayed = hours;
let am_pm = "AM";

/*
    To be able to decide whether it's AM or PM;
    we check if hours is equal or bigger to 12
    and if it is, then we subtract 12 from hours
    displayed. Notice we declared another variable
    for hours for displaying in order to avoid
    changing the original value of hours.
*/
if(hours>=12) {
 hoursDisplayed -= 12;
 am_pm = "PM";
}

/*
    Code below is to avoid the Errors like this:
    Error =>   11:1:1    /  8:23:2   /  5:0:7
    Correct => 11:01:01  /  08:23:02 /  05:00:07
*/
if(seconds < 10) {
    seconds = "0"+seconds;
}
if(minutes < 10) {
    minutes = "0"+minutes;
}
if(hoursDisplayed < 10) {
    hoursDisplayed = "0"+hoursDisplayed;
}


clockDOM.innerText = `${hoursDisplayed}:${minutes}:${seconds} ${am_pm}`;
}
setInterval(clock,1000);