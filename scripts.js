var wakeuptime = 7;
var noon = 12;
var lunchtime = 12;
var naptime = lunchtime + 2;
var partytime;
var evening = 18;

// show the current time on the page
var showCurrentTime = function() {
  // display the string on the webpage
  var clock = document.getElementById('clock');
  
  var currentTime = new Date();
  
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var meridian = "AM";
  
  // set hours
  if (hours >= noon) {
      meridian = "PM";
  }
  
  if (hours > noon) {
     hours = hours - 12;
  } 
  
  //set Minutes
  if (minutes < 10) {
      minutes = "0" + seconds;
  }
  
  // put together the string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
    clock.innerText = clockTime;
};

// Getting the clock to increment on its own and change out messages and pictures
var updateClock = function() {

  var time = new Date().getHours();
  var messageText;
  var image = "furbabies.jpg";

  var timeEventJS = document.getElementById("timeEvent");
  var furBabiesImageJS = document.getElementById('furbabies');
  
  if (time== partytime) {
     image = "teagan_party.jpg";
     messageText = "Let's party!";
    
  } else if (time == wakeuptime) {
     image = "alaina.jpg";
     messageText = "Wake up!";
    
  }
