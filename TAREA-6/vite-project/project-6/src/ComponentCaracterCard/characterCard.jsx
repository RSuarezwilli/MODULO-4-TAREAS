import React from 'react'
import './characterCard.css'


const CharacterCard = ({nombre, img, estado, fechaCreacion}) => {
  
    
    return (
    <div>
        <div className='card'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <span>
                   Estado: {estado}
                </span>
            </div>
            <div>
                <h1>{nombre}</h1>
            </div>
            <div>
                <h2>Fecha de creacion</h2>
                <span>{fechaCreacion}</span>
            </div>

        </div>
    </div>
  )
}

export default CharacterCard












 