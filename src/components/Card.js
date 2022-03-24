import React from "react";

export const Card = (props) => {
  let { image, section, title, content}=props;
  return (
    <>
      <section className="card">
        <div className="container-img">
        {image}
        </div>
        <div className="info-card"> 
            <p className="section">{section}</p>
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
      </section>
    </>
  );
};
