import { getDegreesSequence } from "../../utils/getDegreesSequence";
import "./DegreesAndImg.css";
import React from "react";

const DegreesAndImg = ({ degrees, icon, temperatureObj }) => {
  return (
    <article
      // onClick={getDegreesSequence(temperatureObj)}
      className="container_degrees__img"
    >
      <p>{degrees} °C</p>
      <img src={icon} alt="" />
    </article>
  );
};

export default DegreesAndImg;
