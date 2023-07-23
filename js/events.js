let year = new Date().getFullYear();
year++;
let countDownDate = new Date("Jan 1, " + year + " 00:00:00").getTime();
let dateNow = new Date().getTime();
let dateDiff = countDownDate - dateNow;
let now = function() {
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
    document.querySelector(".days").innerHTML = days < 10 ? `00${days}` : (days >= 10 && days < 100) ? `0${days}` : days;
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;
}
now();
let counter = setInterval(() => {
    countDownDate = new Date("Jan 1, " + year + " 00:00:00").getTime();
    dateNow = new Date().getTime();
    dateDiff = countDownDate - dateNow;
    if (dateDiff < 0) {
        clearInterval(counter);
    }
    else {
        now();
    }
}, 1000);