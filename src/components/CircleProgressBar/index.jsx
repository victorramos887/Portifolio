import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import React from "react";

const CircleProgressBar = ({ imgSrc, altText, porcentagem }) => {
  const colorFill = "#40918D"
  return (
    <>
      <CircularProgressbarWithChildren
        value={porcentagem}
        styles={buildStyles({
          pathColor: colorFill,
        })}
      >
        <img
          style={{ width: "44%", marginTop: -5 }}
          src={imgSrc}
          alt={altText}
        />
        <div style={{ fontSize: "200%", marginTop: -5, color: colorFill }}>
          <strong>{porcentagem}</strong> %
        </div>
      </CircularProgressbarWithChildren>
    </>
  );
};

export default CircleProgressBar;
