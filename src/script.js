import { format, fromUnixTime } from "date-fns";

const converttemperature = function (temperature) {
  const temperatureInC = Math.floor((Number(temperature) - 273.15) * 10) / 10;
  const temperatureInF =
    Math.floor(((Number(temperature) - 273.15) * (9 / 5) + 32) * 10) / 10;
  return [temperatureInC, temperatureInF];
};

export default class weatherStats {
  constructor(
    weatherdescription,
    temperature,
    feelslike,
    mintemp,
    maxtemp,
    humidity,
    sunrise,
    sunset,
    country,
    city,
    timeoffset
  ) {
    this.weatherdescription = weatherdescription;
    this.temperature = converttemperature(temperature);
    this.feelslike = converttemperature(feelslike);
    this.mintemp = converttemperature(mintemp);
    this.maxtemp = converttemperature(maxtemp);
    this.humidity = humidity;
    this.sunrise = sunLocalTime(fromUnixTime(sunrise), timeoffset);
    this.sunset = sunLocalTime(fromUnixTime(sunset), timeoffset);
    this.country = country;
    this.city = city;
    this.timeoffset = currentTime(timeoffset);
  }
}

const currentTime = function (timeoffset) {
  const today = new Date();
  const hoursUTC = today.getUTCHours();
  let minutes = today.getMinutes();
  if (Number(minutes) < 10) {
    minutes = "0" + minutes;
  }
  let timeoffsetHours = Number(timeoffset) / 60 / 60;
  let hours = Number(hoursUTC) + timeoffsetHours;
  if (hours < 10) {
    hours = "0" + hours;
  }
  return `${hours}:${minutes}`;
};

const sunLocalTime = function (date, timeoffset) {
  const hoursUTC = date.getUTCHours();
  let minutes = date.getMinutes();
  if (Number(minutes) < 10) {
    minutes = "0" + minutes;
  }
  let timeoffsetHours = Number(timeoffset) / 60 / 60;
  let hours = Number(hoursUTC) + timeoffsetHours;
  console.log(hours);
  if (hours > 0 && hours < 10) {
    hours = "0" + hours;
  } else if (hours < 0) {
    hours = 24 + hours;
  } else if (hours > 24) {
    hours = hours - 24;
  }
  return `${hours}:${minutes}`;
};
