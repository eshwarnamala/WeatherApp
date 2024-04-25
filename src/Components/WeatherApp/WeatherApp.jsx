import React from "react";
import "./WeatherApp.css";

import search_icon from "../Assets/search.png";
import cloudicon from "../Assets/cloud.png";
import windicon from "../Assets/wind.png";
import humidityicon from "../Assets/humidity.png";

export const WeatherApp = () => {
    let api_key="c4a80a4a08502996dcbb19d8ca359e22"
    const search = async ()=>{
        const element = document.getElementsByClassName("cityInput")
        if(element[0].value === "") return 0
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`

        let response = await fetch(url)
        let data = await response.json()
        const humidity=document.getElementsByClassName("humidity-percent")
        const wind=document.getElementsByClassName("wind-rate")
        const temperature=document.getElementsByClassName("weather-temp")
        const location = document.getElementsByClassName('weather-location')
        

        humidity[0].innerHTML = data.main.humidity + "%";
        wind[0].innerHTML = data.wind.speed+ "km/h";
        temperature[0].innerHTML = data.main.temp + "°c";
        location[0].innerHTML = data.name;


    }
  return (
    <div className="container">
        <div className="top-bar">
            <input type="text" className="cityInput" placeholder="Search"/>
            <div className="search-icon" onClick={()=>{search()}}>
                <img src={search_icon} alt="" />
            </div>
        </div>
        <div className="weather-image">
            <img src={cloudicon} alt="" />
        </div>
        <div className="weather-temp"></div>
        <div className="weather-location"></div>
        <div className="data-container">
            <div className="element">
                <img src={humidityicon} alt="" className="icon" />
                <div className="data">
                    <div className="humidity-percent"></div>
                    <div className="text">Humidity</div>
                </div>
            </div>
            <div className="element">
                <img src={windicon} alt="" className="icon" />
                <div className="data">
                    <div className="wind-rate"></div>
                    <div className="text">Wind Speed</div>
                </div>
            </div>
        </div>
    </div>
    )
};

export default WeatherApp;
