import React from "react";
import publicidad from "../assets/image/publicidad.png";
import publicidad2 from "../assets/image/publicidad2.png";
import "../styles/Publicity.css";

export const Publicidad = () => {
  return (
    <>
      <aside className="publicity">
        <p>PUBLICIDAD</p>
        <img src={publicidad} alt="promocion-camp" className="img-publicity" />
        <img src={publicidad2} alt="promocion-macDonald" className="img-publicity2" />
      </aside>
    </>
  );
};
