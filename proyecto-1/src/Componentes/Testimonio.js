import React from 'react';
import "../Styles/Testimonio.css"

function Testimonio(props){
    return (
        <div className='contenedor-testimonio'>
            <img className='imagen-testimonio' src={require(`./imgs/${props.imagen}`)} alt='foto-1'/>
            <div className='contenedor-text-testimonio'>
                <p className='nombre-testimonio'>
                    <strong>{props.nombre}</strong> en {props.pais}
                </p>
                <p className='cargo-testimonio'>
                    {props.cargo} en <strong>{props.empresa}</strong>
                </p>
                <p className='text-testimonio'>"{props.testimonio}"</p>
            </div>
        </div>
    );
}

export default Testimonio;