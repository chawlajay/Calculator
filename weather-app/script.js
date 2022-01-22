const APIURL = "https://www.metaweather.com/api/";
const owm_app_id = "3265874a2c77ae4a04bb96236a642d2f";

async function getWeatherByLocation(location){
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid="+owm_app_id+"&units=metric";
    const resp = await fetch(url);
    const respData = await resp.json();
    console.log(respData);
}

getWeatherByLocation("london");