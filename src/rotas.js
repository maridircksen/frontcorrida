import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
//carros
import Carros from "./pages/Carro";
import NovoCarro from "./pages/NovoCarro";
import ExcluirCarro from "./pages/ExcluirCarro";
import AlterarCarro from "./pages/AlterarCarro";

//cidades
import Cidades from "./pages/Cidade";
import NovaCidade from "./pages/NovaCidade";
import AlterarCidade from "./pages/AlterarCidade";
import ExcluirCidade from "./pages/ExcluirCidade";

//corridas
import Corridas from "./pages/Corrida";
import NovaCorrida from "./pages/NovaCorrida";
import AlterarCorrida from "./pages/AlterarCorrida";
import ExcluirCorrida from "./pages/ExcluirCorrida";


//paises
import Paises from "./pages/Pais";
import NovoPais from "./pages/NovoPais";
import ExcluirPais from "./pages/ExcluirPais";
import AlterarPais from "./pages/AlterarPais";
import AlterarPiloto from "./pages/AlterarPiloto";

//pilotos
import Pilotos from "./pages/Piloto";
import NovoPiloto from "./pages/NovoPiloto";
import ExcluirPiloto from "./pages/ExcluirPiloto";

//pistas
import Pistas from "./pages/Pista";
import NovaPista from "./pages/NovaPista";
import ExcluirPista from "./pages/ExcluirPista";
import AlterarPista from "./pages/AlterarPista";

import {FaCar, FaCity, FaRoad} from 'react-icons/fa';
import {GiCheckeredFlag, GiWorld} from 'react-icons/gi';
import {GoCopilot} from 'react-icons/go';



export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element=
                    {                       
                        <nav class="menu">
                            <input type="checkbox" href="#" class="menu-open" name="menu-open" id="menu-open" />
                                <label class="menu-open-button" for="menu-open">
                                    <span class="lines line-1"></span>
                                    <span class="lines line-2"></span>
                                    <span class="lines line-3"></span>
                                </label>
                            
                            <a href="/carros"class="menu-item blue"> <FaCar size={20} color="#17202a"/></a>
                            <a href="/cidades" class="menu-item red">  <FaCity size={20} color="#17202a"/> </a>
                            <a href="/corridas" class="menu-item purple"> <GiCheckeredFlag size={20} color="#17202a"/> </a>
                            <a href="/paises" class="menu-item orange"> <GiWorld size={20} color="#17202a"/> </a>
                            <a href="/pilotos" class="menu-item green"> <GoCopilot size={20} color="#17202a"/> </a>
                            <a href="/pistas" class="menu-item lightblue"> <FaRoad size={20} color="#17202a"/> </a>
                        </nav>
                    }/>
                <Route path="/carros" element={<Carros />}/>
                <Route path="/carros/novo" element={<NovoCarro />}/>
                <Route path="/carros/excluir/:id" element={<ExcluirCarro />}/>
                <Route path="/carros/alterar/:id" element={<AlterarCarro />}/>
                
                <Route path="/paises" element={<Paises />}/>
                <Route path="/paises/novo" element={<NovoPais />}/>
                <Route path="/paises/excluir/:id" element={<ExcluirPais />}/>
                <Route path="/paises/alterar/:id" element={<AlterarPais />}/>
                
                <Route path="/cidades" element={<Cidades />}/>
                <Route path="/cidades/nova" element={<NovaCidade />}/>
                <Route path="/cidades/alterar/:id" element={<AlterarCidade />}/>
                <Route path="/cidades/excluir/:id" element={<ExcluirCidade />}/>

                <Route path="/corridas" element={<Corridas />}/>
                <Route path="/corridas/nova" element={<NovaCorrida />}/>
                <Route path="/corridas/alterar/:id" element={<AlterarCorrida />}/>
                <Route path="/corridas/excluir/:id" element={<ExcluirCorrida />}/>

                <Route path="/pilotos" element={<Pilotos />}/>
                <Route path="/pilotos/novo" element={<NovoPiloto />}/>
                <Route path="/pilotos/excluir/:id" element = {<ExcluirPiloto />}/>
                <Route path="/pilotos/alterar/:id" element={<AlterarPiloto />}/>

                <Route path="/pistas" element={<Pistas />}/>
                <Route path="/pistas/nova" element = {<NovaPista />}/>
                <Route path="/pistas/alterar/:id" element = {<AlterarPista />}/>
                <Route path="/pistas/excluir/:id" element = {<ExcluirPista />}/>

            </Routes>
        </BrowserRouter>
    )
}