import React from "react";
import './Forecast.css'

export default function Forecast() {
    return <div className="Forecast">
    <div className="row">
    <div className="col">
      <div className="ForecastDate">mon</div>
       <img src="http://openweathermap.org/img/wn/10d@2x.png" width="100" height="100" />
        <div className="ForecastTemperature">
          <span className="ForecastMax">21°</span>
          <span className="forecastMin">17°</span>
        </div>
    </div>
    </div>
    </div>
}