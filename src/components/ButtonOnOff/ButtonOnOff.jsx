import React from "react";
import "./ButtonOnOff.css";

const ButtonOnOff = ({ optionalText, onClick, isDarkModeOn }) => {
  return (
    <div className={"btn_container" /*+ (isDarkModeOn ? "" : "dark")*/}>
      <button
        onClick={onClick}
        className={"btn" + (isDarkModeOn ? "" : " dark")}
      >
        {optionalText}
      </button>
    </div>
  );
};

export default ButtonOnOff;
