import React, { useState, useEffect } from "react";
import './Forecast.css'
import axios from "axios";
import ForecastDay from "./ForecastDay"

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
    <div className="Forecast">
    <div className="row">
      {forecast.map(function(dailyForecast, index) {
        if (index < 5) {
        return (
        <div className="col" key={index}>
        <ForecastDay data={dailyForecast} />
        </div>  
        );       
      } else {
        return null;
      }
      })}
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