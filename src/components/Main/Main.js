import './Main.css'
import React, { useState } from 'react';

function Main(props){
    
    let [numeroUsuario, setNumeroUsuario] = React.useState(0);
    let [numeroMaquina, setNumeroMaquina] = React.useState(generarAleatorio);

    function comprobarNumeroUsuario(evento){
        setNumeroUsuario(evento.target.value);
    }
    
    function verificarNumero(){
        if (numeroUsuario == numeroMaquina)
            alert("Adivinaste el número");
        else
            alert(`Fallaste, el número es: ${numeroMaquina}`);

        setNumeroMaquina(generarAleatorio);
    }

    function generarAleatorio(){
        return Math.floor(Math.random() * props.max) + 1;
    }

    return(
        <div className='contenedor'>
            <div className='contenedor-input'>
                <label for="ingresoUsuario" className='label-usuario'>Ingresa un número:</label>
                <input type='number' min={0} max={10} id='ingresoUsuario' className='input-usuario' onChange={comprobarNumeroUsuario}></input>
            </div>
            <button className='boton' onClick={verificarNumero}>Intentar</button>
            
        </div>
    );
}

export default Main;