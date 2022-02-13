const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveawayDate = document.getElementById("date");
let deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let futureDate = new Date(2022,1,22,2,22,22,22);
let options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric"
};

giveawayDate.innerHTML = futureDate.toLocaleDateString('en-US',options);

const futureTime = futureDate.getTime();
let timer = setInterval(getRemainingTime,1000);
getRemainingTime();

function getRemainingTime(){
  const today = new Date().getTime();
  
  const t = futureTime - today;
  
  const seconds = Math.floor((t/1000)%60);
  const minutes = Math.floor((t/(1000*60))%60);
  const hours = Math.floor((t/(1000*60*60))%24);
  const days = Math.floor(t/(1000*60*60*24));

  if(t<0)
  {
    clearInterval(timer);
    // days=0,hours=0,minutes=0,seconds=0;
    deadline.innerHTML = `<h4> sorry, this giveaway expired. </h4>`;
    // console.log(deadline.innerHTML);
  }
  else{
  items[0].innerHTML = addZero(days);
  items[1].innerHTML = addZero(hours);
  items[2].innerHTML = addZero(minutes);
  items[3].innerHTML = addZero(seconds);
  }
}

function addZero(num){
if(num<10)
num = "0"+num;
return num;
}