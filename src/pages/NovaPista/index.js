import React, {useState} from "react";
import './styles.css';
import {FiCornerDownLeft} from 'react-icons/fi';
import {AiFillHome} from 'react-icons/ai';
import {FaRoad} from 'react-icons/fa'
import {Link} from 'react-router-dom';
import api from "../../services/api";


export default function NovaPista(){
    const [novaCidade, setNovaCidade] = useState('');
    const [novoNome, setNovoNome] = useState('');
    const [dificuldade, setDificuldade] = useState ('');
    
    async function postPista(){
        const data ={
            nome: novaCidade,
            dificuldade: novoNome
        }

        try{
            await api.post('Pista', data);
        }catch(error){
            alert("Erro ao salvar cadastro de Pista" + error);
        }

    }

    return (
        <div className="nova-pista-container">
            <div className="Content">
                <section className="form">
                    <a><FaRoad size={32} color ="#17202a" />{" "}Nova Pista </a>
                    <Link className="back-link" to="/pistas">
                        <FiCornerDownLeft size={30} color="#17202a" data-toggle="tooltip" data-placement="top" title="Voltar para consulta" />
                    </Link>
                    {" "}
                    <Link className="back-link" to="/">
                        <AiFillHome size={30} color="#62C2E4" data-toggle="tooltip" data-placement="top" title="Voltar para a página inicial" />
                    </Link>
                </section>
                <form onSubmit={postPista}>
                    <input placeholder="Nome da Pista" onChange={e => setNovoNome(e.target.value)}/>
                    <input placeholder="Dificuldade" onChange={e => setDificuldade(e.target.value)}/>
                    <button className="button" type="submit">Salvar</button>            
                </form>
            </div>

        </div>
    )
}