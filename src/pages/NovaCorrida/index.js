import React, {useState} from "react";
import './styles.css';
import {FiCornerDownLeft} from 'react-icons/fi';
import {GiCheckeredFlag} from 'react-icons/gi';
import {AiFillHome} from 'react-icons/ai';
import {Link} from 'react-router-dom';
import api from "../../services/api";

export default function NovaCorrida(){
    const [novaCorrida, setNovoNome] = useState('');
    const [novaData, setNovaData] = useState('');
    const [qtdVolta, setQtdVolta] = useState('');
    const [chuva, setChuva] = useState('');

    async function postCorrida(){
        const data ={
            nome: novaCorrida,
            dataCorrida: novaData,
            quantidadeVoltas: qtdVolta,
            chanceChuva : chuva
        }

        try{
            await api.post('Corrida', data);
        }catch(error){
            alert("Erro ao salvar cadastro de Corrida" + error);
        }

    }

    return (
        <div className="novo-pais-container">
            <div className="Content">
                <section className="form">
                    <a><GiCheckeredFlag size={32} color ="#17202a" />{" "}Nova Corrida </a>
                    <Link className="back-link" to="/corridas">
                        <FiCornerDownLeft size={30} color="#17202a" data-toggle="tooltip" data-placement="top" title="Voltar para consulta" />
                    </Link>
                    {" "}
                    <Link className="back-link" to="/">
                        <AiFillHome size={30} color="purple" data-toggle="tooltip" data-placement="top" title="Voltar para a página inicial" />
                    </Link>
                </section>
                <form onSubmit={postCorrida}>
                    <input placeholder="Nome da Corrida" onChange={e => setNovoNome(e.target.value)}/>
                    <input type = "date" placeholder="Data - Corrida" onChange={e => setNovaData(e.target.value)}/>
                    <input type = "number" placeholder="Número de Voltas" onChange={e => setQtdVolta(e.target.value)}/>
                    <input type = "number" placeholder="Chance de Chuva" onChange={e => setChuva(e.target.value)}/>

                    <button className="button" type="submit">Salvar</button>            
                </form>
            </div>

        </div>
    )
}