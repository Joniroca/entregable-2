import "./countryAndWeatherDescription.css";

import React from "react";

const CountryAndWeatherDescription = ({
  city,
  country,
  weatherDescription,
}) => {
  return (
    <section className="main_container__country">
      <h2 className="country">
        {city}, {country}
      </h2>
      <p className="weather_description">
        Clima principalmente {weatherDescription}{" "}
      </p>
    </section>
  );
};

export default CountryAndWeatherDescription;
