import React from "react";
import "../styles/Modal.css"

export const Modal = ({ modalState, setModalState }) => {
  return (
    <>
      {modalState && (
        <section className="overlay">
          <div className="container-modal">
            <section>
              <p className="close" onClick={()=>{setModalState(false)}}>X</p>
              <h1 className="modal-title">Embarazo</h1>
              <hr/>
              <ul className="options">
                  <li>Quiero ser mamá</li>
                  <li>Voy a ser mamá</li>
                  <li>Parto</li>
              </ul>
              <h1 className="modal-title">Educación</h1>
              <hr/>
              <ul className="options">
                  <li>Aprende a ser mamá</li>
                  <li>Educación para niños</li>
                  <li>Educacion para adolecentes</li>
              </ul>
            </section>
          </div>
        </section>
      )}
    </>
  );
};
