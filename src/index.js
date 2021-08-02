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
  const content = document.getElementById("content");
  const loading = document.createElement("");
  const locationheader = document.getElementById("locationheader");
  const currenttemp = document.getElementById("currenttemp");
  const extratempinfo = document.getElementById("extratempinfo");
  const sun = document.getElementById("sun");
  const weatherdescription = document.getElementById("weathergif");
  let img;
  if (document.getElementById("weathergifimg") === null) {
    img = document.createElement("img");
    img.setAttribute("id", "weathergifimg");
    img.setAttribute("src", "#");
  } else {
    img = document.getElementById("weathergifimg");
    img.setAttribute("src", "#");
  }

  hfour.forEach(function (title) {
    title.style.visibility = "visible";
    title.style.height = "min-content";
  });

  const inputcheck = document.querySelector("input[type='checkbox']");

  const phumidity = document.getElementById("humidity");
  locationheader.innerHTML = `${weatherinfoobject.city}, ${weatherinfoobject.country}`;
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
    weatherinfoobject.weatherdescription;
  img.src = await getweathergif(weatherinfoobject.weatherdescription)
    .then(weatherdescription.appendChild(img))
    .then((document.getElementById("note").style.visibility = "visible"));
};

function switchCF(unit, weatherinfoobject) {
  const currenttemp = document.getElementById("currenttemp");
  const pfeelslike = document.getElementById("feelslike");
  const pmintemp = document.getElementById("mintemp");
  const pmaxtemp = document.getElementById("maxtemp");
  if (unit === "celsius") {
    currenttemp.innerHTML = "Temp " + weatherinfoobject.temperature[0] + "°C";
    pfeelslike.innerHTML = weatherinfoobject.feelslike[0] + "°C";
    pmintemp.innerHTML = weatherinfoobject.mintemp[0] + "°C";
    pmaxtemp.innerHTML = weatherinfoobject.maxtemp[0] + "°C";
  } else {
    currenttemp.innerHTML = "Temp " + weatherinfoobject.temperature[1] + "°F";
    pfeelslike.innerHTML = weatherinfoobject.feelslike[1] + "°F";
    pmintemp.innerHTML = weatherinfoobject.mintemp[1] + "°F";
    pmaxtemp.innerHTML = weatherinfoobject.maxtemp[1] + "°F";
  }
}
