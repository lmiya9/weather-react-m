import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <p className="mt-2 d-none d-md-block date">
        Last updated: <FormattedDate date={props.data.date} />
      </p>
      <h1>{props.data.city}</h1>
      <h4 className="text-capitalize">{props.data.description}</h4>
      <div className="row mt-3">
        <div className="col-md-9">
          <div className="d-flex justify-content-md-start align-items-center justify-content-center">
            <div>
              <WeatherIcon code={props.data.icon} size={52} />
            </div>
            <div>
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-md-3 lighter-shade d-none d-md-block">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
        <div className="col-md-3 d-block d-md-none text-center">
          <p>
            Humidity: {props.data.humidity}% | Wind: {props.data.wind} km/h
          </p>
        </div>
      </div>
    </div>
  );
}
