import weatherStats from "./script.js";

const locationsearch = document.getElementById("locationinput");
const submitsearch = document.getElementById("submitsearch");
const form = document.querySelector("form");

submitsearch.addEventListener("click", function (e) {
  e.preventDefault();

  if (form.checkValidity()) {
    console.log(typeof weatherStats);
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
  console.log(weathertoday);
}
