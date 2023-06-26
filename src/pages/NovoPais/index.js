import React, {useState} from "react";
import './styles.css';
import {FiCornerDownLeft} from 'react-icons/fi';
import {TbWorldCheck} from 'react-icons/tb';
import {AiFillHome} from 'react-icons/ai';
import {Link} from 'react-router-dom';
import api from "../../services/api";

export default function NovoPais(){
    const [novoNome, setNovoNome] = useState('');

    async function postPais(){
        const data ={
            nome: novoNome,
        }

        try{
            await api.post('Pais', data);
        }catch(error){
            alert("Erro ao salvar cadastro de País" + error);
        }

    }

    return (
        <div className="novo-pais-container">
            <div className="Content">
                <section className="form">
                    <a><TbWorldCheck size={32} color ="#17202a" />Novo País </a>
                    <Link className="back-link" to="/paises">
                        <FiCornerDownLeft size={30} color="#17202a" data-toggle="tooltip" data-placement="top" title="Voltar para consulta" />
                    </Link>
                    {" "}
                    <Link className="back-link" to="/">
                        <AiFillHome size={30} color="orange" data-toggle="tooltip" data-placement="top" title="Voltar para a página inicial" />
                    </Link>
                </section>
                <form onSubmit={postPais}>
                    <input placeholder="Nome do País" onChange={e => setNovoNome(e.target.value)}/>
                    <button className="button" type="submit">Salvar</button>            
                </form>
            </div>

        </div>
    )
}