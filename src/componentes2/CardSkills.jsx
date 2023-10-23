import React from "react";
import CircleProgressBar from "../components/CircleProgressBar";

const CardSkills = ({ imagem, title, porcentagem }) => {
  return (
    <>
      <CircleProgressBar
        imgSrc={imagem}
        altText="Imagem não encontrada"
        porcentagem={porcentagem}
      />
      {/* <img src={meter1} alt="Image" /> */}
      <h5>{title}</h5>
    </>
  );
};

export default CardSkills;
