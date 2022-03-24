import React from "react";
import "../styles/Modal.css";

export const Search = ({ modalState, setModalState }) => {
  return (
    <>
      {modalState && (
        <section className="overlay">
          <div className="container-modal-search">
            <p
              className="close"
              onClick={() => {
                setModalState(false);
              }}
            >
              X
            </p>
            <section>
              <form className="form-shearch">
                <input
                  type="search"
                  placeholder="Buscar"
                  className="input-search"
                />
                <label for="health">Selecciona algún tema:</label>
                <select
                  id="healt"
                  name="healthlist"
                  form="sectionform"
                  className="select"
                >
                  <option value="primeros-auxilios">Primeros auxilios</option>
                  <option value="enfermedades">Enfermedades</option>
                  <option value="Medicamentos">Medicamentos</option>
                </select>
                <select
                  id="mom"
                  name="maternidadlist"
                  form="sectionform"
                  className="select"
                >
                  <option value="embarazo">Embarazo</option>
                  <option value="crianza">Crianza respetuosa</option>
                  <option value="adolecencia">Adolecencia</option>
                </select>
                <select
                  id="welfare"
                  name="welfarelist"
                  form="sectionform"
                  className="select"
                >
                  <option value="mente-sana">Mente sana</option>
                  <option value="ejercicio">Ejercicio físico</option>
                  <option value="hábitos">hábitos</option>
                </select>
              </form>
            </section>
          </div>
        </section>
      )}
    </>
  );
};
