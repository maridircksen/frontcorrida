import React, {useState} from "react";
import './styles.css';
import {FiCornerDownLeft} from 'react-icons/fi';
import {GoCopilot} from 'react-icons/go';
import {AiFillHome} from 'react-icons/ai';
import {Link} from 'react-router-dom';
import api from "../../services/api";

export default function NovoPiloto(){
    const [novoNome, setNovoNome] = useState('');
    const [idade, setIdade] = useState('');
    //const [carro, setCarro] = useState('');
    const [equipe, setEquipe] = useState('');


    async function postPiloto(){
        const data ={
            nome: novoNome,
            idade: idade,
            equipe: equipe,
        }

        try{
            await api.post('Piloto', data);
        }catch(error){
            alert("Erro ao salvar cadastro de piloto" + error);
        }

        //navigate ("/pilotos");
    }

    return (
        <div className="novo-carro-container">
            <div className="Content">
                <section className="form">
                    <a><GoCopilot size={32} color ="#17202a" />{" "}Novo Piloto </a>
                    <Link className="back-link" to="/pilotos">
                        <FiCornerDownLeft size={30} color="#17202a" data-toggle="tooltip" data-placement="top" title="Voltar para consulta" />
                    </Link>
                    {" "}
                    <Link className="back-link" to="/">
                        <AiFillHome size={30} color="green" data-toggle="tooltip" data-placement="top" title="Voltar para a página inicial" />
                    </Link>
                </section>
                <form onSubmit={postPiloto}>
                    <input placeholder="Nome do Piloto" onChange={e => setNovoNome(e.target.value)}/>
                    <input placeholder="Idade do Piloto" onChange={e => setIdade(e.target.value)}/>
                    <input  placeholder="Equipe do Piloto" onChange={e => setEquipe(e.target.value)}/>
                    <button className="button" type="submit">Salvar</button>            
                </form>
            </div>

        </div>
    )
}