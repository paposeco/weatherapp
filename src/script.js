import { format, fromUnixTime } from "date-fns";

const converttemperature = function (temperature) {
  const temperatureInC = Math.floor((Number(temperature) - 273.15) * 100) / 100;
  const temperatureInF =
    Math.floor(((Number(temperature) - 273.15) * (9 / 5) + 32) * 100) / 100;
  return [temperatureInC, temperatureInF];
};

export default class weatherStats {
  constructor(
    weatherdescription,
    temperature,
    feelslike,
    minimumtemp,
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
    this.minimumtemp = converttemperature(minimumtemp);
    this.maxtemp = converttemperature(maxtemp);
    this.humidity = humidity;
    this.sunrise = format(fromUnixTime(sunrise), "HH:mm");
    this.sunset = format(fromUnixTime(sunset), "HH:mm");
    this.country = country;
    this.city = city;
  }
}
