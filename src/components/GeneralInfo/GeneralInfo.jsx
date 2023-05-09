import "./GeneralInfo.css";
import React from "react";

const GeneralInfo = ({ wind, pressure, clouds }) => {
  return (
    <div className="ul_father">
      <ul className="ul_container">
        <li>
          <b>Vel. Viento: </b> <p> {wind} meter/sec</p>
        </li>
        <li>
          <b>Presión: </b> <p> {pressure} hPa</p>
        </li>
        <li>
          <b>General:</b> <p>{clouds}</p>
        </li>
      </ul>
    </div>
  );
};

export default GeneralInfo;
