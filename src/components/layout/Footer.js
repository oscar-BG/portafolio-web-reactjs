import React from 'react';
import {FaBars, FaGithub, FaLinkedin} from 'react-icons/fa';


export const Footer = () => {
    return (
        <footer>
            <p>©2024 Todos los derechos reservados</p>
            <div className="redes">
                <a href="#">
                    <FaGithub></FaGithub>
                </a>
                <a href="#">
                    <FaLinkedin></FaLinkedin>
                </a>
            </div>
        </footer>
    )
}