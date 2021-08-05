const API_KEY = "0803d86bfbcd69ad4d5152df38c1bd86";

if (localStorage.getItem("coordinates") === null) {
  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
} else {
  const ls = localStorage.getItem("coordinates");
  const lat = JSON.parse(ls).lat;
  const lng = JSON.parse(ls).lng;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} @${data.main.temp}°C`;
    });
}

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  const coordinatesObject = {
    lat: position.coords.latitude,
    lng: position.coords.longitude,
  };
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} @${data.main.temp}°C`;
    });
  localStorage.setItem("coordinates", JSON.stringify(coordinatesObject));
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}
