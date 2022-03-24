import React from 'react'
import { Card } from './Card'
import photo06 from '../assets/image/photo06.jpg'
import photo03 from '../assets/image/photo03.png'
import photo04 from '../assets/image/photo04.png'
import photo05 from '../assets/image/photo05.png'
import '../styles/card.css'

export const Cards = () => {
  return (
    <>
      <section className='container'>
          <div className='row'>
            <Card
                image= {<img src={photo06} alt="nutrición" className="img-card" />}
                section= "NUTRICIÓN"
                title="Colapso mental: cuando siento el peso del mundo sobre mí"
                content="A veces nos sentimos como Atlas, aquel titán al que Zeus castigó y le obligó a llevar el peso de…"
            />
             <Card
                image= {<img src={photo04} alt="nutrición" className="img-card" />}
                section= "MATERNIDAD"
                title="Neque porro quisquam est qui dolorem ipsum quia dolor "
                content="Nunc etiam ut habitant hac ultrices vitae penatibus mattis laoreet, nisl taciti eget dui bibendum varius duis..."
            />
             <Card
                image= {<img src={photo05} alt="nutrición" className="img-card" />}
                section= "MENTE SANA"
                title="Neque porro quisquam est qui dolorem ipsum quia dolor "
                content="A Nunc etiam ut habitant hac ultrices vitae penatibus mattis laoreet, nisl taciti eget dui bibendum varius duis..."
            />
             <Card
                image= {<img src={photo03} alt="nutrición" className="img-card" />}
                section= "CRIANZA RESPETUOSA"
                title="Neque porro quisquam est qui dolorem ipsum quia dolor "
                content="A Nunc etiam ut habitant hac ultrices vitae penatibus mattis laoreet, nisl taciti eget dui bibendum varius duis..."
            />
          </div>

      </section>
    </>
  )
}
