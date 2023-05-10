import { useEffect, useState } from "react";
import { getCoordinates } from "./services/getCoordinates";
import { getCurrentWeather } from "./services/getCurrentWeather";

import "./App.css";
import GeneralInfo from "./components/GeneralInfo/GeneralInfo";
import DegreesAndImg from "./components/DegreesAndImg/DegreesAndImg";
import CountryAndWeatherDescription from "./components/CountryAndWeatherDescription/CountryAndWeatherDescription";
import ButtonOnOff from "./components/ButtonOnOff/ButtonOnOff";

function App() {
  const [weather, setWeather] = useState(null);
  const [isDarkModeOn, setIsDarkModeOn] = useState(true);
  // const [changeDegrees, setChangeDegrees] = useState(getDegreesSequence());
  const handlerClickSetDarkMode = () => {
    if (isDarkModeOn === true) {
      setIsDarkModeOn(!true);
    } else {
      setIsDarkModeOn(true);
    }
  };

  // const btnColor = {
  //   isDarkModeOn ? style : ""
  // }

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
    <section
      className={"main_container" + (isDarkModeOn ? " dark" : "")}
      style={{
        background: isDarkModeOn
          ? `radial-gradient(50% 50% at 50% 50%, #2F2958 0%, #53388F 100%)`
          : "radial-gradient(50% 50% at 50% 50%, #D5F3FF 0%, #51B4E8 100%)",
      }}
    >
      <h1> Weather App </h1>
      <ButtonOnOff
        onClick={handlerClickSetDarkMode}
        optionalText={isDarkModeOn ? "Blue Mode?" : "Purple Mode?"}
        isDarkModeOn={isDarkModeOn}
      />
      {weather ? (
        <article
          className="info_container"
          style={{
            background: isDarkModeOn
              ? "linear-gradient(89.52deg, #5836B3 0.45%, #5936B4 0.46%, #362A84 99.64%)"
              : "linear-gradient(89.52deg, #E6F2FF 0.45%, #D5F3FF 97.05%)",
          }}
        >
          <DegreesAndImg
            icon={weather.weather.icon}
            temperatureObj={weather.temperature}
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
