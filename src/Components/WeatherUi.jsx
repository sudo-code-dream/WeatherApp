import { IoIosSpeedometer } from "react-icons/io";
import { WiHumidity } from "react-icons/wi";
import { FaSearchLocation } from "react-icons/fa";
import { FaCloudRain } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

import toast, { Toaster } from "react-hot-toast";

const WeatherUi = () => {
  const input = useRef();
  const [WeatherData, setWeatherData] = useState(false);

  const search = async (city) => {
    if (city === "") {
      toast.error("Enter A city name");
      return;
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_APP_ID
      }`;
      const res = await fetch(url);
      const data = await res.json();
      setWeatherData({
        name: data.name,
        temp: Math.floor(data.main.temp),
        weather: data.weather.description,
        wind: Math.floor(data.wind.speed),
        humidity: data.main.humidity,
      });

    } catch (error) {
      toast.error("Enter A Valid City Name")
    }
  };

  <Toaster position="bottom-center" reverseOrder={false} />;

  useEffect(() => {
    search("Cebu");
  }, []);

  return (
    <div className="weather-app">
      <Toaster />
      <div className="header">
        <h1>Weather App</h1>
      </div>
      <div className="search-box">
        <input type="text" placeholder="Enter city name" ref={input} />
        <button onClick={() => search(input.current.value)}>Search</button>
      </div>
      <div className="weather-info">
        <h2 className="city">{WeatherData.name}</h2>
        <div className="icon"></div>
        <div className="temperature">{WeatherData.temp}°C</div>
        <div className="description">{WeatherData.weather}</div>
        <div className="details">
          <div className="humidity">Humidity: {WeatherData.humidity}%</div>
          <div className="wind">Wind: {WeatherData.wind} km/h</div>
        </div>
      </div>
    </div>
  );
};

export default WeatherUi;
