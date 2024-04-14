import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <p className="mt-2">
        Last updated: <FormattedDate date={props.data.date} />
      </p>
      <h1>{props.data.city}</h1>
      <h4 className="text-capitalize">{props.data.description}</h4>
      <div className="row mt-3">
        <div className="col-9">
          <div className="d-flex">
            <div>
              <WeatherIcon code={props.data.icon} size={52} />
            </div>
            <div>
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        
        </div>
        <div className="col-3 lighter-shade">
          
            <ul>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {props.data.wind} km/h</li>
            </ul>
          
        </div>

    </div>
  );
}
