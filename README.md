# Weather App for the Odin Project

The purpose of this exercise was to learn more about promises. On my implementation I used the Open Weather Map API and the Giphy API.

## Features

### Information displayed

Besides the current temperature at the location, I choose to also display the following information:

- "feels like" temperature;
- local time;
- humidity;
- high/low temperature;
- sunrise and sunset times.

The user can also switch from Celsius to Fahrenheit.

### Styling

On the top right corner the icon displayed will change according to the weather. The color scheme will also change, according to the time of the day: dark blue between sunset and sunrise, and yellow between sunrise and sunset.

While fetching the weather information, a spinner will rotate for the duration. If a city can't be found (response status 404), a "Location not found" will be displayed.

### Giphy

The Giphy API might give unexpected results. The keyword used to look for a gif is the weather main description, and the word used on the description isn't always used exclusively on weather.
