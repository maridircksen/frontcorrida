import React, {useState} from "react";
import './styles.css';
import {FiFilePlus, FiCornerDownLeft} from 'react-icons/fi';
import {Link} from 'react-router-dom';
import api from "../../services/api";

export default function NovoCarro(){
    const [novoNome, setNovoNome] = useState('');
    const [novaCor, setNovaCor] = useState('');
    const [novosPneus, setNovosPneus] = useState('');


    async function postCarro(){
        const data ={
            nome: novoNome,
            cor: novaCor,
            pneus: novosPneus
        }

        try{
            await api.post('Carro', data);
        }catch(error){
            alert("Erro ao salvar cadastro de carro" + error);
        }

        //navigate ("/carros");
    }

    return (
        <div className="novo-carro-container">
            <div className="Content">
                <section className="form">
                    <FiFilePlus size={105} color ="#17202a" />
                    <h1>Novo Carro</h1>
                    <Link className="back-link" to="/carros">
                        <FiCornerDownLeft size={105} color="#17202a" />
                    </Link>
                </section>
                <form onSubmit={postCarro}>
                    <input placeholder="Nome do Carro" onChange={e => setNovoNome(e.target.value)}/>
                    <input placeholder="Cor do Carro" onChange={e => setNovaCor(e.target.value)}/>
                    <input placeholder="Tipo do Pneu" onChange={e => setNovosPneus(e.target.value)}/>
                    <button className="button" type="submit">Salvar</button>            
                </form>
            </div>

        </div>
    )
}