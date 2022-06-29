console.log('Hello, world')

let today = new Date();
var day = today.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
var date = today.getMonth()+1+'-'+(today.getDate())+'-'+today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes();
var dateTime = date+' and it is '+time + " o'clock";
 
document.getElementById("displayDateTime").innerHTML = ' Today is ' + daylist[day] + dateTime;

 function disDesc(){
    const description = document.querySelector(".description");
    if (description.style.display === "block") {
     description.style.display = "none";
    } else {
        description.style.display = "block";
        
    }
  } 
  function disDesc2(){
    const description2 = document.querySelector(".description2");
    if (description2.style.display === "none") {
     description2.style.display = "block";
    } else {
        description2.style.display = "none";
        
    }
  } 

  function disDesc3(){
    const description3 = document.querySelector(".description3");
    if (description3.style.display === "none") {
     description3.style.display = "block";
    } else {
        description3.style.display = "none";
        
    }
  } 

  function disDesc4(){
    const description4 = document.querySelector(".description4");
    if (description4.style.display === "none") {
     description4.style.display = "block";
    } else {
        description4.style.display = "none";
        
    }
  } 

  function disDesc5(){
    const description5 = document.querySelector(".description5");
    if (description5.style.display === "none") {
     description5.style.display = "block";
    } else {
        description5.style.display = "none";
        
    }
  } 

  function disDesc6(){
    const description6 = document.querySelector(".description6");
    if (description6.style.display === "none") {
     description6.style.display = "block";
    } else {
        description6.style.display = "none";
        
    }
  } 
