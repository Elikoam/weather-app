let citySearch = document.querySelector("#search-form");
citySearch.addEventListener("submit", replace);
function replace(event) {
  event.preventDefault();
  let replacedCity = document.querySelector(".form-control");
  let city = replacedCity.value;
  city = city.trim();
  city = city.charAt(0).toUpperCase() + city.slice(1);

  let nowTime = new Date();
  let changeTime = document.querySelector("#time");
  let Day = nowTime.getDay();
  let Days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thuesday",
    "Friday",
    "Saturday"
  ];
  let dayName = [Days[Day]];
  let hour = nowTime.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minute = nowTime.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }
  changeTime.innerHTML = `${dayName} ${hour}:${minute}`;

  let apiKey = "34ae1065362d42545661451bda2b8a1f";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  function showWeather(response) {
    console.log(response);
    let cityElement = document.querySelector("h1");
    cityElement.innerHTML = response.data.name;
    let temperature = Math.round(response.data.main.temp);
    console.log(temperature);
    let temperatureElement = document.querySelector(".temperature");
    temperatureElement.innerHTML = `${temperature}`;

    let description = response.data.weather[0].description;
    let descriptionElement = document.querySelector("#description");
    descriptionElement.innerHTML = `${description}`;

    let humidity = Math.round(response.data.main.humidity);
    let humidityElement = document.querySelector("#humidity");
    humidityElement.innerHTML = `${humidity}`;

    let windy = Math.round(response.data.wind.speed);
    let windyElement = document.querySelector("#wind");
    windyElement.innerHTML = `${windy}`;
  }

  axios.get(apiUrl).then(showWeather);
}

//bonose

let currentCity = document.querySelector("#current");
currentCity.addEventListener("click", display);
function display(event) {
  navigator.geolocation.getCurrentPosition(showLocation);
  function showLocation(position) {
    console.log(position);
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiKey = "34ae1065362d42545661451bda2b8a1f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    function showWeather(response) {
      console.log(response);
      let currentCity = response.data.name;
      let currentCityElement = document.querySelector("h1");
      currentCityElement.innerHTML = `${currentCity}`;

      let temperature = Math.round(response.data.main.temp);
      let temperatureElement = document.querySelector(".temperature");
      temperatureElement.innerHTML = `${temperature}`;

      let description = response.data.weather[0].description;
      let descriptionElement = document.querySelector("#description");
      descriptionElement.innerHTML = `${description}`;

      let humidity = Math.round(response.data.main.humidity);
      let humidityElement = document.querySelector("#humidity");
      humidityElement.innerHTML = `${humidity}`;

      let windy = Math.round(response.data.wind.speed);
      let windyElement = document.querySelector("#wind");
      windyElement.innerHTML = `${windy}`;
    }

    axios.get(apiUrl).then(showWeather);
    let nowTime = new Date();
    let changeTime = document.querySelector("#time");
    let Day = nowTime.getDay();
    let Days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thuesday",
      "Friday",
      "Saturday"
    ];
    let dayName = [Days[Day]];
    let hour = nowTime.getHours();
    if (hour < 10) {
      hour = `0${hour}`;
    }
    let minute = nowTime.getMinutes();
    if (minute < 10) {
      minute = `0${minute}`;
    }
    changeTime.innerHTML = `${dayName} ${hour}:${minute}`;
  }
}
