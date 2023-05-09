const factorConversion = 273; // 0 °Kelvin - 273.15 °C

export const kelvinToCelsius = (kelvinDegrades) =>
  kelvinDegrades - factorConversion; //.toFixed(2);
