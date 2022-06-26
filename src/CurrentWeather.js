import CurrentWeatherCity from "./CurrentWeatherCity";
import CurrentWeatherCond from "./CurrentWeatherCond";

export default function CurrentWeather() {
  let weatherData = {
    city: "Lisbon",
    day: "Friday",
    hour: "10:00",
    condition: "Partly Cloudy",
  };
  return (
    <div className="currentWeather">
      <h1>{weatherData.city}</h1>
      <div className="day">
        Last updated: {weatherData.day} {weatherData.hour}
      </div>
      <div className="weather-condition">{weatherData.condition}</div>
      <div className="row">
        <div className="col-6">
          <CurrentWeatherCity />
        </div>
        <div className="col-6">
          <CurrentWeatherCond />
        </div>
      </div>
    </div>
  );
}
