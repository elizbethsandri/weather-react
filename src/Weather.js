import React, { useState } from "react";
import axios from "axios";
import './Weather.css';
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: Math.round(response.data.temperature.current),
            city: response.data.city,
            date: new Date(response.data.time * 1000),
            description: response.data.condition.description,
            humidity: response.data.temperature.humidity,
            wind: response.data.wind.speed,
        });
    }

    if (weatherData.ready) {
        return (
            <div className="container">
            <div className="Weather">
                <span>
                    <img  className="TemperatureIcon" src=
"http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png"
                        alt={weatherData.description} class="weather-icon float-left" />
                </span>
                <span className="Degree">{weatherData.temperature}</span>
                <span className="Unit">ºC</span>
            </div>
            <div className="WeatherDetails">
            <div className="LocalandTime">
                <h2 className="City">{weatherData.city}</h2>
                <FormattedDate className="Date&Time" date={weatherData.date} />
            </div>
            <div className="MoreWeatherDetails">
            <ul>
                <li className="WeatherDescription">{weatherData.description}</li>
                <li> min <span className="min">{weatherData.min}</span>º | max <span className="max">{weatherData.max}</span>º</li>
                <li>humidity <span className="humidity">{weatherData.humidity}</span>%</li>
                <li>wind {weatherData.wind}km/h</li>
            </ul>
            </div>
            </div>
            </div>
            );     
    } else {
    const apiKey = `406acc31e3t70db95bde98ef0co5dbb1`;
    let city = `London`;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse); 

    return `Loading...`
    }



}