import React from 'react';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { HeaderNav } from '../components/layout/HeaderNav';
import { Presentacion } from '../components/Presentacion';
import { Portafolio } from '../components/Portafolio';
import { SobreMi } from '../components/SobreMi';

export const MisRutas = () => {
    return (
        <BrowserRouter>
            <section id="inicio">
                <div className="contenido">

                    {/** Header */}
                    <HeaderNav></HeaderNav>

                    <Routes>
                        <Route path="/" element={ <Navigate to="/presentacion"></Navigate>} ></Route>
                        <Route path="/presentacion" element={<Presentacion></Presentacion>}></Route>
                        <Route path="/portafolio" element={<Portafolio></Portafolio>}></Route>
                        <Route path="/sobremi" element={<SobreMi></SobreMi>}></Route>
                    </Routes>

                    
                </div>
            </section>
        </BrowserRouter>
    )
}