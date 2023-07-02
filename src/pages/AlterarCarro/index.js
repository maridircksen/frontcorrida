import React, {useState, useCallback, useEffect} from "react";
import './styles.css';
import {Link, useParams, useNavigate} from 'react-router-dom';
import api from "../../services/api";
import{FiCornerDownLeft} from 'react-icons/fi';
import {TbWorldExclamation} from 'react-icons/tb';
import {AiFillHome} from 'react-icons/ai';

export default function AlterarCarro(){
    const {id} = useParams();
    const [nome, setNome] = useState('');
    const [cor, setCor] = useState('');
    const [pneus, setPneus] = useState('');
    const navigate = useNavigate();
    const [load, setLoad] = useState(false);

    const loadCarro = useCallback(async () =>{
        try{
            const response = await api.get('Carro/' + id);
            setNome(response.data.nome);
            setCor(response.data.cor);
          //  setPneus(response.data.pneu);
            
        }catch(error){
            alert ("Erro ao buscar o carro! + erro");
            navigate('/carro');
        }
    }, [id,setNome, navigate]);

    useEffect(() => {
        if(!load){
            loadCarro();
            setLoad(true);
        }
    });

    async function putCarro(){
        const data = {
            id,
            nome,
            cor,
            pneus
        }

        try{
            await api.put('Carro', data);
        }catch(error){
            alert("Erro ao alterar cadastro de carro!" + error);
        }

        navigate('/carros');
    }

    return(
        <div className="novo-carro-container">
            <div className="content">
                <section className="form">
                <   a><TbWorldExclamation size={32} color ="#17202a" />Alterar Carro </a>
                    <Link className="back-link" to="/carros">
                        <FiCornerDownLeft size={30} color="#17202a" data-toggle="tooltip" data-placement="top" title="Voltar para consulta" />
                    </Link>
                    {" "}
                    <Link className="back-link" to="/">
                        <AiFillHome size={30} color="#669AE1" data-toggle="tooltip" data-placement="top" title="Voltar para a página inicial" />
                    </Link>
                    <form onSubmit={putCarro}>
                        <input placeholder="Id" value={id} readOnly/>
                        <input placeholder="Nome do Carro" value={nome} onChange={e => setNome(e.target.value)}/>
                        <input placeholder="Cor do Carro"  value={cor} onChange={e => setCor(e.target.value)}/>
                        <input placeholder="Tipo de Pneus" type="number" value={pneus} onChange={e => setPneus(e.target.value)}></input>
                        <button className="button" type="submit">Alterar</button>
                    </form>
                </section>
                
            </div>
        </div>
    );
}



