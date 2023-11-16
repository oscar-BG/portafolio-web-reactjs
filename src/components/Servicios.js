import React from 'react';
import { FaCode } from "react-icons/fa";
import { HeaderNav } from './layout/HeaderNav';

export const Servicios = () => {
    return (
        <>
            {/* Barra de nevegación */}
            <HeaderNav></HeaderNav>

            <section id="servicios">
                <h3 className="titulo-seccion">MIS SERVICIOS</h3>
                <div className="fila">
                    <div className="servicio">
                        <spna className="icono"> <FaCode /> </spna>

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
                        <spna className="icono"> <FaCode /> </spna>

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
        </>
    )
}