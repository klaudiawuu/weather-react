import './App.css';
import Search from "./Search";
import CurrentWeather from "./CurrentWeather";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="whole-app">
        <div className="my-weather-app">
          <Search />
          <CurrentWeather />
          <Footer />
        </div>
      </div>
    </div>
  );
}
