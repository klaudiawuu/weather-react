import axios from "axios";

export default function Weather(props) {

    let apiKey = "a367566821d5256a1c920a360eab8e9e";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

    function showWeather(response) {
        alert(`The weather in ${response.data.name} is ${response.data.main.temp} degrees`);
    }

    axios.get(apiUrl).then(showWeather);
}