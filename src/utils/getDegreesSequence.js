import { getCurrentWeather } from "../services/getCurrentWeather";

const data = async () => {
  await getCurrentWeather();
  return data;
};

export const getDegreesSequence = (temperatureArray) => {
  const newArray = temperatureArray.map();
  console.log(newArray);
};
