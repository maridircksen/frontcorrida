import React, {useState, useCallback, useEffect} from "react";
import './styles.css';
import {Link, useParams, useNavigate} from 'react-router-dom';
import api from "../../services/api";
import{FiFileText, FiCornerDownLeft} from 'react-icons/fi';

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
        }catch(error){
            alert ("Erro ao buscar o carro! + erro");
            navigate('/carros');
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
                    <FiFileText size={105} color="#17202a"/>
                    <h1>Alterar Carro</h1>
                    <Link className="back-link" to="/carros">
                        <FiCornerDownLeft size={105} color="#17202a"/>
                    </Link>
                    <form onSubmit={putCarro}>
                        <input placeholder="Id" value={id} readOnly/>
                        <input placeholder="Nome do Carro" value={nome} onChange={e => setNome(e.target.value)}/>
                        <input placeholder="Cor do Carro"  value={cor}  onChange={e => setCor(e.target.value)}/>
                        <input placeholder="Tipo dos pneus do Carro" value={pneus} onChange={e => setPneus(e.target.value)}/>
                        <button className="button" type="submit">Alterar</button>
                    </form>
                </section>
                
            </div>
        </div>
    );
}