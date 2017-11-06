import key from '../key';

export const fetchWeather = (location) => {
  return fetch(`http://api.wunderground.com/api/${key}/conditions/`+
    `forecast10day/hourly/q/${location}.json`)
    .then(response => response.json())
    .then(parsedData => parsedData)
    .then(finalData => finalData.forecast.simpleforecast.forecastday
      .splice(0, 7))
    .catch(error => console.log(error));
};
