import React, {useState} from "react";
import './styles.css';
import {FiCornerDownLeft} from 'react-icons/fi';
import {HiOutlineDocumentAdd} from 'react-icons/hi';
import {AiFillHome} from 'react-icons/ai';
import {BsBuildingAdd} from 'react-icons/bs'
import {Link} from 'react-router-dom';
import api from "../../services/api";
import Paises from "../Pais";

export default function NovaCidade(){
    const [novaCidade, setNovaCidade] = useState('');
    const [paises, setPaises] = useState('');
    
    async function postCidade(){
        const data ={
            nome: novaCidade,
            nomePais: paises
        }

        try{
            await api.post('Cidade', data);
        }catch(error){
            alert("Erro ao salvar cadastro de Cidade" + error);
        }

    }

    return (
        <div className="nova-cidade-container">
            <div className="Content">
                <section className="form">
                    <a><BsBuildingAdd size={32} color ="#17202a" />{" "}Nova Cidade </a>
                    <Link className="back-link" to="/cidades">
                        <FiCornerDownLeft size={30} color="#17202a" data-toggle="tooltip" data-placement="top" title="Voltar para consulta" />
                    </Link>
                    {" "}
                    <Link className="back-link" to="/">
                        <AiFillHome size={30} color="red" data-toggle="tooltip" data-placement="top" title="Voltar para a página inicial" />
                    </Link>
                </section>
                <form onSubmit={postCidade}>
                    <input placeholder="Nome da Cidade" onChange={e => setNovaCidade(e.target.value)}/>
                    <input placeholder="Nome do País" onChange={e => setPaises(e.target.value)}/>
                    <button className="button" type="submit">Salvar</button>            
                </form>
            </div>

        </div>
    )
}