import './Weather.css';
import React, { useState } from 'react';
import FormatedDate from './FormatedDate';
import axios from 'axios';

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      city: response.data.name
    });

    setReady(true);
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <input
            type="search"
            placeholder="Enter a city.."
            className="form-control"
            autoFocus="on"
          />
          <input type="submit" value="Search" class="btn btn-primary w-50" />
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>
            <FormatedDate date={weatherData.date} />
          </li>
          <li classNama="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img src="{weather.Data.icon}" alt="weather.description" className="float-left" />
              <span className="temperature">{Math.round(weatherData.temperature)}</span>
              <span className="unit">Cº</span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 15%</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = '26f707e504a3173f7ff66b88f084e8a0';
    const city = 'Funchal';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return 'Loading...';
  }
}
