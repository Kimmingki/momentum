// const API_KEY = "0803d86bfbcd69ad4d5152df38c1bd86";

// function onGeoOk(position) {
//   const lat = position.coords.latitude;
//   const lng = position.coords.longitude;
//   const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
//   const coordinatesObject = {
//     lat: position.coords.latitude,
//     lng: position.coords.longitude,
//   };
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       const weather = document.querySelector("#weather span:first-child");
//       const city = document.querySelector("#weather span:last-child");
//       city.innerText = data.name;
//       weather.innerText = `${data.weather[0].main} @${data.main.temp}°C`;
//     });
//   localStorage.setItem("coordinates", JSON.stringify(coordinatesObject));
// }

// function onGeoError() {
//   alert("Can't find you. No weather for you.");
// }

// navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

var CACHED_POSITION = "CACHED_POSITION";

var x = document.getElementById("weather");

var geocoder;

(function () {
  if (navigator.geolocation) {
    try {
      var position = JSON.parse(window.localStorage[CACHED_POSITION]);
      if (position) {
        successFunction(position);
        return;
      }
    } catch (e) {}
    navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
  }
})();

//Get the latitude and the longitude;
function successFunction(position) {
  window.localStorage[CACHED_POSITION] = JSON.stringify(position);

  var lat = position.coords.latitude;
  var lng = position.coords.longitude; //Save to cache
  codeLatLng(lat, lng);
}
