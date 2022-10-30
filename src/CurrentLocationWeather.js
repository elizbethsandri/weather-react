import React from "react";
import './CurrentLocationWeather.css'

export default function CurrentLocationWeather() {
    return <><div className="CurrentLocationWeather">
        <span>
            <img  className="TemperatureIcon" src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="Cloudy icon" class="weather-icon float-left" />
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
        <p> <span className="WeatherDescription">Clear</span><br />
        min <span className="min">12</span>º | max <span className="max">23</span>º<br />
        humidity <span className="humidity">50</span>%<br />
        wind <span className="wind"> 7</span>km/h</p>
    </div>
    </div></>
}