var daysTotall = document.getElementById("daysTotal");
var leftt100 = document.getElementById("left100");
var dayz100 = document.getElementById("days100");
var leftt140 = document.getElementById("left140");
var dayz140 = document.getElementById("days140");
var leftt200 = document.getElementById("left200");
var dayz200 = document.getElementById("days200");

var jojoDayss = document.getElementById("jojoDays");

//GET https: api.fortnitetracker.com/v1/profile/all/whereyobaldat
//X-API-Key: 0b6cfdb6-7120-4286-9c14-9cbe819a0f7d

// Get the current date
var today = new Date();


// Get the target date
var finDate = new Date(2025, 5, 7);

// Get the number of milliseconds in 1 day
var dayMilliseconds = 1000 * 60 * 60 * 24;

// Get the remaining amount of days
var remainingDays = Math.ceil(
  (finDate.getTime() - today.getTime()) / dayMilliseconds
);

if (document.cookie.length!=0){
  //console.log(document.cookie);
  document.getElementById("lvl").value = document.cookie;
}

daysTotall.innerHTML = remainingDays;

function newDay(){
   finDate = new Date(2025, 5, 7);
 remainingDays = Math.ceil(
  (finDate.getTime() - today.getTime()) / dayMilliseconds
);
daysTotall.innerHTML = remainingDays;
}



jojoDayss.innerHTML = Math.ceil(
  (new Date(2025, 5, 18).getTime() - today.getTime()) / dayMilliseconds
);

function compute() {
  var num = document.getElementById("lvl").value;
  document.cookie = parseInt(num);
  //alert(document.getElementById("lvl").innerText);
  //expires=Fri, 05 June 2022 00:00:00 UTC; path=/;
  
  if (!num) {
    leftt100.innerHTML = "<br>enter a number smelly <br>";
    cleartext();
  } else if (num >= 200) {
    leftt100.innerHTML = "<br>why r u using this and why do u have so much free time<br>";
    cleartext();
  } else if (num < 0) {
    leftt100.innerHTML = "<br>nice try kid<br>";
    cleartext();
  } else if (num >= 150) {
    leftt100.innerHTML = "<br>levels to 100: <br>done! congrats! :]";
    dayz100.innerHTML = null;
    leftt140.innerHTML = "<br>levels to 150: <br>done! congrats! :]";
    dayz140.innerHTML = null;
    calc200();
  }  else if (num >= 100) {
    leftt100.innerHTML = "<br>levels to 100: <br>done! congrats! :]";
    dayz100.innerHTML = null;
    calc140();
    calc200();
  } else {
    calc100();
    calc140();
    calc200();
  }
  function cleartext() {
    dayz100.innerHTML = null;
    leftt140.innerHTML = null;
    dayz140.innerHTML = null;
    leftt200.innerHTML = null;
    dayz200.innerHTML = null;
}

  function calc100() {
    leftt100.innerHTML = "levels to 100: <br>" + (100 - num);
    dayz100.innerHTML = "<br><br>daily levels to stay on track: <br>" + Math.round((100 - num) / remainingDays * 100.0) / 100.0;
}
  function calc140() {
    leftt140.innerHTML = "levels to 150: <br>" + (150 - num);
    dayz140.innerHTML = "<br><br>daily levels to stay on track: <br>" + Math.round((150 - num) / remainingDays * 100.0) / 100.0;
}
  function calc200() {
    leftt200.innerHTML = "levels to 200: <br>" + (200 - num);
    dayz200.innerHTML = "<br><br>daily levels to stay on track: <br>" + Math.round((200 - num) / remainingDays * 100.0) / 100.0;
}
}


