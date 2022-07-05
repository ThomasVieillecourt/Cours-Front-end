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
      temp.textContent = Math.round(dataWeather.main.temp) + " °C";
      iconWeather.src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
      humidity.textContent = "Humidité : " + dataWeather.main.humidity + " %";
      windSpeed.textContent =
        "Vitesse du vent : " + dataWeather.wind.speed + " km/h";

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
      } else if (dataWeather.weather[0].main == "Clear") {
        descriptionWeather.textContent = arrayWeather[1];
      } else if (dataWeather.weather[0].main == "Light rain") {
        descriptionWeather.textContent = arrayWeather[2];
      } else if (dataWeather.weather[0].main == "Rain") {
        descriptionWeather.textContent = arrayWeather[3];
      } else if (dataWeather.weather[0].main == "thunderstorm") {
        descriptionWeather.textContent = arrayWeather[4];
      } else if (dataWeather.weather[0].main == "shower rain") {
        descriptionWeather.textContent = arrayWeather[3];
      } else if (dataWeather.weather[0].main == "snow") {
        descriptionWeather.textContent = arrayWeather[5];
      }
    });
}
fetchDisplay();

search.addEventListener("change", () => fetchDisplay());
