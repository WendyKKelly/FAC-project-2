console.log('Hello, world')

let today = new Date();
var day = today.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
var date = today.getMonth()+1+'-'+(today.getDate())+'-'+today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes();
var dateTime = date+' and it is '+time + " o'clock";
 
document.getElementById("displayDateTime").innerHTML = ' Today is ' + daylist[day] + dateTime;

function displayDescription() {
    const x = document.getElementById("#description1");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "none";
    }
  } 
  function displayDescription() {
    var x = document.getElementById("#description2");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "none";
    }
  } 
  function displayDescription() {
    var x = document.getElementById("#description3");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "none";
    }
  } 
  function displayDescription() {
    var x = document.getElementById("#description4");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "none";
    }
  } 
  function displayDescription() {
    var x = document.getElementById("#description5");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "none";
    }
  } 
  function displayDescription() {
    var x = document.getElementById("#description6");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "none";
    }
  } 