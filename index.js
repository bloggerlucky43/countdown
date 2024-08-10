function startCountdown(duration) {
  let timer = duration,
    days,
    hours,
    minutes,
    seconds;
  setInterval(() => {
    days = Math.floor(timer / (24 * 60 * 60));
    hours = Math.floor((timer % (24 * 60 * 60)) / (60 * 60));
    minutes = Math.floor((timer % (60 * 60)) / 60);
    seconds = Math.floor(timer % 60);

    document.getElementById("days").innerHTML = days + "<span>Days</span>";
    document.getElementById("hours").innerHTML = hours + "<span>Hours</span>";
    document.getElementById("minutes").innerHTML =
      minutes + "<span>Minutes</span>";
    document.getElementById("seconds").innerHTML =
      seconds + "<span>Seconds</span>";

    timer--;

    // Add animation class
    document.getElementById("days").classList.add("animate");
    document.getElementById("hours").classList.add("animate");
    document.getElementById("minutes").classList.add("animate");
    document.getElementById("seconds").classList.add("animate");

    if (timer < 0) {
      clearInterval(interval);
      document.querySelector(".countdown").innerHTML = "EXPIRED";
    }
  }, 1000);
}

// 9 days in seconds
const nineDaysInSeconds = 10 * 24 * 60 * 60;

window.onload = () => {
  startCountdown(nineDaysInSeconds);
};
