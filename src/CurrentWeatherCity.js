export default function CurrentWeatherCity() {
  let localWeather = {
    iconUrl: "https://i.ibb.co/mCRPjrR/sunbehindcloud.png",
  };
  return (
    <div className="currentWeatherCity">
      <div className="clearfix">
        <img src={localWeather.iconUrl} alt="Clear" className="float-left" />
        <span className="temp-value">25</span>
        <span className="units">
          <a href="/">°C</a> | <a href="/">°F</a>
        </span>
      </div>
    </div>
  );
}
