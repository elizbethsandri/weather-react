import React from "react";

export default function ForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
      return `${temperature}`
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
      return `${temperature}`
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = [`Sun`, `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`];
    return days[day];
  }
  
  return (
  <div>
  <div className="ForecastDate">{day()}</div>
  <img className="TemperatureIcon" src={props.data.condition.icon_url} alt={props.data.condition.description} class="weather-icon float-left" />
   <div className="ForecastTemperature">
     <span className="ForecastMax">{maxTemperature()}°</span>{" "}
     <span className="forecastMin">{minTemperature()}°</span>
   </div>
  </div>
  );
  }

