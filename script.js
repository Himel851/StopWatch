var hour = 0;
var min = 0;
var sec = 0;
var stopTime = true;

function startTimer() {
  if (stopTime == true) {
    stopTime = false;
    startOn();
  }
}
function startOn() {
  if (stopTime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hour = parseInt(hour);

    sec++;

    if (sec == 60) {
      min++;
      sec = 0;
    }
    if (min == 60) {
      hour++;
      sec = 0;
      min = 0;
    }
    if (sec < 10) {
      sec = "0" + sec;
    }
    if (min < 10) {
      min = "0" + min;
    }
    if (hour < 10) {
      hour = "0" + hour;
    }

    document.getElementById("stopwatch").innerText =
      hour + ":" + min + ":" + sec;
    setTimeout("startOn()", 200);
  }
}

function stopTimer() {
  if (stopTime == false) {
    stopTime = true;
  }
}

function reset() {
  document.getElementById("stopwatch").innerText = "00.00.00";
  hour = 0;
  min = 0;
  sec = 0;
  stopTime = true;
}
