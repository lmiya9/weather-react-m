import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import MobileWeatherForecast from "./MobileWeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const [loading, setLoading] = useState(false);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function handleLocation() {
    setLoading(true); // Set loading state to true when starting geolocation

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const apiKey = "6782253072f7d90462731a624097fc54";
          const units = "metric";
          const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

          axios.get(apiUrl).then((response) => {
            handleResponse(response);
            setLoading(false); // Set loading state to false after successful response
          });
        },
        (error) => {
          console.error("Error getting geolocation:", error);
          setLoading(false); // Set loading state to false if there's an error
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      setLoading(false); // Set loading state to false if geolocation is not supported
    }
  }

  function search() {
    setLoading(true); // Set loading state to true when starting search

    const apiKey = "6782253072f7d90462731a624097fc54";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then((response) => {
      handleResponse(response);
      setLoading(false); // Set loading state to false after successful response
    });
  }

  if (loading) {
    
    return <img src="/loading.svg" alt="Loading..." />;
  }

  if (weatherData.ready) {
    // Render weather information when data is ready
    return (
      <div className="Weather">
        <div className="card card-1">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-8 col-6">
                <input
                  type="search"
                  placeholder="Enter a city.."
                  className="form-control highlight"
                  autoFocus="on"
                  onChange={handleCityChange}
                />
              </div>
              <div className="col-md-4 col-6 d-flex justify-content-start">
                <div className="search-button mr-2">
                  <input
                    type="submit"
                    value="Search"
                    className="btn btn-search"
                  />
                </div>
                <div className="location-button" id = "location-button">
                  <input
                    type="button"
                    onClick={handleLocation}
                    value="Location"
                    className="btn"
                  />
                </div>
              </div>
            </div>
          </form>
          <WeatherInfo data={weatherData} />
          <div className="d-none d-md-block">
            <WeatherForecast coordinates={weatherData.coordinates} />
          </div>
          <div className="d-block d-md-none">
            <MobileWeatherForecast coordinates={weatherData.coordinates} />
          </div>
        </div>
      </div>
    );
  } else {
    // If weather data is not ready, initiate search
    search();
    return null; // Return null while waiting for data
  }
}
