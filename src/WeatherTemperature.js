import React, { useState } from "react";
import './Weather.css';

export default function WeatherTemperature(props) {
        return (
        <span>
            <span className="Degree">{props.celsius}</span>
            <span className="Units">
                <span className="Celsius">
                    ºC
                </span>
            </span>
        </span>
    );  
    

}