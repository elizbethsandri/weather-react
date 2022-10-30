import React from "react";

export default function Forecast() {
    return <div className="Forecast">
    <div className="row">
    <div className="col">
      <div className="forecast-date" id="day1">mon</div>
       <img src="http://openweathermap.org/img/wn/10d@2x.png" width="100" height="100" />
        <div className="forecast-temperature">
          <span className="forecast-temperature-max">21°</span>
          <span className="forecast-temperature-min">17°</span>
        </div>
    </div>
    </div>
    </div>
}