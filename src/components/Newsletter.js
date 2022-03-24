import React from "react";
import news from "../assets/image/news.png";
import "../styles/Newsletter.css"

export const Newsletter = () => {

    const alert = ()=>window.alert("Gracias por subscribirte");

  return (
    <div className="newsletter">
      <img src={news} alt="news-letter" className="vector" />
      <div className="container-input">
        <input type="email" placeholder="inserte correo" className="email" />
        <button className="subscribe" onClick={alert}>Suscríbete</button>
      </div>
    </div>
  );
};
