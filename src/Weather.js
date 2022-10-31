import React from "react";
import './Weather.css'

export default function Weather() {
    return (
    <div className="container">
    <div className="Weather">
        <span>
            <img  className="TemperatureIcon" src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="Cloudy" class="weather-icon float-left" />
        </span>
        <span className="Degree">19</span>
        <span className="Unit">ºC</span>
    </div>
    <div className="WeatherDetails">
    <div className="LocalandTime">
        <h2 className="City">São Paulo</h2>
        <h2 className="Date&Time">Sunday, 14:00</h2>
    </div>
    <div className="MoreWeatherDetails">
    <ul>
        <li className="WeatherDescription">Clear</li>
        <li> min <span className="min">12</span>º | max <span className="max">23</span>º</li>
        <li>humidity <span className="humidity">50</span>%</li>
        <li>wind <span className="wind"> 7</span>km/h</li>
    </ul>
    </div>
    </div>
    </div>
    );
}