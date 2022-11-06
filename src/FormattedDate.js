import React from "react";
import "./Weather.css"

export default function FormattedDate(props) {
    let days = [`Sunday`, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`];
    let day = days[props.date.getDay()];
    let hours = props.date.getHours();
    if (hours <10) {
        hours = `0${hours}`;
    }
    let minutes = props.date.getMinutes();
    if (minutes <10) {
        minutes = `0${minutes}`;
    }
    
    return (
        <h2>
            {day}, {hours}:{minutes}
        </h2>
    );
}