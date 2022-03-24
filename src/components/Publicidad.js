import React from 'react'
import publicidad from '../assets/image/publicidad.png'
import "../styles/Publicity.css"


export const Publicidad = () => {
  return (
    <>
        <aside className='publicity'>
        <p>PUBLICIDAD</p>
        <img src={publicidad} alt="promocion" className="img-publicity" />
        </aside>
    </>
  )
}
