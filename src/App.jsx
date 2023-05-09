import { useEffect, useState } from "react";
import { getCoordinates } from "./services/getCoordinates";
import { getCurrentWeather } from "./services/getCurrentWeather";

import "./App.css";
import GeneralInfo from "./components/GeneralInfo/GeneralInfo";
import DegreesAndImg from "./components/DegreesAndImg/DegreesAndImg";
import CountryAndWeatherDescription from "./components/CountryAndWeatherDescription/CountryAndWeatherDescription";
import { getDegreesSequence } from "./utils/getDegreesSequence";

function App() {
  const [weather, setWeather] = useState(null);
  // const [changeDegrees, setChangeDegrees] = useState(getDegreesSequence());

  useEffect(() => {
    const loadWeather = async () => {
      const coordinates = await getCoordinates();
      // console.log(coordinates);

      if (coordinates) {
        const weatherData = await getCurrentWeather(
          coordinates.latitude,
          coordinates.longitude
        );
        // console.log(weatherData);
        setWeather(weatherData);
      } else {
        // controlar el caso en que los usuarios no dan permiso a la ubicación
        throw new Error("PERMISO A UBICACIÓN DENEGADO");
      }
    };
    loadWeather();
  }, []);

  return (
    <section className="main_container">
      <h1> Weather App </h1>
      {weather ? (
        <article className="info_container">
          <DegreesAndImg
            degrees={weather.temperature.celsius}
            icon={weather.weather.icon}
            // temperatureObj={weather.temperature}
          />
          <GeneralInfo
            clouds={weather.weather.main}
            wind={weather.generalInfo.wind}
            pressure={weather.generalInfo.pressure}
          />
          <CountryAndWeatherDescription
            city={weather.city}
            country={weather.country}
            weatherDescription={weather.weather.description}
          />
        </article>
      ) : (
        <p>¡¡¡LOADING!!!</p>
      )}
    </section>
  );
}

export default App;
