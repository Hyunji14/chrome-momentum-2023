const API_KEY = "cc71d22a7254a55de5e2a52fb70d9c5c";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const icon = document.querySelector("#weather img");
      const weather = document.querySelector("#weather span:nth-child(2)");
      const city = document.querySelector("#weather span:last-child");

      icon.src = `img/icon/${data.weather[0].icon}.png`;
      city.innerText = data.name;
      weather.innerHTML = `${data.weather[0].main} / ${data.main.temp}&deg;C`;
    });
}

function onGeoError() {
  alert("ERROR, We can't get your Weather!");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
