const owm_app_id = "3265874a2c77ae4a04bb96236a642d2f";
const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

async function getWeatherByLocation(city){
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid="+owm_app_id+"&units=metric";
    const resp = await fetch(url);
    const respData = await resp.json();
    console.log(respData);
    addWeatherToPage(respData);
}

function addWeatherToPage(data){
  const weather = document.createElement("div");
  weather.classList.add("weather");

  if(data.cod==200){
  const temp = data.main.temp;
  
  weather.innerHTML = `
  <h2><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /> ${temp}°C <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /></h2>
  <small>${data.weather[0].main}</small>
  `;
  }
  else{
  
  weather.innerHTML = `
  <p>No city found - error!</p>
  `;
  }

  main.innerHTML="";
  main.appendChild(weather);
}

form.addEventListener('submit',(e)=>{
e.preventDefault();
const city = search.value;
if(city)
getWeatherByLocation(city);
});