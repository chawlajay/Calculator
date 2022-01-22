const owm_app_id = "3265874a2c77ae4a04bb96236a642d2f";
const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");
getWeatherByLocation("surat");
async function getWeatherByLocation(location){
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid="+owm_app_id+"&units=metric";
    const resp = await fetch(url);
    const respData = await resp.json();
    console.log(respData);
    addWeatherToPage(respData);
}

function addWeatherToPage(data){
  const temp = data.main.temp;

  const weather = document.createElement("div");
  weather.classList.add("weather");
  weather.innerHTML = `
  <small>It is</small>
  <h2>${temp}°C</h2>
  <p>in ${data.name}</p>
  `;

  main.appendChild(weather);
}