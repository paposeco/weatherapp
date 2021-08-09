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
    const divloading = document.getElementById("loading");
    const loadingspan = divloading.querySelector("span");
    loadingspan.textContent = "Searching";
    divloading.style.visibility = "visible";
    const firstid = window.requestAnimationFrame(animatespinner.step);
    const response = await fetch(url, { mode: "cors" });
    if (response.status === 404) {
      divloading.style.visibility = "hidden";
      loadingspan.textContent = " Location not found";
      divloading.style.visibility = "visible";
      return;
    }
    const fetcheddata = await response.json();
    divloading.style.visibility = "hidden";
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
      fetcheddata.name,
      fetcheddata.timezone
    );
    updateDom(weathertoday);
    styledayornight(weathertoday);
    const checkbox = document.querySelector("input[type='checkbox']");
    checkbox.addEventListener("click", function (e) {
      const currenttemp = document.getElementById("currenttemp");
      if (currenttemp.innerHTML !== "") {
        if (checkbox.checked) {
          switchCF("fahr", weathertoday);
        } else {
          switchCF("celsius", weathertoday);
        }
      }
    });
    return weathertoday;
  } catch (err) {
    console.error(err);
  }
}

async function getweathergif(description) {
  const url = `https://api.giphy.com/v1/gifs/translate?api_key=WSIARvZTJXnRlA7vbrrNnAcfTIfQfRzp&s=${description}`;
  try {
    const response = await fetch(url, { mode: "cors" });
    const fetcheddata = await response.json();
    const imgurl = await fetcheddata.data.images.original.url;
    return imgurl;
  } catch (err) {
    console.error(err);
  }
}

const updateDom = async function (weatherinfoobject) {
  const info = document.getElementById("info");
  const hfour = info.querySelectorAll(".hideshowtitle");
  const locationheader = document.getElementById("locationheader");
  const currenttemp = document.getElementById("currenttemp");
  const extratempinfo = document.getElementById("extratempinfo");
  const sun = document.getElementById("sun");
  const weatherdescription = document.getElementById("weathergif");
  const img = document.getElementById("weathergifimg");

  hfour.forEach(function (title) {
    title.style.visibility = "visible";
    title.style.height = "min-content";
  });

  const inputcheck = document.querySelector("input[type='checkbox']");

  const phumidity = document.getElementById("humidity");
  locationheader.innerHTML = `${weatherinfoobject.city}, ${weatherinfoobject.country} &nbsp|&nbsp <i class="las la-clock"></i> ${weatherinfoobject.timeoffset}`;
  phumidity.innerHTML = weatherinfoobject.humidity + "%";
  if (inputcheck.checked) {
    switchCF("fahr", weatherinfoobject);
  } else {
    switchCF("celsius", weatherinfoobject);
  }
  const sunrise = document.getElementById("sunrise");
  const sunset = document.getElementById("sunset");
  sunrise.innerHTML = weatherinfoobject.sunrise;
  sunset.innerHTML = weatherinfoobject.sunset;

  document.getElementById("weathergifdesc").textContent =
    weatherinfoobject.weatherdescription + " | ";
  img.src = await getweathergif(weatherinfoobject.weatherdescription);
  weatherdescription.style.visibility = "visible";
  info.style.visibility = "visible";
};

function switchCF(unit, weatherinfoobject) {
  const currenttemp = document.getElementById("currenttemp");
  const pfeelslike = document.getElementById("feelslike");
  const pmintemp = document.getElementById("mintemp");
  const pmaxtemp = document.getElementById("maxtemp");
  if (unit === "celsius") {
    currenttemp.innerHTML = weatherinfoobject.temperature[0] + "°C";
    pfeelslike.innerHTML = weatherinfoobject.feelslike[0] + "°C";
    pmintemp.innerHTML = weatherinfoobject.mintemp[0] + "°C";
    pmaxtemp.innerHTML = weatherinfoobject.maxtemp[0] + "°C";
  } else {
    currenttemp.innerHTML = weatherinfoobject.temperature[1] + "°F";
    pfeelslike.innerHTML = weatherinfoobject.feelslike[1] + "°F";
    pmintemp.innerHTML = weatherinfoobject.mintemp[1] + "°F";
    pmaxtemp.innerHTML = weatherinfoobject.maxtemp[1] + "°F";
  }
}

