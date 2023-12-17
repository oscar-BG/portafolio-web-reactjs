import React from 'react';
import {FaBars, FaGithub, FaLinkedin} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

export const HeaderNav = () => {
    function responsiveMenu() {
        var x = document.getElementById("nav");
        if (x.className === "") {
            x.className = "responsive";
        } else {
            x.className = "";
        }
    }

    

    return (
        <header>
            <div className="contenido-header">
              <h1> DEV </h1>

                <nav id="nav" className="">
                    <ul id="links">
                        <li>
                            <NavLink to='/presentacion' className="seleccionado" >INICIO</NavLink> 
                        </li>
                        <li>
                            <NavLink to="/sobremi" >SOBRE MI</NavLink>
                        </li>
                        <li>
                            <NavLink to="/servicios" >SERVICIOS</NavLink>
                        </li>
                        <li>
                            <NavLink to="/portafolio" >PORTAFOLIO</NavLink>
                        </li>
                    </ul>
                </nav>

                {/** Iconos del menu responsivo */}
                <div id="icono-nav" onClick={() => responsiveMenu()}>
                    <FaBars></FaBars>
                </div>

                {/**  Iconos de redes sociales */}
                <div className="redes">
                    <a href="https://github.com/oscar-BG" target="_blank" rel="noreferrer"> <FaGithub></FaGithub> </a>
                    <a href="https://www.linkedin.com/in/oscar-bautista-gaytan-6bb4b8240/" target="_blank" rel="noreferrer"> <FaLinkedin></FaLinkedin> </a>
                </div>
            </div>
        </header>
    )
}