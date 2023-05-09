import axios from "axios";
import { kelvinToCelsius } from "../utils/kelvinTocelsius";
import { kelvinToFahrenheit } from "../utils/kelvinToFahrenheit";
import { getIconById } from "../utils/getIconById";

export const getCurrentWeather = async (lat, lon) => {
  try {
    const params = {
      lat,
      lon,
      appid: "ab2807f2090209c9e001760e16f06368",
      // mode: "json",
      // units: "metric",
      lang: "es",
    };

    const res = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather",
      {
        params,
      }
    );

    const weatherInfo = {
      // res: res,
      country: res.data.sys.country,
      city: res.data.name,
      weather: {
        main: res.data.weather[0].main,
        description: res.data.weather[0].description,
        icon: getIconById(res.data.weather[0].icon),
      },
      generalInfo: {
        wind: res.data.wind.speed,
        pressure: res.data.main.pressure,
      },
      temperature: {
        kelvin: res.data.main.temp.toFixed(2),
        celsius: kelvinToCelsius(res.data.main.temp).toFixed(2),
        farentheit: kelvinToFahrenheit(res.data.main.temp).toFixed(2),
      },
    };
    // console.log(res.data);

    return weatherInfo;
  } catch (err) {
    console.log(err);
  }
};
