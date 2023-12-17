import React from 'react';
import ImagenPerfil from '../static/img/perfil2.png'
import { HeaderNav } from './layout/HeaderNav';
import { Footer } from './layout/Footer';

export const SobreMi = () => {
    return (
        <>
            {/* Barra de nevegación */}
            <HeaderNav></HeaderNav>

            <section id="sobremi">
                <div className="contenedor-foto">
                    <img src={ImagenPerfil}></img>
                </div>
                <div className="sobremi">
                    <p className="titulo-seccion"> Sobre mi</p>
                    <h2>Oscar Bautista Gaytan <span>Ing. En Desarrollo de Sotware</span> </h2>
                    
                    <p>
                        Programador de Software apasionado por la creación de soluciones tecnológicas. 
                        Con experiencia en el desarrollo de aplicaciones web, me especializo en programación en el lado del servidor y en la gestión de bases de datos, en particular con tecnologías como PHP, JavaScript, jQuery y MySQL. Constantemente busco nuevos desafíos y oportunidades para expandir mis habilidades en el campo de la programación. Siempre estoy dispuesto a aprender y adaptarme 
                        a nuevas tecnologías con el fin de ofrecer soluciones eficientes y escalables.
                    </p>
                    <a href="#">Descargar CV</a>
                </div>
            </section>

            <Footer></Footer>
        </>
    )
}