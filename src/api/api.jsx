
import axios from 'axios';

const apiKey = "b36a71438c806b160070736c6e4e18a3";

export const getCurrentWeather = (city) => {
  const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  return axios.get(currentWeatherUrl);
};

export const getHourlyForecast = (city) => {
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
  return axios.get(forecastUrl);
};
