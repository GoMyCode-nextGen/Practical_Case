// a helper function that will generate a html template for the fetched wheather Data
function generateWeatherHTML(data) {
  const weather = data.weather[0];
  const iconName = weather.icon;
  const iconUrl = `http://openweathermap.org/img/wn/${iconName}.png`;

  return `
        <h2>Weather in ${data.name}, ${data.sys.country}</h2>
        <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
        <p><strong>Feels like:</strong> ${data.main.feels_like} °C</p>
        <p><strong>Description:</strong> ${weather.description}</p>
        <img class="weather-icon" src="${iconUrl}" alt="${weather.main}">
        <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
        <p><strong>Pressure:</strong> ${data.main.pressure} hPa</p>
        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
        <p><strong>Sunrise:</strong> ${new Date(
          data.sys.sunrise * 1000
        ).toLocaleTimeString()}</p>
        <p><strong>Sunset:</strong> ${new Date(
          data.sys.sunset * 1000
        ).toLocaleTimeString()}</p>
    `;
}

document.getElementById("get").addEventListener("click", async function () {
  const city = document.getElementById("city").value;
  //add your api key  here
  const api_key = "";
  const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${api_key}`;
  


  // TODO : Fetch the weather url.
  // ps : you are free to use axios, fetch or whatever you want as data fetching lib.
  // after extraction the json object from the response you will need to inject the generated
  // html with generateWeatherHTML function inside the dive with the id "weather-details" in your your html document
});
