import key from '../key';

export const fetchWeather = (location) => {
  fetch(`http://api.wunderground.com/api/${key}/conditions/forecast10day/hourly/q/${location}.json`)
    .then(response => response.json())
    .then(parsed => parsed)
    .catch(error => console.log(error));
};
