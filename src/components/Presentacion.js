import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderNav } from './layout/HeaderNav';

export const Presentacion = () => {
    return (
        <section id="inicio">
            <div className="contenido">

                {/* Barra de nevegación */}
                <HeaderNav></HeaderNav>
                
                <div className="presentacion">
                    <p className="bienvenida"> ¡Saludos! </p>
                    <h2> Desarrollador FrontEnd y BackEnd</h2>
                    <h3>  Oscar Bautista Gaytan  </h3>
                    <p className="descripcion"> Programador FrontEnd y BackEnd, desarrollo sitios web
                    dinamicos, con diseños atractivos, para la administración y el manejo de datos de tu negocio </p>
                    
                    <Link to="/portafolio" > Visitar portafolio </Link>
                </div>
            </div>
        </section>
    )
}