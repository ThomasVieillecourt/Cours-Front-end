// https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=f174d896dc1f22b2da4b23f34c633f56 //
// https://openweathermap.org/current //
// "https://openweathermap.org/img/wn/" + icon + "@2x.png";

const search = document.getElementById("search");
const cityWeather = document.getElementById("city");

function fetchDisplay() {
  let city = search.value;

  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&units=metric&appid=f174d896dc1f22b2da4b23f34c633f56"
  )
    .then((res) => res.json())
    .then((data) => {
      const dataWeather = data;
      console.log(data);

      let icon = dataWeather.weather[0].icon;
      cityWeather.textContent = dataWeather.name;
      temp.textContent = Math.round(dataWeather.main.temp) + " °";
      iconWeather.src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
      humidity.innerHTML =
        `<p>Humidité : <br>` + dataWeather.main.humidity + ` %</p>`;
      // "Humidité : " + dataWeather.main.humidity + " %";
      windSpeed.innerHTML =
        `<p>Vitesse du vent : <br>` + dataWeather.wind.speed + ` km/h</p>`;

      let arrayWeather = [
        "Nuageux",
        "Ensoleillé",
        "Faible pluie",
        "Averse",
        "Orage",
        "Neige",
      ];

      if (dataWeather.weather[0].main == "Clouds") {
        descriptionWeather.textContent = arrayWeather[0];
        body.style.background = "url('img/clouds.jpg') center/cover";
      } else if (dataWeather.weather[0].main == "Clear") {
        descriptionWeather.textContent = arrayWeather[1];
        body.style.background = "url('img/sun.jpg') center/cover";
      } else if (dataWeather.weather[0].main == "Light rain") {
        descriptionWeather.textContent = arrayWeather[2];
        body.style.background = "url('img/rain.jpg') center/cover";
      } else if (dataWeather.weather[0].main == "Rain") {
        descriptionWeather.textContent = arrayWeather[3];
        body.style.background = "url('img/rain.jpg') center/cover";
      } else if (dataWeather.weather[0].main == "thunderstorm") {
        descriptionWeather.textContent = arrayWeather[4];
        body.style.background = "url('img/thunder.jpg') center/cover";
      } else if (dataWeather.weather[0].main == "shower rain") {
        descriptionWeather.textContent = arrayWeather[3];
        body.style.background = "url('img/rain.jpg') center/cover";
      } else if (dataWeather.weather[0].main == "snow") {
        descriptionWeather.textContent = arrayWeather[5];
        body.style.background = "url('img/snow.jpg') center/cover";
      }
    });
}
fetchDisplay();

search.addEventListener("change", () => fetchDisplay());
