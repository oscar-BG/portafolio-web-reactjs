import React from 'react';
import { FaCode } from "react-icons/fa";
import { HeaderNav } from './layout/HeaderNav';
import { Footer } from './layout/Footer';

export const Servicios = () => {
    return (
        <>
            {/* Barra de nevegación */}
            <HeaderNav></HeaderNav>

            <section id="servicios">
                <h3 className="titulo-seccion">MIS SERVICIOS</h3>
                <div className="fila">
                    <div className="servicio">
                        <span className="icono"> <FaCode /> </span>

                        <h4>Diseño de Sitios Web</h4>
                        <hr></hr>
                        <ul>
                            <li>Maquetación de sitio web</li>
                            <li>SEO</li>
                        </ul>
                        <p>
                            Creación y actualización de sitios web para empresar, organizaciones o individuos, creando sitios web accesibles
                            en diferentes dispositivos, como computadoras de escritorio, tabletas y teléfonos móviles.
                            Ayudar a mejorar la visibilidad de los sitios web en los motores de búsqueda para aumentar el tráfico orgánico.
                        </p>
                    </div>
                    <div className="servicio">
                        <span className="icono"> <FaCode /> </span>

                        <h4>BackEnd</h4>
                        <hr></hr>
                        <ul>
                            <li>API</li>
                            <li>Web Service</li>
                        </ul>
                        <p>
                            Construir API eficientes para permitir la comunicación entre diferentes componentes de software, gestión de bases de datos eficientes.
                            Desarrollo de Sistemas de Gestión de Contenidos (CMS): permitiendo a los usuarios gestionar y actualizar fácilmente el contenido de sus sitios web.
                        </p>
                    </div>
                </div>
            </section>

            {/** AECCION DE HABILIDADES */}
            <div className="contenedor-skills" id="skills">
                <h3 className="titulo-seccion">HABILIDADES</h3>

                <div className="flexbox-container">
                    <div className="box skill">
                        <div className="info">
                            <p> <span className="lista"></span> Html & Css</p>
                        </div>
                    </div>

                    <div className="box skill">
                        <div className="info">
                            <p> <span className="lista"></span> Bootstrap </p>
                        </div>
                    </div>

                    <div className="box skill">
                        <div className="info">
                            <p> <span className="lista"></span> JavaScript </p>
                        </div>
                    </div>

                    <div className="box skill">
                        <div className="info">
                            <p> <span className="lista"></span> JQuery </p>
                        </div>
                    </div>

                    <div className="box skill">
                        <div className="info">
                            <p> <span className="lista"></span> Git </p>
                        </div>
                    </div>

                    <div className="box skill">
                        <div className="info">
                            <p> <span className="lista"></span> React Js </p>
                        </div>
                    </div>

                    <div className="box skill">
                        <div className="info">
                            <p> <span className="lista"></span> Php </p>
                        </div>
                    </div>

                    <div className="box skill">
                        <div className="info">
                            <p> <span className="lista"></span> Docker </p>
                        </div>
                    </div>

                    <div className="box skill">
                        <div className="info">
                            <p> <span className="lista"></span> PostgreSQL </p>
                        </div>
                    </div>

                </div>
            </div>

            <Footer></Footer>
        </>
    )
}