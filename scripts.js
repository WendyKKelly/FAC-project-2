console.log('Hello, world')

let today = new Date();
var day = today.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
var date = today.getMonth()+1+'-'+(today.getDate())+'-'+today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes();
var dateTime = date+' and it is '+time + " o'clock";
 
document.getElementById("displayDateTime").innerHTML = ' Today is ' + daylist[day] + dateTime;

function displayDescription() {
    const child = document.querySelector("#description");
    if (child.className == "open") {
     child.className = "";
     button.innerHTML = "Show More"
    } else {
        article.className = "open";
        button.innerHTML = "Show Less"
    }
  } 
