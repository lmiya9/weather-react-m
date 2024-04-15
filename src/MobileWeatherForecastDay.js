import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function MobileWeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="mt-3">
      <div className="row d-flex">
        <hr className="line" />
        <div className="col">
          <div>
            <div className="row justify-content-center align-items-center">
              <div className="col">
                <div className="WeatherForecast-day">{day()}</div>
              </div>
              <div className="col">
                <WeatherIcon code={props.data.weather[0].icon} size={36} />
              </div>
              <div className="col">
                <div className="WeatherForecast-temperatures">
                  <span className="WeatherForecast-temperature-max">
                    {maxTemperature()}
                  </span>
                  <span className="WeatherForecast-temperature-min">
                    {minTemperature()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
