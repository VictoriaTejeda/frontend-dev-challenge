import React from "react";
import "../styles/Hero.css";

export const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="layer">
          <article className="info">
            <h1>
              Su viaje de <span>salud emocional </span> empieza aqui{" "}
            </h1>
            <h4>Conoce nuestro profesionales con licencia </h4>
            <p>
              {" "}
              Todos se someten a un proceso seguro de verificación y
              acreditación, además de adherirse a estrictos códigos de ética y
              confidencialidad.
            </p>
          </article>
        </div>
      </section>
    </>
  );
};
