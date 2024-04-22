import  { useState } from 'react';
import { getCurrentWeather,getHourlyForecast } from '../../api/api';
import Search from '../search/search';

function WeatherApp() {
  const [weatherData, setWeatherData] = useState(null);
  const [hourlyForecastData, setHourlyForecastData] = useState([]);

  const getWeather = (city) => {
    if (!city) {
      alert("Please enter a city");
      return;
    }

    getCurrentWeather(city)
      .then(response => {
        setWeatherData(response.data);
      })
      .catch(error => {
        console.error("Error fetching current weather data:", error);
        alert("Error fetching current weather data. Please try again.");
      });

    getHourlyForecast(city)
      .then(response => {
        setHourlyForecastData(response.data.list.slice(0, 8));
      })
      .catch(error => {
        console.error("Error fetching hourly forecast data:", error);
        alert("Error fetching hourly forecast data. Please try again.");
      });
  };

  const displayHourlyForecast = () => {
    return hourlyForecastData.map((item) => {
      const dateTime = new Date(item.dt * 1000);
      const hour = dateTime.getHours();
      const temperature = Math.round(item.main.temp - 273.15);
      const iconCode = item.weather[0].icon;
      const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

      return (
        <div key={item.dt} className="hourly-item" style={{ color: "white" }}>
          <span>{hour}:00</span>
          <img src={iconUrl} alt="Hourly Weather Icon" />
          <span>{temperature}°C</span>
        </div>
      );
    });
  };

  const displayWeather = () => {
    if (!weatherData) return null;

    const cityName = weatherData.name;
    const temperature = Math.round(weatherData.main.temp - 273.15);
    const description = weatherData.weather[0].description;
    const iconCode = weatherData.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

    return (
      <div
        id="weather-info"
        style={{
          backgroundImage: `url(/public/assets/weather.svg)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          color: "white",
          width: "359px",
          height: "328px",
          padding: "12px",
          borderRadius: "12px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <p>{cityName}</p>
          <p>{description}</p>
          <div id="temp-div">
            <p>{temperature}°C</p>
          </div>
        </div>
        <img id="weather-icon" src={iconUrl} alt={description} />
      </div>
    );
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <div
        className="max-w-md p-8 rounded-lg shadow-lg backdrop-blur-md border border-opacity-10 relative"
        style={{
          width: "500px",
          height: "812px",
          backgroundImage: `url(/public/assets/Background.png)`,
        }}
      >
        <img
          src="/public/assets/Logo.svg"
          alt="Logo"
          className="mx-auto mb-8"
        />
        <Search getWeather={getWeather} />
        {displayWeather()}
        <div
          id="hourly-forecast"
          className="mt-8 flex justify-center overflow-x-auto whitespace-nowrap"
        >
          {displayHourlyForecast()}
        </div>
      </div>
    </div>
  );
}

export default WeatherApp;