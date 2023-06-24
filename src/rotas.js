import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Carros from "./pages/Carro";
import NovoCarro from "./pages/NovoCarro";
import ExcluirCarro from "./pages/ExcluirCarro";
import AlterarCarro from "./pages/AlterarCarro";

export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element=
                    {<div>
                        <h1>Gerenciamento de Corrida</h1>
                        <Link className="button" to="carros">Carros</Link>
                    </div>}/>
                <Route path="/carros" element={<Carros />}/>
                <Route path="/carros/novo" element={<NovoCarro />}/>
                <Route path="/carros/excluir/:id" element={<ExcluirCarro />}/>
                <Route path="/carros/alterar/:id" element={<AlterarCarro />}/>
            </Routes>
        </BrowserRouter>
    )
}