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
    city
  ) {
    this.weatherdescription = weatherdescription;
    this.temperature = converttemperature(temperature);
    this.feelslike = converttemperature(feelslike);
    this.mintemp = converttemperature(mintemp);
    this.maxtemp = converttemperature(maxtemp);
    this.humidity = humidity;
    this.sunrise = format(fromUnixTime(sunrise), "HH:mm");
    this.sunset = format(fromUnixTime(sunset), "HH:mm");
    this.country = country;
    this.city = city;
  }
}
