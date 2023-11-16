import React from 'react';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { HeaderNav } from '../components/layout/HeaderNav';
import { Presentacion } from '../components/Presentacion';
import { Portafolio } from '../components/Portafolio';
import { SobreMi } from '../components/SobreMi';
import { Servicios } from '../components/Servicios';

export const MisRutas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Navigate to="/presentacion"></Navigate>} ></Route>
                <Route path="/presentacion" element={<Presentacion></Presentacion>}></Route>
                <Route path="/portafolio" element={<Portafolio></Portafolio>}></Route>
                <Route path="/sobremi" element={<SobreMi></SobreMi>}></Route>
                <Route path="/servicios" element={<Servicios></Servicios>}></Route>
            </Routes>
            {/* <section id="inicio">
                <div className="contenido">

                    

                    
                </div>
            </section> */}
        </BrowserRouter>
    )
}