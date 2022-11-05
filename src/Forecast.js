import React, { useState } from "react";
import './Forecast.css'
import axios from "axios";
import ForecastDay from "./ForecastDay"

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
    
  }

  if (loaded) {
    console.log(forecast);
    return (
    <div className="Forecast">
    <div className="row">
    <div className="col">
      <ForecastDay data={forecast} />      
    </div>
    </div>
    </div>
    );
} else {
  let lon = props.coordinates.longitude;
  let lat = props.coordinates.latitude;
  let apiKey = `406acc31e3t70db95bde98ef0co5dbb1`;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return null;
}
}