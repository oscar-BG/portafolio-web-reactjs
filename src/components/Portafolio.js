import React from 'react';
import { HeaderNav } from './layout/HeaderNav';
import imgProyecto1 from '../static/img/Fixp_Clientes.jpg'
import imgProyecto2 from '../static/img/Fixp_Taller.jpg'
import imgProyecto3 from '../static/img/Fixp_refaccionaria.jpg'
import { Footer } from './layout/Footer';

export const Portafolio = () => {
    return (
        <>

            {/* <!-- Portafolio --> */}
            <HeaderNav></HeaderNav>

            <section id="portafolio">
                <h3 className="titulo-seccion">MIS PROYECTOS</h3>
                <div className="fila">
                    <div className="proyecto">
                        <div className="overlay"></div>
                        <img src={imgProyecto1}></img>
                        <div className="info">
                            <h4>Diseño de aplicación movil</h4>
                        </div>
                    </div>
                    <div className="proyecto">
                        <div className="overlay"></div>
                        <img src={imgProyecto2}></img>
                        <div className="info">
                            <h4>Diseño de aplicación movil</h4>
                        </div>
                    </div>
                    <div className="proyecto">
                        <div className="overlay"></div>
                        <img src={imgProyecto3}></img>
                        <div className="info">
                            <h4>Diseño de aplicación movil</h4>
                        </div>
                    </div>
                </div>
            </section>

            <Footer></Footer>
        </>
    )
}