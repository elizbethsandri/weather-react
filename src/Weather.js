import React from "react";
import axios from "axios";

export default function Weather(props) {

    function handleResponse(response) {
        alert(`The weather in ${response.data.name} is ${Math.round(response.data.main.temp)} ºC`);
    }
    
    let apiKey = `6bb85c847753f42906fed65eb4885241`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);    
    return <h2>
        53
    </h2>
}