import React, {useState} from "react";
import './styles.css';
import {FiCornerDownLeft} from 'react-icons/fi';
import {HiOutlineDocumentAdd} from 'react-icons/hi';
import {AiFillHome} from 'react-icons/ai';
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
                    <a><HiOutlineDocumentAdd size={32} color ="#17202a" />Novo Carro </a>
                    <Link className="back-link" to="/carros">
                        <FiCornerDownLeft size={30} color="#17202a" data-toggle="tooltip" data-placement="top" title="Voltar para consulta" />
                    </Link>
                    {" "}
                    <Link className="back-link" to="/">
                        <AiFillHome size={30} color="#669AE1" data-toggle="tooltip" data-placement="top" title="Voltar para a página inicial" />
                    </Link>
                </section>
                <form onSubmit={postCarro}>
                    <input placeholder="Nome do Carro" onChange={e => setNovoNome(e.target.value)}/>
                    <input placeholder="Cor do Carro" onChange={e => setNovaCor(e.target.value)}/>
                    <input type="number" placeholder="Tipo do Pneu" onChange={e => setNovosPneus(e.target.value)}/>
                    <button className="button" type="submit">Salvar</button>            
                </form>
            </div>

        </div>
    )
}