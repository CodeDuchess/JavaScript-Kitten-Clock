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
let messageText;
let timeEventJS;
var updateClock = function() {
  var time = new Date().getHours();
 
  var image = "furbabies.jpg";

  timeEventJS = document.getElementById("timeEvent");
  var furBabiesImageJS = document.getElementById('furbabies');
  
  if (time== partytime) {
     image = "teagan_party.jpg";
     messageText = "Let's party!";
    
  } else if (time == wakeuptime) {
     image = "alaina.jpg";
     messageText = "Wake up!";
    
   } else if (time == lunchtime) {
      image = "tesla_yoga2.jpg";
      messageText = "Let's Nosh!";
     
   }else if (time == naptime) {
      image = "tesla_day_rescued.jpg";
      messageText = "Sleep tight!";
     
   } else if (time < noon) {
      image = "tesla_yoga".jpg;
      messageText = "Good morning";
     
   } else if (time >= evening) {
      image = "furbabies.jpg";
      messageText = "Good evening!";
     
   } else
     image= "alaina.jpg";
     messageText = "Good afternoon!";
   
   }
    console.log(messageText); 
    timeEventJS.innerText = messageText;
    furbabiesImg.src = image;
  
    showCurrentTime();

updateClock();

// Getting the clock to increment once a second
var oneSecond = 1000;
setInterval( updateClock, oneSecond);


// Getting the Party Time Button To Work
var partyButton = document.getElementById("partyTimeButton");

var partyEvent = function()
{
    if (partytime < 0) 
    {
        partytime = new Date().getHours();
        partyTimeButton.innerText = "Party Over!";
        partyTimeButton.style.backgroundColor = "#0A8DAB";
    }
    else
    {
        partytime = -1;
        partyTimeButton.innerText = "Party Time!";
        partyTimeButton.style.backgroundColor = "#222";
    }
};

partyButton.addEventListener("click", partyEvent);
partyEvent(); 


// Activates Wake-Up selector
var wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");

var wakeUpEvent = function()
{
    wakeuptime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);


// Activates Lunch selector
var lunchTimeSelector =  document.getElementById("lunchTimeSelector");

var lunchEvent = function()
{
    lunchtime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener("change", lunchEvent);


// Activates Nap-Time selector
var napTimeSelector =  document.getElementById("napTimeSelector");

var napEvent = function()
{
    naptime = napTimeSelector.value;
};

napTimeSelector.addEventListener("change", napEvent);
