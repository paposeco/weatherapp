import weatherStats from "./script.js";
import "./style.css";

const locationsearch = document.getElementById("locationinput");
const submitsearch = document.getElementById("submitsearch");
const form = document.querySelector("form");

submitsearch.addEventListener("click", function (e) {
  e.preventDefault();

  if (form.checkValidity()) {
    const selectedlocation = encodeURIComponent(locationsearch.value);
    checkweather(selectedlocation);
  } else {
    locationsearch.setCustomValidity(
      "Write a valid location name. Letters and spaces are allowed."
    );
  }
  locationsearch.reportValidity();
});

async function checkweather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=da23e2206ca1765152d255ed5882ba1f`;
  try {
    const response = await fetch(url, { mode: "cors" });
    const fetcheddata = await response.json();
    const weathertoday = new weatherStats(
      fetcheddata.weather[0].main,
      fetcheddata.main.temp,
      fetcheddata.main.feels_like,
      fetcheddata.main.temp_min,
      fetcheddata.main.temp_max,
      fetcheddata.main.humidity,
      fetcheddata.sys.sunrise,
      fetcheddata.sys.sunset,
      fetcheddata.sys.country,
      fetcheddata.name
    );
    updateDom(weathertoday);
    return weathertoday;
  } catch (err) {
    console.error(err);
  }
}

const updateDom = function (weatherinfoobject) {
  const info = document.getElementById("info");
  const hfour = info.querySelectorAll(".hideshowtitle");
  const content = document.getElementById("content");
  const locationheader = document.getElementById("locationheader");
  const currenttemp = document.getElementById("currenttemp");
  const extratempinfo = document.getElementById("extratempinfo");
  const sun = document.getElementById("sun");

  hfour.forEach(function (title) {
    console.log(title);
    title.style.visibility = "visible";
    title.style.height = "min-content";
  });

  let unitstoggleLabel = document.querySelector("switch");
  if (unitstoggleLabel === null) {
    unitstoggleLabel = document.createElement("label");
    unitstoggleLabel.setAttribute("class", "switch");
    content.insertBefore(unitstoggleLabel, info);
    const unitstoggle = document.createElement("input");
    unitstoggle.setAttribute("type", "checkbox");
    const span = document.createElement("span");
    span.setAttribute("class", "slider round");
    unitstoggleLabel.appendChild(unitstoggle);
    unitstoggleLabel.appendChild(span);
  }

  locationheader.innerHTML = `${weatherinfoobject.city}, ${weatherinfoobject.country}`;
  currenttemp.innerHTML = weatherinfoobject.temperature[0] + "°C";
  const divfeelslike = document.getElementById("feelslike");
  const divmintemp = document.getElementById("mintemp");
  const divmaxtemp = document.getElementById("maxtemp");
  const divhumidity = document.getElementById("humidity");
  divfeelslike.innerHTML += weatherinfoobject.feelslike[0] + "°C";
  divmintemp.innerHTML += weatherinfoobject.mintemp[0] + "°C";
  divmaxtemp.innerHTML += weatherinfoobject.maxtemp[0] + "°C";
  divhumidity.innerHTML += weatherinfoobject.humidity + "%";

  const sunrise = document.getElementById("sunrise");
  const sunset = document.getElementById("sunset");
  sunrise.innerHTML += weatherinfoobject.sunrise;
  sunset.innerHTML += weatherinfoobject.sunset;
};
