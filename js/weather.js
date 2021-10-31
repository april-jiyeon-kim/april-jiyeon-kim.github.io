const weather = document.querySelector("#weather span:first-child");
const temp = document.querySelector("#weather span:nth-child(2)");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "6e1dace764035fe8d595821f5ea253eb";

let weatherIcons = {
  '01' : 'fas fa-sun', 
  '02' : 'fas fa-cloud-sun', 
  '03' : 'fas fa-cloud', 
  '04' : 'fas fa-cloud-meatball', 
  '09' : 'fas fa-cloud-sun-rain', 
  '10' : 'fas fa-cloud-showers-heavy', 
  '11' : 'fas fa-poo-storm', 
  '13' : 'far fa-snowflake', 
  '50' : 'fas fa-smog'
}

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      const icon = (data.weather[0].icon).substr(0,2);
      const weatherIcon = document.createElement("i");
      console.log(icon)
      console.log(weatherIcons[icon])
      weatherIcon.setAttribute("class",weatherIcons[icon])
      weather.appendChild(weatherIcon);
      temp.innerText = `${Math.floor(data.main.temp)}°`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);