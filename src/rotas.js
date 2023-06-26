import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
//carros
import Carros from "./pages/Carro";
import NovoCarro from "./pages/NovoCarro";
import ExcluirCarro from "./pages/ExcluirCarro";
import AlterarCarro from "./pages/AlterarCarro";

//cidades
import Cidades from "./pages/Cidade";


//paises
import Paises from "./pages/Pais";
import NovoPais from "./pages/NovoPais";
import ExcluirPais from "./pages/ExcluirPais";
import AlterarPais from "./pages/AlterarPais";

import {AiOutlineUser} from 'react-icons/ai';
import {FaCar, FaCity, FaRoad} from 'react-icons/fa';
import {GiCheckeredFlag, GiWorld} from 'react-icons/gi';
import NovaCidade from "./pages/NovaCidade";
import AlterarCidade from "./pages/AlterarCidade";
import ExcluirCidade from "./pages/ExcluirCidade";



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
                            <a href="#" class="menu-item purple"> <GiCheckeredFlag size={20} color="#17202a"/> </a>
                            <a href="/paises" class="menu-item orange"> <GiWorld size={20} color="#17202a"/> </a>
                            <a href="#" class="menu-item green"> <AiOutlineUser size={20} color="#17202a"/> </a>
                            <a href="#" class="menu-item lightblue"> <FaRoad size={20} color="#17202a"/> </a>
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
                <Route path="/cidades/novacidade" element={<NovaCidade />}/>
                <Route path="/cidades/alterarcidade" element={<AlterarCidade />}/>
                <Route path="/cidades/excluircidade" element={<ExcluirCidade />}/>

            </Routes>
        </BrowserRouter>
    )
}