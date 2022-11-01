import React from "react";
import FormattedDate from "./FormattedDate";
import './Weather.css';

export default function WeatherInfo(props) {
    return(
        <div className="container">
        <div className="Weather">
            <span>
                <img  className="TemperatureIcon" src={props.data.iconUrl}
                    alt={props.description} class="weather-icon float-left" />
            </span>
            <span className="Degree">{props.data.temperature}</span>
            <span className="Unit">ºC</span>
        </div>
        <div className="WeatherDetails">
        <div className="LocalandTime">
            <h2 className="City">{props.data.city}</h2>
            <FormattedDate className="Date&Time" date={props.data.date} />
        </div>
        <div className="MoreWeatherDetails">
        <ul>
            <li className="WeatherDescription">{props.data.description}</li>
            <li>min <span className="min">1</span>º | max <span className="max">1</span>º</li>
            <li>humidity <span className="humidity">{props.data.humidity}</span>%</li>
            <li>wind {props.data.wind}km/h</li>
        </ul>
        </div>
        </div>
        </div>
    );
}