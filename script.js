const HOUR_HAND = document.querySelector("#hour");
const MINUTE_HAND = document.querySelector("#minute");
const SECOND_HAND = document.querySelector("#second");

const HOUR_SECTOR = 360 / 12;
const MINUTE_SECTOR = 360 / 60;
const SECOND_SECTOR = 360 / 60;


// Configuration

function resetClock(){
  let hourPosition = 355;        // Hour arm Degree
  let minPosition = 0;         // Minute arm Degree
  let secPosition = 0;         // Second arm Degree

  // update
  var date = new Date();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();

  // Calculate
  hourPosition = (hour > 12 ? hour - 12 : hour) * HOUR_SECTOR;
  hourPosition += HOUR_SECTOR * (minute/MINUTE_SECTOR);
  minPosition = minute * MINUTE_SECTOR;
  secPosition = second * SECOND_SECTOR;

  // Move
  HOUR_HAND.style.transform = "rotate(" + hourPosition + "deg)";
  MINUTE_HAND.style.transform = "rotate(" + minPosition + "deg)";
  SECOND_HAND.style.transform = "rotate(" + secPosition + "deg)";
}

const interval = setInterval(resetClock, 1000);
