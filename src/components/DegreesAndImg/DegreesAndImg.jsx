import "./DegreesAndImg.css";
import React, { useState } from "react";

const DegreesAndImg = ({ icon, temperatureObj }) => {
  const [newDegrees, setNewDegrees] = useState(`${temperatureObj.celsius} °C`);
  // const [handlerClick, setHandlerClick] = useState(second)
  const handleClick = () => {
    if (newDegrees === `${temperatureObj.farentheit} °F`) {
      setNewDegrees(`${temperatureObj.celsius} °C`);
    } else {
      setNewDegrees(`${temperatureObj.farentheit} °F`);
    }
  };

  return (
    <article onClick={handleClick} className="container_degrees__img">
      <p>{newDegrees} </p>
      <img src={icon} alt="" />
    </article>
  );
};

export default DegreesAndImg;
