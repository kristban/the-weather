function displayedCity(response) {
  let temperatureElement = document.querySelector("#temperature-number");
  let temperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#city");

  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = temperature;
}

function search(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let city = cityInput.value;

  let apiKey = "7a9df9a4f940btc116d43db796o3aa67";
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiURL).then(displayedCity);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [  
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchCity = document.querySelector("#enter-city");
searchCity.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-time");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);
