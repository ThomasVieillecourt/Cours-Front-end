let weather = {
  method: "GET",
  apiKey: "f174d896dc1f22b2da4b23f34c633f56",
  mode: "cors",
  cache: "default",
  city: document.getElementById("search").value,
  // https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=f174d896dc1f22b2da4b23f34c633f56 //
  // https://openweathermap.org/current //
};

const search = document.getElementById("search");
const text = document.querySelector("h2");
const cityCard = document.getElementById("city");
const humidity = document.getElementById("humidity");
const iconWeather = document.getElementById("iconWeather");
const descriptionWeather = document.getElementById("descriptionWeather");
const windSpeed = document.getElementById("windSpeed");

function fetchWeather() {
  let apiKey = "f174d896dc1f22b2da4b23f34c633f56";
  let city = search.value;
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&units=metric&appid=" +
      apiKey
  )
    .then((res) => res.json())
    .then((data) => {
      const content = data;
      console.log(data);

      text.textContent = Math.floor(content.main.temp) + "°C";
      cityCard.textContent = content.name;
      humidity.textContent = "Humidité : " + content.main.humidity + "%";
      icon = content.weather[0].icon;
      iconWeather.src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
      descriptionWeather.textContent = content.weather[0].description;
      windSpeed.textContent =
        "Vitesse du vent : " + Math.floor(content.wind.speed) + " km/h";

      // body.style.background =
    });
}
fetchWeather();

search.addEventListener("input", (e) => {
  e.preventDefault();
  fetchWeather();
});
