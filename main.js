(function(){
  "use strict";

  var hours = document.querySelector('.hours');
  var minutes = document.querySelector('.minutes');
  var seconds = document.querySelector('.seconds');
  var currentTime;

function displayTime() {
  currentTime = new Date();
  hours.textContent = ("0" + currentTime.getHours()).slice(-2); //used example from class for .slice
  minutes.textContent = ("0" + currentTime.getMinutes()).slice(-2);
  seconds.textContent = ("0" + currentTime.getSeconds()).slice(-2);
  percentOfMinute();
}

function percentOfMinute() {
  var minutePercent = (currentTime.getSeconds()/60) * 100;
  var timerBar = document.querySelector('.timer-bar');
  timerBar.style.width = minutePercent.toString() + "%" ;
}

function growLine() {
  var line = get
}

window.setInterval(displayTime, 1000);








}());
