import React, { useState } from "react";
import axios from "axios";
import './Weather.css';

export default function Weather() {
    const [weatherData, setWeatherData] = useState({ ready: false });

    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: Math.round(response.data.main.temp),
            city: response.data.name,
            date: "Tuesday, 15:43",
            description: response.data.weather[0].description,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            min: Math.round(response.data.main.temp_min),
            max: Math.round(response.data.main.temp_max),
        });
    }

    if (weatherData.ready) {
        return (
            <div className="container">
            <div className="Weather">
                <span>
                    <img  className="TemperatureIcon" src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                        alt="Cloudy" class="weather-icon float-left" />
                </span>
                <span className="Degree">{weatherData.temperature}</span>
                <span className="Unit">ºC</span>
            </div>
            <div className="WeatherDetails">
            <div className="LocalandTime">
                <h2 className="City">{weatherData.city}</h2>
                <h2 className="Date&Time">{weatherData.date}</h2>
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
    const apiKey = `8cac06f7ab6c10287cd06a316ff84a57`;
    let city = `London`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse); 

    return `Loading...`
    }



}