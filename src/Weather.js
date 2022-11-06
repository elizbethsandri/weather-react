import React, { useState } from "react";
import axios from "axios";
import "./SearchEngine.css";
import './Weather.css';
import WeatherInfo from "./WeatherInfo";
import Forecast from './Forecast';

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);
    function handleResponse(response) {
        setWeatherData({
            ready: true,
            coordinates: response.data.coordinates,
            temperature: Math.round(response.data.temperature.current),
            city: response.data.city,
            date: new Date(response.data.time * 1000),
            description: response.data.condition.description,
            humidity: response.data.temperature.humidity,
            wind: response.data.wind.speed,
            iconUrl: response.data.condition.icon_url,
        });
    }

    function search() {
        const apiKey = `406acc31e3t70db95bde98ef0co5dbb1`;
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse); 
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }

    if (weatherData.ready) {
        return (
        <div className="SearchEngine">
        <form onSubmit={handleSubmit}>
            <div className="container">
                <span class="input-group mb-3">
                <input
                type="search" placeholder="Search for a city"
                className="form-control" onChange={handleCityChange} />
                <button type="submit" className="btn btn-outline-secondary">Search</button>
                </span>
                </div>
        </form>
        <WeatherInfo data={weatherData} />
        <Forecast coordinates={weatherData.coordinates} />
        </div>
        );
        

    } else {
        search();
        return `Loading...`
    }
}