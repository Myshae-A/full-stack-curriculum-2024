import React from 'react'
import "../styles/WeatherCard.css";
import logo from "../icons/01d.svg"

export default function WeatherCard(props) {

    
    const imgSrc = `./icons/${props.data.imgSrc}.svg`;
    const minTemp = `${props.data.minTemp}`;
    const maxTemp = `${props.data.maxTemp}`;

    return (
        <>
            <div className="weatherCard">
                <h5 className="cardHeader">{props.data.currentDay}</h5>
                <img className="cardImage" src={logo} alt="test"/>
                <h5 className="cardFooter">{minTemp} to {maxTemp}</h5>
            </div>
        </>
    )
}
