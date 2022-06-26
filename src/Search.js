import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function Search() {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState({});
  let [details, setDetails] = useState(false);

  function showWeather(response) {
    setDetails(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function submitCity(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a367566821d5256a1c920a360eab8e9e&units=metric`;
    axios.get(url).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={submitCity}>
      <input
        type="search"
        placeholder="City name"
        autocomplete="off"
        onChange={updateCity}
      />
      <input type="submit" value="Search" />
    </form>
  );

  if (details) {
    return (
      <div>
        {form}
        <ul className="weather">
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>Wind: {Math.round(weather.wind)}°C</li>
          <li>Humidity: {Math.round(weather.humidity)}°C</li>
        </ul>
        <img src={weather.icon} alt="" />
      </div>
    );
  } else {
    return form;
  }
}