const animatespinner = (function () {
  const spinelement = document.querySelector(".spinit");
  let start, previousTimeStamp, animationID;

  function step(timestamp) {
    const hiddenorvisibile = document.getElementById("loading").style
      .visibility;
    if (start === undefined) {
      start = timestamp;
    }
    let elapsed = timestamp - start;
    if (previousTimeStamp !== timestamp) {
      if (elapsed > 3600) {
        const minutes = Math.floor(elapsed / 3600);
        elapsed = elapsed - 3600 * minutes;
      }
      const count = Math.min(0.1 * elapsed, 360);
      spinelement.style.transform = "rotate(" + count + "deg)";
    }
    if (hiddenorvisibile === "visible") {
      animationID = window.requestAnimationFrame(step);
      return animationID;
    }
    window.cancelAnimationFrame(animationID);
  }
  return { step };
})();

const styledayornight = function (weatherinfoobject) {
  const hour = weatherinfoobject.timeoffset.split(":")[0];
  const sunrise = weatherinfoobject.sunrise.split(":")[0];
  const sunset = weatherinfoobject.sunset.split(":")[0];
  const body = document.querySelector("body");
  const extratempinfo = document.getElementById("extratempinfo");
  const extratempinfodiv = extratempinfo.querySelectorAll("div");
  const sun = document.getElementById("sun");
  const sundiv = sun.querySelectorAll("div");
  const inputsubmit = document.querySelector("input[type='submit']");
  const searchicon = document.querySelector(".la-search");
  const weatherdescription = weatherinfoobject.weatherdescription;
  if (hour > sunrise && hour < sunset) {
    body.setAttribute("class", "day");
    extratempinfodiv.forEach((div) => div.setAttribute("class", "dayDiv"));
    sundiv.forEach((div) => div.setAttribute("class", "dayDiv"));
    inputsubmit.style.backgroundColor = "#fff6c1";
    inputsubmit.style.color = "black";
    searchicon.style.color = "darkgrey";
    weathericonDay(weatherdescription);
  } else {
    body.setAttribute("class", "night");
    extratempinfodiv.forEach((div) => div.setAttribute("class", "nightDiv"));
    sundiv.forEach((div) => div.setAttribute("class", "nightDiv"));
    inputsubmit.style.backgroundColor = "#54586f";
    inputsubmit.style.color = "white";
    searchicon.style.color = "darkgrey";
    weathericonNight(weatherdescription);
  }
};

const weathericonDay = function (weatherdescription) {
  const weathericondiv = document.getElementById("weathericon");
  switch (weatherdescription) {
    case "Clouds":
      weathericondiv.innerHTML = '<i class="las la-cloud-sun"></i>';
      break;
    case "Clear":
      weathericondiv.innerHTML = '<i class="las la-sun"></i>';
      break;
    case "Rain":
      weathericondiv.innerHTML = '<i class="las la-cloud-showers-heavy"></i>';
      break;
    case "Snow":
      weathericondiv.innerHTML = '<i class="las la-snowflake"></i>';
      break;
    case "Drizzle":
      weathericondiv.innerHTML = '<i class="las la-cloud-rain"></i>';
      break;
    case "Thunderstorm":
      weathericondiv.innerHTML = '<i class="las la-bolt"></i>';
      break;
    default:
      weathericondiv.innerHTML = '<i class="las la-smog"></i>';
      break;
  }
};

const weathericonNight = function (weatherdescription) {
  const weathericondiv = document.getElementById("weathericon");
  switch (weatherdescription) {
    case "Clouds":
      weathericondiv.innerHTML = '<i class="las la-cloud-moon"></i>';
      break;
    case "Clear":
      weathericondiv.innerHTML = '<i class="lar la-moon"></i>';
      break;
    case "Rain":
      weathericondiv.innerHTML = '<i class="las la-cloud-rain"></i>';
      break;
    case "Snow":
      weathericondiv.innerHTML = '<i class="las la-snowflake"></i>';
      break;
    case "Drizzle":
      weathericondiv.innerHTML = '<i class="las la-cloud-moon-rain">';
      break;
    case "Thunderstorm":
      weathericondiv.innerHTML = '<i class="las la-bolt"></i>';
      break;
    default:
      weathericondiv.innerHTML = '<i class="las la-smog"></i>';
      break;
  }
};

window.onload = checkweather("Agroal");
